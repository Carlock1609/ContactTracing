const jwt = require('jsonwebtoken');
const config = require('config');
const { check } = require('express-validator');

// **USERS**
// Register User
exports.register = (
    [
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('email', 'Email is required')
			.isEmail(),
		check('password', 'Password is required')
			.isLength({ min:6 }),
    ]
);

// Login user
exports.login = (
    [
        check('email', 'Please include a valid email')
            .isEmail(),
        check('password', 'Password is required')
            .exists()
    ]
);

// **CALENDAR**
// Calendar post
exports.calendar_post = (
    [
        check('date', 'Date is required')
            .not()
            .isEmpty(),
        check('time', 'Time is required')
            .not()
            .isEmpty(),
        check('choice', 'Choice is required')
            .not()
            .isEmpty(),
        check('notes', 'Notes are required')
        .not()
            .isEmpty()
    ]
);

// **JOURNAL**
// Journal post
exports.journal_post = (
    [
        check('date', 'Date is required')
            .not()
            .isEmpty(),
        check('time', 'Time is required')
            .not()
            .isEmpty(),
        check('activity', 'Activity required')
            .not()
            .isEmpty(),
        check('location', 'Location is required')
            .not()
            .isEmpty(),
        check('choice1', 'Choice is required')
            .not()
            .isEmpty(),
        check('choice2', 'Choice is required')
            .not()
            .isEmpty(),
        check('contact', 'Contact is rquired')
            .not()
            .isEmpty(),
        check('notes', 'Notes are required')
            .not()
            .isEmpty()
    ]
);

// **AUTH**
// Checks jwt token, this is for any private requests
exports.authorized = (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check for token
    if(!token) {
        // 401 is 'not authorized'
        return req.status(401).json({ msg: 'No token, authorization denied'})
    }

    try{
        const decoded = jwt.verify(token, config.get('jwtToken'));
        
        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
