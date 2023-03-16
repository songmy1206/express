const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  post: '3306',
  database: 'mydb',
});

connection.connect();

module.exports = connection;
