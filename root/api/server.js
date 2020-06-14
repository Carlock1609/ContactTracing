// App + DB imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connecting mongoose
connectDB();

// middleware
app.use(express.urlencoded({extended:true}));

// Setting up routes
const indexRoutes = require('./src/routes/api/index');
const usersRoutes = require('./src/routes/api/users');

// Mounting routes on app
app.use('/', indexRoutes);
app.use('/users', usersRoutes);

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