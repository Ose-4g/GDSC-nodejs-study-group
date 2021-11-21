const User = require('../../models/User');
const { generateAccessToken, generateRefreshToken } = require('../../utils/token');
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
  /*send a response with the following format if the login is successful
    *{
        accessToken: **********,
        refreshToken: *********
    }
    */
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  const { firstName, lastName } = user;
  const validLogin = await bcrypt.compare(password, user.password);
  const accessToken = generateAccessToken({
    email,
    firstName,
    lastName,
  });
  const refreshToken = await generateRefreshToken(
    {
      email,
      firstName,
      lastName,
    },
    accessToken
  );

  res.status(200).json({
    accessToken,
    refreshToken,
  });
};

module.exports = login;
