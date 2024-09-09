const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  dob: {
    type: String,
  },
});

module.exports = mongoose.model('User', user_schema);
