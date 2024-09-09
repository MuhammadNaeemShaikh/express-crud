const jwt = require('jsonwebtoken');
const verify_token = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(' ')[1];
    jwt.verify(token, 'test', (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'you are not authenticated',
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ success: false, message: 'you are not authenticated' });
  }
};

const verify_token_admin = (req, res, next) => {
  verify_token(req, res, () => {
    if (req.user.role === 'Admin') {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: 'You are not alowed to do that!',
      });
    }
  });
};

module.exports = { verify_token_admin };
