const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const authController = require('../../controllers/authController');

// @route  GET api/auth
// @desc   Test route
// @access Public
router.get(
	'/',
	auth.authorized,
    authController.get_user
);

// @route  POST api/auth
// @desc   Authenticate user * get token
// @access Public
// The auth checks the token to verify it -middleware
router.post(
	'/',
	auth.login,
	authController.login
);

module.exports = router;