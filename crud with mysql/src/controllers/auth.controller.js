const { insert_table_add } = require('../models/add.model');
const { insert_table_user, is_email_exist } = require('../models/user');
const db_instance = require('../utils/db_connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sign_up = async (req, res) => {
  try {
    const { name, email, password, address, age } = req.body;
    const [{ insertId }] = await db_instance
      .promise()
      .query(insert_table_add, [address]);

    const salt = await bcrypt.genSalt(10);
    const hash_pass = bcrypt.hashSync(password, salt);

    const data = await db_instance
      .promise()
      .query(insert_table_user, [name, email, hash_pass, age, insertId]);

    res.status(200).json({
      success: true,
      message: 'Successfully Sign Up',
      data: data[0].insertId,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `Something Went Wrong ${error}`,
    });
  }
};

const log_in = async (req, res) => {
  try {
    const { email, password } = req.body;

    const is_email_found = await db_instance
      .promise()
      .query(is_email_exist, [email])
      .then((result) => result[0]);

    if (is_email_found.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: `Email Not Found` });
    }

    //compare password
    const compare_pass = await bcrypt.compare(
      password,
      is_email_found[0].password
    );
    
    if (!compare_pass) {
      return res
        .status(401)
        .json({ success: false, message: `Invalid Password` });
    }

    const genereate_token = await jwt.sign(is_email_found[0], 'test');

    return res.status(200).json({
      success: true,
      message: `Successfully Generate Token`,
      token: genereate_token,
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
  log_in,
};
