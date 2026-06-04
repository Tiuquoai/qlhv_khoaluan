const express = require('express');
const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/AuthController');
const validateLogin = require('../interfaces/LoginRequestValidate');
// const passport = require('passport');
const router = express.Router();

router.get('/' , HomeController.index)


router.post('/login', validateLogin  , AuthController.login )

module.exports = router;