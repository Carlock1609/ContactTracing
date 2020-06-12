// Require controllers
const Users = require('../models/users');
// authentication middleware
const passport = require('passport');

//  Renders Registration page - GET - This will change because I don't want to use render
// exports.register = function(req, res) {
//     res.render('register', {currentUser:req.user});
// }

// Register User - POST
exports.register_created = async (req, res) => {
    const { email, username, password } = req.body;

    const newUser = { email, username, password }; 

    await Users.register(new Users({newUser}), password, async (err, user) => {
        try {
            console.log(err);
            passport.authenticate('local')(req,res, function(){
                console.log(user);
                res.send(Object.values(user));
                // res.redirect('https://127.0.0.1:8001/')
            })
        } catch(err) {
            console.log(err.message);
        }
        // return res.redirect('/');
    });
}

// Login and authenticate user - GET
exports.login = async (req, res) => {
    
    // fill this out soon. right now middleware is being used.
    res.send({currentUser:req.user})
}

// Logout user - POST
exports.logout = async (req, res) => {
    req.logout();
    // req.flash('success', 'Logged out!');
    // res.redirect('https://127.0.0.1:8001/');
};


    
