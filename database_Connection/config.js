require('dotenv').config();
var mySql = require('mysql2');

var connect = mySql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "trade"
});
connect.connect(function (err) {
    if (err) throw err;
    console.log("Successfully Connected !");
});


module.exports = connect.promise()