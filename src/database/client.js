const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: ['DATE', 'DATETIME', 'TIMESTAMP']
})

pool.on('connection', (connection) => {
    connection.query("SET NAMES utf8");
    connection.query("SET CHARACTER SET utf8");
    connection.query("SET character_set_connection=utf8");
});

// module.exports = pool;

module.exports = pool;
