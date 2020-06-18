const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const usersController = require('../../controllers/usersController');

// @route  POST api/users
// @desc   Register user
// @access Public
router.post(
	'/',
	auth.register,
	usersController.register
);

module.exports = router;