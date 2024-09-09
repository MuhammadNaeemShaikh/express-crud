const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  db: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: process.env.dialect,
  },
};
