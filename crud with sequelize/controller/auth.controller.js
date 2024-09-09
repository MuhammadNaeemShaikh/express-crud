const authValidation = require('../validations/auth.validation');
const model = require('../models/index');
const jwt = require('jsonwebtoken');

const sign_up = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const { error } = authValidation.sign_up_Validation({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    if (error) {
      return res.status(400).json(error);
    }

    const create_user = await model.User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    return res.status(200).json({
      success: true,
      message: 'Successfully Create User',
      data: create_user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something Went Wrong err:${error}`,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { error } = authValidation.log_in_validation({ email, password });

    if (error) {
      return res.status(400).json({
        success: false,
        message: `Error In Validation ${error}`,
      });
    }

    const is_user = await model.User.findOne({
      where: {
        email,
      },
    });

    if (!is_user) {
      return res.status(400).json({
        success: false,
        message: `User Not Found`,
      });
    }

    //compare password
    const pass = password === is_user?.password;

    if (!pass) {
      return res.status(400).json({
        success: false,
        message: `Password Not matched`,
      });
    }

    const token = await jwt.sign(is_user.dataValues, 'test', {
      expiresIn: '1h',
    });
    return res.status(200).json({
      success: true,
      message: 'Successfully Login',
      data: {
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something Went Wrong ${error}`,
    });
  }
};

module.exports = {
  sign_up,
  login,
};
