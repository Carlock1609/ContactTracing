const express = require('express');
const router = express.Router();

// AUTH
const passport = require('passport');
// const connectEnsureLogin = require('connect-ensure-login');
const usersController = require('../../controllers/usersController');
const { check } = require('express-validator');

//  Register page
// router.get('/register', usersController.register)

// Register post
router.post(
	'/register',
	[
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('email', 'Email is required')
			.isEmail(),
		check('password', 'Password is required')
			.isLength({ min:6 }),
	],
	usersController.register_created
	)

// LOGIN ROUTES - also middleware
router.post('/login', passport.authenticate('local', 
	{
		successRedirect: '/',
		failureRedirect: '/',
    }), usersController.login);
    
// Logout route
router.get('/logout', usersController.logout)


module.exports = router;