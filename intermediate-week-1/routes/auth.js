const login = require('../controllers/auth/login');
const signup = require('../controllers/auth/signup');

const router = require('express').Router();

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
