const express = require('express');
const app = express();

// pointing to location of routes
const indexRoutes = require('../src/api/routes/index');

// app settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs'); // setting the view engine, were using ejs






app.use('/', indexRoutes);


app.listen('8000', () => {
    console.log('SERVER IS UP!');
});