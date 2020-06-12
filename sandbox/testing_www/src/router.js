const express = require('express');
const router = express.Router();


router.get('/', function(req,res) {
    res.render('index', {currentUser: req.user});
})

router.get('/login', function(req,res) {
    res.render('login', {currentUser: req.user});
})

router.get('/register', function(req,res) {
    res.render('register', {currentUser: req.user});
})



module.exports = router;