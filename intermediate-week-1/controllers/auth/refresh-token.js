const { refreshTokens, generateAccessToken } = require('../../utils/token');

const refreshAccessToken = async (req, res, next) => {
  /**
     * Takes a parameter 
     * refreshToken 
     * in the body of the request. 
     * 
     * Take that refresh token and send a return a response with a valid access code for that user
     * 
     * response format
     * {
     *       accessToken: **********,
        refreshToken: *********
     * }
     */
  const { refreshToken } = req.body;
  const details = refreshTokens.get(refreshToken);
  const accessToken = generateAccessToken(details.user);
  refreshTokens.get(refreshToken).accessToken = accessToken;

  res.status(200).json({
    accessToken,
    refreshToken,
  });
};

module.exports = refreshAccessToken;
