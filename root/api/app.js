// App + DB imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Authentication imports - passport
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

// import models
const User = require('./src/models/users')

// connection to DB
mongoose.connect('mongodb://localhost/Contact_Tracing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// app settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Authentication settings
app.use(require('express-session')({
    secret: 'This is a Secret session',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
// Passport Local Auth - this can be changed for OAuth's
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// seeding DB
// const User = require('./models/users');
// let testUser = {
//     email: 'carlock1609@SpeechGrammarList.com',
//     username: 'Carlock',
//     password: 'Yatesboy906',
// };

// User.create(testUser, function(err, createdUser) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Successfully created!' + createdUser);
//     }
// });


module.exports = app;