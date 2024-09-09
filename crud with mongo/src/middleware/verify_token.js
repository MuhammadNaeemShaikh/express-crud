const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(' ')[1];
    jwt.verify(token, 'test', (err, user) => {
      if (err) {
        res.status(400).json(err);
      } else {
        req.user = user;
        next();
      }
    });
  }
};

module.exports = {
  verifyToken,
};
