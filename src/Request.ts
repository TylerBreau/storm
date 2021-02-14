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

import * as express from 'express';
import { IncomingHttpHeaders } from 'http';
import {Writable} from 'stream';
import * as formidable from 'formidable';
import {IFormData} from './IFormData';
import { IAuthTokenData } from './IAuthTokenData';
import { getInstance } from './instance';
import { Token } from './Token';
import { JWTError } from './JWTError';
import { ResponseData } from './ResponseData';
import {StatusCode} from './StatusCode';
import { InternalError } from './InternalError';

export interface IParameterMap {
    [key: string]: string;
}

export class Request<TBody = any, TAuthToken extends IAuthTokenData = IAuthTokenData> {
    private _request: express.Request;

    public constructor(request: express.Request) {
        this._request = request;
    }

    public getBody(): TBody {
        return this._request.body;
    }

    public getForm(): Promise<IFormData> {
        return new Promise<IFormData>((resolve, reject) => {
            let r: express.Request = this.getRequestSource();
            let form: formidable.IncomingForm = new formidable.IncomingForm();
            form.hash = 'md5';

            form.parse(r, (error: any, fields: formidable.Fields, files: formidable.Files): any => {
                if (error) {
                    return reject(error);
                }

                return resolve({
                    fields,
                    files: files
                });
            });
        });
    }

    public getHeaders(): IncomingHttpHeaders {
        return this._request.headers;
    }

    public getHeader(name: string): string {
        let value: string | Array<string> = this._request.headers[name.toLowerCase()];
        if (typeof value === 'string') {
            return value;
        }
        else {
            return value && value[0] ? value[0] : null;
        }
    }

    public getQueryVariables(): any {
        return this._request.query;
    }

    public getParams(): IParameterMap {
        return this._request.params;
    }

    public getParam(name: string): string {
        return this._request.params[name];
    }

    public getIP(): string {
        return this._request.ip;
    }

    public getForwardedIP(): string {
        return this.getHeader('X-Forwarded-For');
    }

    public getHostname(): string {
        return this._request.hostname;
    }

    public getMethod(): string {
        return this._request.method;
    }

    public getURL(): string {
        return this._request.originalUrl;
    }

    public isSecure(): boolean {
        return this._request.secure;
    }

    public pipe(destination: Writable): any {
        return this._request.pipe(destination);
    }

    public unpipe(source: Writable): void {
        this._request.unpipe(source);
    }

    public getRequestSource(): express.Request {
        return this._request;
    }

    public async getAuthenticationToken(): Promise<TAuthToken> {
        let authHeader: string = getInstance().getConfig().authentication_header;
        let tdata: TAuthToken = null;
        try {
            tdata = <TAuthToken>(await getInstance().getTokenManager().verify(new Token(this.getHeader(authHeader))));
        }
        catch (ex) {
            let error: ResponseData = null;
            if (ex && ex.name) {
                switch (ex.name) {
                    case JWTError.ERR_EXPIRED:
                        error = new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
                            code: ex.name,
                            reason: ex.message
                        });
                        break;
                    case JWTError.ERR_GENERIC:
                        error = new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
                            code: ex.name,
                            reason : ex.message
                        });
                        break;
                }
            }

            if (error === null) {
                let ie: InternalError = new InternalError(ex);
                error = new ResponseData(ie.getHTTPCode(), {
                    code: ie.getCode(),
                    reason: ie.getMessage()
                });
            }

            throw error;
        }

        return tdata;
    }
}
