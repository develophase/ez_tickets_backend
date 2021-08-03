const mysql2 = require('mysql2');
const {
    DuplicateEntryException,
    ForeignKeyViolationException
} = require('../utils/exceptions/database.exception');
const { InternalServerException } = require('../utils/exceptions/api.exception');
const { Config } = require('../../configs/config');

class DBConnection{
    constructor (){
        this.db = mysql2.createPool({
            host: Config.DB_HOST,
            user: Config.DB_USER,
            password: Config.DB_PASS,
            database: Config.DB_DATABASE,
            dateStrings: ['DATE', 'DATETIME']
        });
        this.checkConnection();
    }

    checkConnection (){
        this.db.getConnection((err, connection) => {
            if (err){
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('Database connection was closed.');
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    console.error('Database has too many connections.');
                }
                if (err.code === 'ECONNREFUSED') {
                    console.error('Database connection was refused.');
                }
            }
            if (connection){
                this.connection = connection;
                connection.release();
            }
            return;
        });
    }

    query = async (sql, values) => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            };
            this.db.execute(sql, values, callback); // execute will internally call prepare and query
        }).catch((err) => {
            const mysqlErrorList = Object.keys(HttpStatusCodes);
            if (mysqlErrorList.includes(err.code)) {
                err.status = HttpStatusCodes[err.code];
                if (err.status === 409) throw new DuplicateEntryException(err.message);
                if (err.status === 512) throw new ForeignKeyViolationException(err.message);
            }

            console.log(`[DBError] ${err}`);
            console.log(`[Code] ${err.code}`);
            throw new InternalServerException();
            // throw err;
        });
    }

    beginTransaction = async () => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            };
            this.connection.beginTransaction(callback);
        });
    }

    rollback = async () => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            };
            this.connection.rollback(callback);
        });
    }

    commit = async () => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if (error) {
                    reject(error);
                    this.rollback();
                    return;
                }
                resolve(result);
            };
            this.connection.commit(callback);
        });
    }

}

// ENUM of mysql errors mapped to http status codes
const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409,
    ER_NO_REFERENCED_ROW_2: 512
});

const dbConnection = new DBConnection();

exports.query = dbConnection.query;
exports.dbTransaction = {
    beginTransaction: dbConnection.beginTransaction,
    rollback: dbConnection.rollback,
    commit: dbConnection.commit
};