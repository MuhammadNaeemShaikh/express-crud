const { auth_validation } = require('../validation/index');
const { user_model } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sign_up = async (req, res) => {
  try {
    const { firstName, lastName, email, password, dob } = req.body;
    console.log(firstName, lastName, email, password, dob);

    // Validate fields
    const validatedData = await auth_validation.validate_sign_up({
      firstName,
      lastName,
      email,
      password,
      dob,
    });

    console.log(validatedData);
    if (validatedData) {
      const salt = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(password, salt);

      const createUser = await user_model.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash_password,
        dob: dob,
      });

      return res
        .status(201)
        .json({ message: 'Successfully signed up', userId: createUser._id });
    }
  } catch (error) {
    console.error('Error during signup:', error.stack);
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const is_user = await user_model.findOne({ email });

  if (is_user) {
    //compare password
    const compare_pass = bcrypt.compare(is_user?.password, password);

    if (compare_pass) {
      const genToken =await jwt.sign({ user: is_user },'test');
      return res.status(200).json({
        success: true,
        message: 'successfully Logged in',
        data: genToken,
      });
    } else {
      throw new Error('Password Not Matched');
    }
  } else {
    throw new Error(`Wrong Credientials`);
  }

  try {
  } catch (error) {
    return res.status(500).json({ error: 'An Unexpected error occured' });
  }
};
module.exports = {
  sign_up,
  login,
};
