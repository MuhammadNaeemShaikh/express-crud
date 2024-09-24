const bcrypt = require('bcrypt');
const { db_connection } = require('../start_up/db_connection');
const { address_queries, user_queries } = require('../models');
const jwt = require('jsonwebtoken');

const sign_up = async (req, res) => {
  try {
    //destructure fields
    const { name, password, email, address, age } = req.body;

    //generate salt
    const salt = await bcrypt.genSalt(10);

    //hash password
    const pass = await bcrypt.hash(password, salt);

    //create_user
    const [{ insertId }] = await db_connection
      .promise()
      .query(user_queries.insert, [name, pass, email, age]);

    //create add record
    const data = await db_connection
      .promise()
      .query(address_queries.insert_table, [address, insertId]);

    //return response
    return res.status(200).json({
      success: true,
      message: 'Sign Up Successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error While Sign UP ${error}`,
    });
  }
};

const log_in = async (req, res) => {
  try {
    const { email, password } = req.body;

    //email exist
    const is_email_exist = await db_connection
      .promise()
      .query(user_queries.is_email, [email])
      .then((result) => result[0]);

    if (is_email_exist[0].length === 0) {
      return res
        .status(400)
        .json({ success: false, message: `Email Not Found` });
    }

    //compare password
    const compare_pass = await bcrypt.compare(
      password,
      is_email_exist[0].password
    );

    if (!compare_pass) {
      return res
        .status(401)
        .json({ success: false, message: `Invalid Password` });
    }

    const genereate_token = await jwt.sign(is_email_exist[0], 'test');

    return res.status(200).json({
      success: true,
      message: `Successfully Generate Token`,
      token: genereate_token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error While Login ${error}`,
    });
  }
};

module.exports = {
  sign_up,
  log_in,
};
