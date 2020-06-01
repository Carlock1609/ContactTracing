const express = require('express');
const app = express();

// pointing to location of routes

// app settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'ejs'); // setting the view engine, were using ejs



module.exports = app;