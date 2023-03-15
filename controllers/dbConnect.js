const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'thdalsdud1206~!',
  post: '3306',
  database: 'mydb',
});

connection.connect();

module.exports = connection;
