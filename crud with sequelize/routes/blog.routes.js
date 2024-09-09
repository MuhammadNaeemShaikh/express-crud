const { createBlog, get_all_blogs } = require('../controller/blog.controller');
const { verify_token_admin } = require('../middleware/verify_tokens');
const router = require('express').Router();

router.post('/blog', verify_token_admin, createBlog);
router.post('/get_all_blogs', verify_token_admin, get_all_blogs);

module.exports = router;
