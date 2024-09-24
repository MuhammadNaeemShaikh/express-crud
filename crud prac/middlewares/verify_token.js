const jwt = require('jsonwebtoken');

const verify_tokens = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.split(' ')[1];
      jwt.verify(token, 'test', (err, user) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: `${err}`,
          });
        }
        req.user = user;
        next();
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error While Verifying token: ${error}`,
    });
  }
};

module.exports = { verify_tokens };
