const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    options: { encrypt: false }
})

// connection.connect()

// 4. Exporter le client connecté
module.exports = connection;