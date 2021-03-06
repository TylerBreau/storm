/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {
    getInstance
} from './instance';
import {Readable} from 'stream';
import {IDatabaseConnection} from './IDatabaseConnection';
import {Query} from './Query';
import { IConfig } from './IConfig';
import { IDictionary } from '@totalpave/interfaces';

export const LINGER_WARNING: number = 10000;
export const DEFAULT_QUERY_TIMEOUT: number = 3600000;
const TAG: string = 'DatabaseConnection';

/**
 * Do not call `new Database` directly. Use `Database.getConnection` to create a `DatabaseConnection` object.
 * @abstract
 * @implements `IDatabaseConnection`
 * @class
 */
export abstract class DatabaseConnection<TAPI> implements IDatabaseConnection {
    private _api: any;
    private _readOnly: boolean;
    private _timeout: number;
    private _lingerTimer: NodeJS.Timer;
    private _instantiationStack: string;
    private _open: boolean;

    public constructor(api: TAPI, isReadOnly: boolean, instantiationStack: string) {
        this._api = api;
        this._readOnly = isReadOnly;
        this._instantiationStack = (instantiationStack || '').replace(/Error:/, 'Warning:');
        this._open = true;

        let config: IConfig = getInstance().getConfig();

        this._timeout = config.database ? config.database.query_timeout : null;
        if (isNaN(this._timeout)) {
            this._timeout = DEFAULT_QUERY_TIMEOUT;
        }

        this._armLingerWarning();
    }

    private _triggerLingerWarning(): void {
        getInstance().getLogger().warn(TAG, `Database connection has lingered for ${LINGER_WARNING}ms of inactivity.\n\n${this._instantiationStack}`);
    }

    public setInstantiationStack(stack: string): void {
        this._instantiationStack = stack;
    }

    /**
     * Gets the callback stacktrace to determine what opened
     * this connection. Useful for debugging lingering connections.
     * @returns string - A stacktrace
     */
    public getInstantiationStack(): string {
        return this._instantiationStack;
    }

    private _armLingerWarning() {
        if (this._lingerTimer) {
            clearTimeout(this._lingerTimer);
        }

        this._lingerTimer = setTimeout(() => {
            this._triggerLingerWarning();
        }, LINGER_WARNING);
    }

    /**
     * Gets the underlying Database API
     * @returns any
     */
    public getAPI(): TAPI {
        return this._api;
    }

    /**
     * Returns true if connection was created without
     * write access
     * @returns boolean
     */
    public isReadOnly(): boolean {
        return this._readOnly;
    }

    /**
     * Sets the timeout of this connectino
     * 
     * @param timeout in milliseconds
     */
    public setTimeout(timeout: number): void {
        if (isNaN(timeout)) {
            throw new TypeError('setTimeout expects a number in parameter 1.');
        }

        this._timeout = timeout;
    }

    /**
     * Returns the current timeout setting
     * @returns number in milliseconds
     */
    public getTimeout(): number {
        return this._timeout;
    }

    /**
     * Queries the database for a dataset.
     * 
     * @param {Query} query The database query
     * @async
     * @returns Promise<TQueryResult>
     */
    public async query<TQueryResult = any>(query: Query): Promise<TQueryResult> {
        this._armLingerWarning();
        
        let queryStr: string = null;
        queryStr = query.getQuery();
        let params: IDictionary = query.getParametersForQuery();

        let results: TQueryResult = await this._query<TQueryResult>(queryStr, params);
        return await (<any>query.onPostProcess(this, <any>results));
    }

    /**
     * 
     * @param query The database query
     * @param params Parameters for the query
     * @param streamOptions Stream options
     * @returns Readable
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public stream(query: Query, streamOptions?: any): Readable {
        this._armLingerWarning();
        let queryStr: string = null;
        let params: IDictionary = query.getParametersForQuery();
        queryStr = query.getQuery();
        return this._stream(queryStr, params, streamOptions);
    }

    /**
     * Closes the connection. May error if connection has an active transaction.
     * if `forceClose` boolean is true, it will force close the connection, regardless
     * of transaction state.
     * 
     * @param forceClose optional boolean
     * @async
     * @returns Promise<void>
     */
    public close(forceClose: boolean = false): Promise<void> {
        if (this.isClosed()) {
            return Promise.resolve();
        }
        
        this._open = false;
        clearTimeout(this._lingerTimer);
        return this._close(forceClose);
    }

    /**
     * Returns true if the connection has been closed.
     */
    public isClosed(): boolean {
        return !this._open;
    }

    /**
     * Implementation method to start a transaction.
     * 
     * @abstract
     * @async
     * @returns Promise<void>
     */
    public abstract startTransaction(): Promise<void>;

    /**
     * Implementation method to determine if the connection is in an active transaction.
     * 
     * @abstract
     * @returns boolean
     */
    public abstract isTransaction(): boolean;

    /**
     * Ends a transaction. if `requiresRollback` is `true`, then `rollback()` is invoked. Otherwise, `commit()` is invoked.
     * 
     * @abstract
     * @async
     * @param requiresRollback optional boolean
     * @returns Promise<void>
     */
    public abstract endTransaction(requiresRollback?: boolean): Promise<void>;
    
    /**
     * Commits a transaction. This will end a transaction.
     * 
     * @abstract
     * @async
     * @returns Promise<void>
     */
    public abstract commit(): Promise<void>;

    /**
     * Rollsback a transaction. This will end a transaction.
     * 
     * @abstract
     * @async
     * @returns Promise<void>
     */
    public abstract rollback(): Promise<void>;

    /**
     * Implementation to close the connection, if `forceClose` is true, close the connection no matter what.
     * Silently error if it means the connection is closed.
     * 
     * @param forceClose boolean, if `true`, should close the connection no matter what.
     * @async
     * @returns Promise<void>
     */
    protected abstract _close(forceClose: boolean): Promise<void>;
    
    /**
     * Implementation method to return a dataset from the database
     * 
     * @param query The database query
     * @param params The query parameters
     * @async
     * @returns Promise
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected abstract _query<TQueryResult>(query: string, params?: any): Promise<TQueryResult>;

    /**
     * Implementation method to return a dataset from the database like `query()`,
     * but returns a `Readable` stream instead.
     * 
     * @param query The database query
     * @param params The query parameters
     * @param streamOptions `Readable` stream options
     * @returns `Readable`
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected abstract _stream(query: string, params?: any, streamOptions?: any): Readable;
}
