// Require controllers
const CalendarEntry = require('../models/calendar');
const JournalEntry = require('../models/journal_entry')

// RESTful API - sending the object instead of the ejs
// app.get('/users', (req, res) => {
//     return res.send(Object.values(users));
//   });
   
//   app.get('/users/:userId', (req, res) => {
//     return res.send(users[req.params.userId]);
//   });

// Sends User page Dynamic data to list - GET
exports.index = function(req, res) {
    // Loading all Calendar entries to display
    // Later we need to have a filter for only the logged in users Data

    // THIS WORKED YASSS -  This sends the user a json object
    // users = {
    //     1: {
    //       id: '1',
    //       username: 'Robin Wieruch',
    //     },
    //     2: {
    //       id: '2',
    //       username: 'Dave Davids',
    //     },
    //   };
    //   res.send(Object.values(users));
    CalendarEntry.find()
        .then((entries) => {
            res.send(Object.values(entries));
        })
        .catch((err) => {
            console.log(err);
        })
    }

// Creates calendar entry - POST
exports.create_calendar_entry = function(req,res) {
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
}

// Creates Journal entry - POST
exports.create_journal_entry = function(req, res) {
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
}

// Logout current user - POST
exports.logout = function(req, res) {
    req.logout();
    // req.flash('success', 'Logged out!');
    res.redirect('/');
};

