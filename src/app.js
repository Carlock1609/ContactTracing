const express = require('express');
const app = express();

// pointing to location of routes
const indexRoutes = require('./api/routes/index');

// app settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'ejs'); // setting the view engine, were using ejs






app.use('/', indexRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('SERVER IS UP!');
});