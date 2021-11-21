const User = require('../../models/User');

const signup = async (req, res, next) => {
  /**
   * takes the following fields in the body
   *
   * firstName
   * lastName
   * email
   * password
   * passwordConfirm
   *
   * and saves it to the MongoDB database
   *
   */

  const { firstName, lastName, email, password, passwordConfirm } = req.body;

  await User.create({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  });

  res.status(201).json({
    message: 'Stored user details successfully',
  });
};

module.exports = signup;
