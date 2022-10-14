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

import {StormError} from './StormError';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export class EntityNotFoundError extends StormError {
    public constructor(name: string) {
        super({name: name});
    }

    public getMessage(): string {
        return `${this.getPrivateDetails().name} does not exists.`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.INVALID_VALUE;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_NOT_FOUND;
    }

    public override getLocaleCode(): string {
        return '@breautek/storm/EntityNotFoundError/message';
    }

    public override getLocaleParameters(): Record<string, string> {
        return {
            name: this.getPrivateDetails().name
        };
    }
}
