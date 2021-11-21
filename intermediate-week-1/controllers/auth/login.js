const User = require('../../models/User');
const { generateAccessToken, generateRefreshToken } = require('../../utils/token');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
  /*send a response with the following format if the login is successful
    *{
        accessToken: **********,
        refreshToken: *********
    }
    */
  const { email, password } = req.body;
  const user = await User.findOne(email).select('+password');

  const validLogin = await bcrypt.compare(password, user.password);
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user, accessToken);

  res.status(200).json({
    accessToken,
    refreshToken,
  });
};

module.exports = login;
