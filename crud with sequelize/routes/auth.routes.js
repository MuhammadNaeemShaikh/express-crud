const { sign_up, login } = require('../controller/auth.controller');
const router = require('express').Router();

router.post('/sign_up', sign_up);
router.post('/login', login);
module.exports = router;
