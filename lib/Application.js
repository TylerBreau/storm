"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const instance_1 = require("./instance");
const Logger_1 = require("./Logger");
const ApplicationEvent_1 = require("./ApplicationEvent");
const ExitCode_1 = require("./ExitCode");
const Request_1 = require("./Request");
const Response_1 = require("./Response");
const Path = require("path");
const args = require("args");
const Express = require("express");
const BodyParser = require("body-parser");
class Application extends events_1.EventEmitter {
    constructor(name, configPath, logSeverity) {
        super();
        instance_1.setInstance(this);
        this.name = name;
        this.logger = this._createLogger();
        if (logSeverity) {
            this.getLogger().setLogLevel(logSeverity);
        }
        process.on('unhandledRejection', (error) => {
            this.getLogger().fatal(error);
        });
        this.configPath = configPath || process.cwd();
        this.getLogger().trace('Application is booting...');
        this.getLogger().trace('Loading Configuration...');
        this.loadConfig(this.configPath).then((config) => {
            this.config = config;
            this.getLogger().trace('Configuration loaded.');
            this.emit(ApplicationEvent_1.ApplicationEvent.CONFIG_LOADED);
            this.onConfigLoad(this.config);
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Initializing DB...');
            return this.initDB(this.getConfig());
        }).then((db) => {
            if (db) {
                this.getLogger().trace('DB Initialized.');
            }
            else {
                this.getLogger().trace('DB is not initialized.');
            }
            this.db = db;
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Starting server...');
            this.server = Express();
            this.server.use(BodyParser.json({
                type: 'application/json',
                limit: this.getRequestSizeLimit()
            }));
            this.server.use(BodyParser.text({
                type: 'text/*',
                limit: this.getRequestSizeLimit()
            }));
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Attaching handlers...');
            return this.attachHandlers();
        }).then(() => {
            var bindingIP = this.getConfig().binding_ip;
            var port = this.getConfig().port;
            this.server.listen(port, bindingIP);
            this.getLogger().trace(`Server started on ${bindingIP}:${port}`);
            this.onReady();
        }).catch((error) => {
            this.getLogger().fatal(error);
        });
    }
    getRequestSizeLimit() {
        return 5242880;
    }
    attachHandler(path, HandlerClass) {
        var handler = new HandlerClass(this);
        this.server.get(path, (request, response) => {
            handler.get(new Request_1.Request(request), new Response_1.Response(response));
        });
        this.server.post(path, (request, response) => {
            handler.post(new Request_1.Request(request), new Response_1.Response(response));
        });
        this.server.put(path, (request, response) => {
            handler.put(new Request_1.Request(request), new Response_1.Response(response));
        });
        this.server.delete(path, (request, response) => {
            handler.delete(new Request_1.Request(request), new Response_1.Response(response));
        });
    }
    loadConfig(path) {
        return new Promise((resolve, reject) => {
            this.getLogger().trace('Configuration loaded.');
            var config = {};
            var cPath = Path.resolve(path, 'bt-config.json');
            var lPath = Path.resolve(path, 'bt-local-config.json');
            var c;
            var l;
            var defaults;
            this.getLogger().trace(`Main Config Path:\t ${cPath}`);
            this.getLogger().trace(`Local Config Path:\t ${lPath}`);
            this.getLogger().trace('Loading configuration defaults.');
            defaults = require(Path.resolve(__dirname, '../bt-config-defaults.json'));
            this.getLogger().trace('Loading main confing...');
            try {
                c = require(cPath);
                this.getLogger().trace('Main config loaded.');
            }
            catch (ex) {
                reject(`Missing ${cPath}.`);
                process.nextTick(() => {
                    process.exit(ExitCode_1.ExitCode.MISSING_CONFIG);
                });
            }
            this.getLogger().trace('Loading optional local config.');
            try {
                l = require(lPath);
                this.getLogger().trace('Local config loaded.');
            }
            catch (ex) {
                this.getLogger().trace('Local config could not be loaded.');
                this.getLogger().trace(ex);
            }
            if (l) {
                config = this._mergeConfig(defaults, this._mergeConfig(c, l));
            }
            else {
                config = this._mergeConfig(defaults, c);
            }
            this.getLogger().trace('Reading command line arguments...');
            config = this._mergeConfig(config, this.getCmdLineArgs());
            this.getLogger().trace('Configurations merged.');
            this.getLogger().trace(config);
            resolve(config);
        });
    }
    getName() {
        return this.name;
    }
    getLogger() {
        return this.logger;
    }
    getConfig() {
        return this.config;
    }
    onConfigLoad(config) { }
    setTokenManager(tokenManager) {
        this.tokenManager = tokenManager;
    }
    getTokenManager() {
        return this.tokenManager;
    }
    getDB() {
        return this.db;
    }
    getCmdLineArgs() {
        var options = {};
        args.option('port', 'The running port to consume', null, (value) => {
            return parseInt(value);
        });
        args.option('binding_ip', 'The binding IP to listen on');
        args.option('authentication_header', 'The header name of the authentication token');
        var argv = args.parse(process.argv);
        if (argv.port) {
            options.port = argv.port;
        }
        if (argv.bindingIp) {
            options.binding_ip = argv.bindingIp;
        }
        if (argv.authenticationHeader) {
            options.authentication_header = argv.authenticationHeader;
        }
        return options;
    }
    initDB(config) {
        return Promise.resolve(null);
    }
    _createLogger() {
        return new Logger_1.Logger(this.getName());
    }
    _mergeConfig(o1, o2) {
        var o = o1;
        for (var i in o2) {
            var o1p = o1[i];
            var o2p = o2[i];
            if (o1p && (typeof o2p === 'object') && !(o2p instanceof Array)) {
                if (typeof o1p === 'object' && !(o1p instanceof Array)) {
                    o[i] = this._mergeConfig(o1p, o2p);
                }
                else {
                    o[i] = o2p;
                }
            }
            else {
                o[i] = o2p;
            }
        }
        return o;
    }
    onReady() { }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map