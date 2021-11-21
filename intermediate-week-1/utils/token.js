const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const refreshTokens = new Map();

exports.generateAccessToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: `${process.env.JWT_EXPIRES}`,
  });
};

exports.generateRefreshToken = async (user, accessToken) => {
  const refreshToken = crypto.randomBytes(32).toString('hex');
  refreshTokens.set(refreshToken, {
    accessToken,
    refreshToken,
    user,
  });
  return refreshToken;
};

exports.refreshTokens = refreshTokens;
