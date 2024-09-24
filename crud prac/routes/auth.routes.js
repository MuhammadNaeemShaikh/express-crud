const { auth_controller } = require('../controllers');

const router = require('express').Router();

router.post('/sign_up', auth_controller.sign_up);
router.post('/log_in', auth_controller.log_in);

module.exports = router;
