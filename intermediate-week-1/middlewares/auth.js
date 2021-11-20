exports.requireSignIn = async (req, res, next) => {
  const authorization = req.headers.authorization;
  const [bearer, token] = authorization.split(' ');

  /**
   * veify the token and verify if user is logged in in or not
   * If user is logged in then call the next() function to go to the next middleware
   */
};
