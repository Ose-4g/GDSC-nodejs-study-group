const { refreshTokens } = require('../../utils/token');
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
  const details = refreshTokens.get();
};

module.exports = refreshToken;
