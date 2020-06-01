// Require controllers
const Users = require('../models/users');
// authentication middleware
const passport = require('passport');

//  Renders Registration page - GET - This will change because I don't want to use render
exports.register = function(req, res) {
    res.render('register', {currentUser:req.user});
}

// Register User - POST
exports.register_created = function(req, res) {
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
}

// Login and authenticate user - GET
exports.login = function(req, res) {
    
    // fill this out soon. right now middleware is being used.
}

// Logout user - POST
exports.logout = function(req, res) {
        req.logout();
        // req.flash('success', 'Logged out!');
        res.redirect('/');
    };


    