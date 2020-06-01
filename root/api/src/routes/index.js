const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const JournalEntry = require('../models/journal_entry');
const CalendarEntry = require('../models/calendar');


// Get index page
router.get('/', function(req,res) {
    // Loading all Calendar entries to display
    // Later we need to have a filter for only the logged in users Data
    CalendarEntry.find()
        .then((entries) => {
            res.render('index', {calendarEntries:entries, currentUser:req.user});
        })
        .catch((err) => {
            console.log(err);
        })
});

// Created marker
router.post('/', function(req,res) { 
    let user = req.user; 
    let date = req.body.date;
    let time = req.body.time;
    let choice = req.body.choice;
    let notes = req.body.notes;

    
    let newEntry = {date:date, time:time, choice:choice, notes:notes, owner:user}
    
    CalendarEntry.create(newEntry, function(err, newlyCreated) {
        if(err) {
            console.log('Not Successful' + err);
        } else {
            console.log('Success!' + newlyCreated);
        }
    });
    
    res.redirect('/');
})

router.post('/journal_entry', function(req,res) {
    let user = req.user
    let date = req.body.date;
    let time = req.body.time;
    let activity = req.body.activity;
    let location = req.body.location;
    let choice1 = req.body.choice1;
    let choice2 = req.body.choice2;
    let contact = req.body.contact;
    let notes = req.body.notes;

    let newEntry = {owner:user, date:date, time:time, activity:activity, location:location, choice1:choice1, choice2:choice2, contact:contact, notes:notes,}

    JournalEntry.create(newEntry, function(err, newlyCreated) {
        if(err) {
            console.log('Not Successful' + err);
        } else {
            console.log('Success!' + newlyCreated);
        }
    })

    res.redirect('/');
})



router.get('/logout', function(req,res) {
    req.logout();
    // req.flash('success', 'Logged out!');
    res.redirect('/');
});

module.exports = router;
