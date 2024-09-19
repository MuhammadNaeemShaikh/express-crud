const { insert_blogs, get_blogs } = require('../models/blog.model');
const db_instance = require('../utils/db_connection');

const blog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user;

    const [{ insert_id }] = await db_instance
      .promise()
      .query(insert_blogs, [title, content, id]);

    res.status(200).json({
      success: true,
      message: 'Successfully Blog Posted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Something Went Wrong ${error}`,
    });
  }
};

const get_blog = async (req, res) => {
  try {
    const data = await db_instance.promise().query(get_blogs);

    res.status(200).json({
      success: true,
      message: 'Successfully Getting Blogs',
      data:data[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Something Went Wrong ${error}`,
    });
  }
};

module.exports = {
  blog,
  get_blog
};
