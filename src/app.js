const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Contact_Tracing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// pointing to location of routes
const indexRoutes = require('./api/routes/index');

// app settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'ejs'); // setting the view engine, were using ejs

// seeding DB
const User = require('./models/users');
let testUser = {
    email: 'carlock1609@SpeechGrammarList.com',
    username: 'Carlock',
    password: 'Yatesboy906',
};

User.create(testUser, function(err, createdUser) {
    if(err) {
        console.log(err);
    } else {
        console.log('Successfully created!' + createdUser);
    }
});




app.use('/', indexRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('SERVER IS UP!');
});