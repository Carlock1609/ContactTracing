const express = require('express');
const router = express.Router();

// middleware auth.register uses express-validator
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

router.delete(
	'/',
	auth.authorized,
	usersController.delete_user
)

module.exports = router;