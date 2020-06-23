// App + DB imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');
// production
const path = require('path');

// connecting mongoose
connectDB();

// middleware
app.use(express.json({extended:false}));

// Setting up routes
const authRoutes = require('./src/routes/api/auth');
const usersRoutes = require('./src/routes/api/users');
const dashboardRoutes = require('./src/routes/api/dashboard');

// Mounting routes on app
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/dashboard', dashboardRoutes);

// production serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('./www/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'www', 'build', 'index.html'));
    });
};

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('SERVER IS UP! @ ' + PORT);
});














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








// const sslOptions = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem'),  
//   };

// SSL certs - I'm hoping this will get rid of the SSL protocal_error I'm having