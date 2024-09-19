const { blog, get_blog } = require('../controllers/blog.controller');
const { verifyToken } = require('../middleware/verify_token_and_role');

const router = require('express').Router();

router.post('/blog', verifyToken, blog);
router.get('/blog', verifyToken, get_blog);

module.exports = router;
