// 'use strict';

// var mysql = require('mysql');
// var Database = require('./Database');
// var MySQLConnection = require('./MySQLConnection');

// class MysqlDB extends Database {
// 	constructor(host, port, kwargs) {
// 		super(host, port, kwargs);
// 		console.log('MysqlDB is deprecated, use cluster instead.');
// 	}

// 	getConnection() {
// 		return this._getConnection().then((connection) => {
// 			return Promise.resolve(new MySQLConnection(connection));
// 		});
// 	}

// 	_getConnection() {
// 		return new Promise((resolve, reject) => {
// 			var kwargs = this.getKwargs();
// 			var connection = mysql.createConnection({
// 				host : this.getHost(),
// 				user : kwargs.user,
// 				port : this.getPort() || 3306,
// 				password : kwargs.password,
// 				database : kwargs.database
// 			});

// 			connection.connect((error) => {
// 				if (error) {
// 					return reject(error);
// 				}

// 				return resolve(connection);
// 			});
// 		});
// 	}
// };

// module.exports = MysqlDB;