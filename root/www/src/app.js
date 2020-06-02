const express = require('express');
const app = express();

// pointing to location of routes

// app settings
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public')); 


app.set('view engine', 'ejs'); // setting the view engine, were using ejs

// requiring routes from router
let Routes = require('./router');
// mounting routes to app
app.use('/', Routes);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log('SERVER IS UP! @ ' + PORT);
});
