
import * as api from '../src/api';

describe('Public API', () => {

    it('InvalidValueError', () => {
        expect(api.InvalidValueError).toBeTruthy();
    });

    it('MissingParameter', () => {
        expect(api.MissingParameterError).toBeTruthy();
    });

    it('UnauthorizedAccess', () => {
        expect(api.UnauthorizedAccess).toBeTruthy();
    });
});