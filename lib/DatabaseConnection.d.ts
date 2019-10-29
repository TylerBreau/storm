/// <reference types="node" />
import { Readable } from 'stream';
import { IDatabaseConnection } from './IDatabaseConnection';
import { Query } from './Query';
import { IQueryParameters } from './IQueryParameters';
export declare const LINGER_WARNING: number;
export declare const DEFAULT_QUERY_TIMEOUT: number;
export declare abstract class DatabaseConnection implements IDatabaseConnection {
    private api;
    private readOnly;
    private _timeout;
    private _lingerTimer;
    private _instantiationStack;
    constructor(api: any, isReadOnly: boolean, instantiationStack: string);
    private _triggerLingerWarning;
    getInstantiationStack(): string;
    private _armLingerWarning;
    getAPI(): any;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    query(query: string | Query, params?: IQueryParameters): Promise<any>;
    stream(query: string, params?: any, streamOptions?: any): Readable;
    close(forceClose?: boolean): Promise<void>;
    abstract startTransaction(): Promise<void>;
    abstract isTransaction(): boolean;
    abstract endTransaction(requiresRollback?: boolean): Promise<void>;
    abstract commit(): Promise<void>;
    abstract rollback(): Promise<void>;
    protected abstract _close(forceClose: boolean): Promise<void>;
    protected abstract _query(query: string, params?: any): Promise<any>;
    protected abstract _stream(query: string, params?: any, streamOptions?: any): Readable;
}
