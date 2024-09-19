const { auth_route } = require('../routes');

module.exports = (app) => {
  app.use('/api/v1/auth_route', auth_route);
};
