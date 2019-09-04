
import {
    MockApplication
} from './support/TestApplication';
import { DatabaseConnection } from '../src/DatabaseConnection';
import * as api from '../src/api';

describe('Database', () => {
    var app: MockApplication = null;

    beforeAll((done) => {
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    });

    afterAll((done) => {
        app.close().then(() => {
            app = null;
            done();
        });
    });

    it('has timeout', (done) => {
        app.getDB().getConnection().then((connection: DatabaseConnection) => {
            expect(connection.getTimeout()).toBe(3600000);
            done();
        }).catch((error: any) => {
            fail(error);
        });
    });

    describe('ManagedDatabaseConnection', () => {
        it('is exposed in public API', () => {
            expect(api.ManagedDatabaseConnection).toBeTruthy();
        });
    });
});
