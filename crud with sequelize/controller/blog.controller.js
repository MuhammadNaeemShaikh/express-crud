const model = require('../models/index');

const createBlog = async (req, res) => {
  try {
    const { id } = req.user;
    const { blog_name, content } = req.body;

    const post_blog = await model.Blog.create({
      blog_name,
      content,
      user_id: id,
    });

    return res.status(200).json({
      success: true,
      message: 'Successfully Blog Posted',
      data: post_blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something Went Wrong! ${error}`,
    });
  }
};

const get_all_blogs = async (req, res) => {
  try {
    const blogs = await model.Blog.findAll({
      include: [
        {
          model: model.User,
          as: 'Author',
          attributes: ['firstName', 'lastName'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      success: true,
      message: 'Successfully Blog Posted',
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something Went Wrong! ${error}`,
    });
  }
};

module.exports = {
  createBlog,
  get_all_blogs,
};
