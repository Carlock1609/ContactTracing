const express = require('express');
const router = express.Router();

// middleware auth.register uses express-validator
const auth = require('../../middlewares/auth');
// const connectEnsureLogin = require('connect-ensure-login');
const usersController = require('../../controllers/usersController');


// Register post
router.post(
	'/register',
	auth.register,
	usersController.register
);

// Login route
router.post(
	'/login',
	auth.authorized,
	usersController.login
);

// Logout route
router.get(
	'/logout', 
	usersController.logout
);


module.exports = router;