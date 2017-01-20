var config = {
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    options: {
        encrypt: true
    },
    connectionTimeout: 120 * 60 * 1000,
    requestTimeout: 1000000

};

module.exports = {
    getConnection: function () {
        return new Promise((resolve, reject) => {
            var mssql = require("mssql");
            mssql.connect(process.env.config)
            .then((sql) => {
                resolve(sql);
            })
            .catch((e) => {
                reject(e);
            })
        })
    }
}