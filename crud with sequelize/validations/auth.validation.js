const joi = require('joi');

module.exports = {
  sign_up_Validation: ({ firstName, lastName, email, password, role }) => {
    const schema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      email: joi.string().required(),
      password: joi.string().required(),
      role: joi.string().required().valid('USER', 'ADMIN'),
    });

    return schema.validate(
      { firstName, lastName, email, password, role },
      { allowUnknown: false }
    );
  },

  log_in_validation: ({ email, password }) => {
    const schema = joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    });

    return schema.validate({ email, password }, { allowUnknown: false });
  },
};
