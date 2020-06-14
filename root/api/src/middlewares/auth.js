const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

exports.register = ([
    
		check('name', 'Name is required')
			.not()
			.isEmpty(),
		check('email', 'Email is required')
			.isEmail(),
		check('password', 'Password is required')
			.isLength({ min:6 }),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.log('NOT ACCEPTED')
            return res.status(400).json({ errors: errors.array() });
        }
        return next();
    }
);

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
