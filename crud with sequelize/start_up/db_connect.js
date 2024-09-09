const { db } = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(db.database, 'root', db.password, {
  host: db.host,
  dialect: db.dialect,
});

module.exports = sequelize;
