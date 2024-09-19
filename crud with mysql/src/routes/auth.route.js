const { sign_up, log_in } = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/sign_up', sign_up);
router.post('/log_in', log_in);

module.exports = router;
