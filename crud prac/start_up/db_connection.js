const mysql = require('mysql2');

const db_connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '12345',
});

module.exports = { db_connection };
