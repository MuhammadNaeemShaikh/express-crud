const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'employee',
  password: '12345',
});


module.exports = connection;
