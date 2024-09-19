const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    jwt.verify(token, 'test', (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: `${err}`,
        });
      } else {
        req.user = user;
        next();
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `${error}`,
    });
  }
};

module.exports = {
  verifyToken,
};
