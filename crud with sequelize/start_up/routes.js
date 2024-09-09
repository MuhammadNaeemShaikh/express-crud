const auth_routes = require('../routes/auth.routes');
const blog_routes = require('../routes/blog.routes');

module.exports = (app) => {
  app.use('/api/v1/auth', auth_routes);
  app.use('/api/v1/blog', blog_routes);
};
