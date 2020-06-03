// App + DB imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const compression = require('compression')
// Authentication imports - passport
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

// import models
const User = require('./src/models/users')


// const sslOptions = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem'),  
//   };

// SSL certs - I'm hoping this will get rid of the SSL protocal_error I'm having


// connection to DB
mongoose.connect('mongodb://localhost/Contact_Tracing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// app settings
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Middleware to take care of CORS error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

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

// Setting up routes variables
const indexRoutes = require('./src/routes/index');
const usersRoutes = require('./src/routes/users');

// Mounting routes on app
app.use('/', indexRoutes);
app.use('/users', usersRoutes);




// https.createServer(sslOptions, app).listen(8000)
// console.log('SERVERUP!')
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('SERVER IS UP! @ ' + PORT);
});