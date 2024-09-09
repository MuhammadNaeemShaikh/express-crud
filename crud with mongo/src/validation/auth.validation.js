const joi = require('joi');

module.exports = {
  validate_sign_up: ({ firstName, lastName, email, password, dob }) => {
    const schema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
      dob: joi.date().required(),
    });

    const result = schema.validate(
      { firstName, lastName, email, password, dob },
      { allowUnknown: true }
    );

    if (result.error) {
      console.log(result.error.details);
      throw new Error('Validation failed');
    }

    return result.value;
  },
};
