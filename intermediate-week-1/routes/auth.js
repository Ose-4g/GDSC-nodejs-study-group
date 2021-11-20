const login = require('../controllers/auth/login');
const refreshToken = require('../controllers/auth/refresh-token');
const signup = require('../controllers/auth/signup');

const router = require('express').Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/refresh-token', refreshToken);

module.exports = router;
