var mysql = require('mysql')

var pool = mysql.createPool({
    connectionLimit: 100,
    host:'localhost',
    user:'root',
    password:'password',
    database: 'bachelorproject_db',
    port: 3306

})

module.exports = pool;