const mysql = require('mysql');

const connection = mysql.createConnection({
    host:     '127.0.0.1',
    user:     'root',
    port:      3306,
    password: 'root',
    database: 'reservas'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Base conectada!");
});

module.exports = connection;
