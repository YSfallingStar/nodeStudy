const mysql = require("mysql");

const db = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "jysdb",
    password: "dbtjd20162799",
    database: "test01",
});

db.connect();

module.exports = db;