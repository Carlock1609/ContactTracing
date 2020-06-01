const express = require('express');
const router = express.Router();
const User = require('../models/users');

// AUTH
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');


//  Register page
router.get('/register', function(req,res) {
    res.render('register', {currentUser:req.user});
})

// Register post
router.post('/register', function(req,res) {
    User.register(new User({email: req.body.email, username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req,res, function(){
            console.log(user)
            res.redirect('/')
        });
    });
})

// LOGIN ROUTES
// This is middleware
router.post('/login', passport.authenticate('local', 
	{
		successRedirect: '/',
		failureRedirect: '/',
	}), function(req, res) {
        // fill this soon
});
// // Logout route
router.get('/logout', function(req,res) {
    req.logout();
    // req.flash('success', 'Logged out!');
    res.redirect('/');
});


module.exports = router;