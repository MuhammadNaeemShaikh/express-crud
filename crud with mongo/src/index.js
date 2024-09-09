const { configDotenv } = require('dotenv');
const db_connect = require('./database module/db_connect');
const { auth_routes } = require('./routes');
const body_parser = require('body-parser');

module.exports = async (app) => {
  configDotenv();
  db_connect(app);

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: false }));
  app.use('/api/v1/auth/', auth_routes);
};
