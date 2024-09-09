const { db } = require('../start_up/config');
module.exports = {
  development: {
    username: 'root',
    password: db.password,
    database: db.database,
    host: 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: db.DB_USER,
    password: db.PASSWORD_PROD,
    database: db.DB_NAME,
    host: 'localhost',
    dialect: 'mysql',
  },
};
