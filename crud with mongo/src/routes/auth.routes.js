const { sign_up, login } = require('../controller/auth.controller');
const { verifyToken } = require('../middleware/verify_token');
const router = require('express').Router();

router.post('/sign_up', sign_up);
router.post('/log_in', verifyToken, login);

module.exports = router;
