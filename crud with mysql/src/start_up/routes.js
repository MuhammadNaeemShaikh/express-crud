const { auth_route, blog_route } = require('../routes');

module.exports = (app) => {
  app.use('/api/v1/auth_route', auth_route);
  app.use('/api/v1/blog_route', blog_route);
};
