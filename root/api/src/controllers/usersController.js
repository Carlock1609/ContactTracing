// Require controllers
const Users = require('../models/users');
// authentication middleware
const passport = require('passport');

//  Renders Registration page - GET - This will change because I don't want to use render
// exports.register = function(req, res) {
//     res.render('register', {currentUser:req.user});
// }

// Register User - POST
exports.register_created = function(req, res) {
    Users.register(new Users({email: req.body.email, username: req.body.username, password: req.body.password}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            // return res.redirect('/');
        }
        passport.authenticate('local')(req,res, function(){
            console.log(user)
            res.send(Object.values(user))
            // res.redirect('https://127.0.0.1:8001/')
        });
    });
}

// Login and authenticate user - GET
exports.login = function(req, res) {
    
    // fill this out soon. right now middleware is being used.
    res.send({currentUser:req.user})
}

// Logout user - POST
exports.logout = function(req, res) {
        req.logout();
        // req.flash('success', 'Logged out!');
        // res.redirect('https://127.0.0.1:8001/');
    };


    
