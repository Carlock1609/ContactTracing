// Require controllers
const CalendarEntry = require('../models/Calendar');
const JournalEntry = require('../models/Journal');
const User = require('../models/User');

// RESTful API - sending the object instead of the ejs
// app.get('/users', (req, res) => {
//     return res.send(Object.values(users));
//   });
   
//   app.get('/users/:userId', (req, res) => {
//     return res.send(users[req.params.userId]);
//   });

// Sends User page Dynamic data to list - GET
exports.index = async (req, res) => {
    try {
        let users = await User.find();

        if(!users) {
            return res.status(400).json({ msg: "Users not found" })
        }
        console.log(users)
        res.json(users)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
        // .then((users) => {
        }
        
        // Creates calendar entry - POST
        exports.create_calendar_entry = async (req,res) => {
            // let user = req.user; 
            // let date = req.body.date;
            // let time = req.body.time;
            // let choice = req.body.choice;
            // let notes = req.body.notes;
            // Deconstructed
            let { user, date, time, choice, notes } = req.body;
            
            let newEntry = { user, date, time, choice, notes, owner:user }
            // let newEntry = {date:date, time:time, choice:choice, notes:notes, owner:user}
            
            await CalendarEntry.create(newEntry, function(err, newlyCreated) {
                if(err) {
                    console.log('Not Successful' + err);
                } else {
                    console.log('Success!' + newlyCreated);
                }
            });
            
            // res.redirect('https://127.0.0.1:8001/');
        }
        
        // Creates Journal entry - POST
        exports.create_journal_entry = async (req, res) => {
            // let user = req.user
            // let date = req.body.date;
            // let time = req.body.time;
            // let activity = req.body.activity;
            // let location = req.body.location;
            // let choice1 = req.body.choice1;
            // let choice2 = req.body.choice2;
            // let contact = req.body.contact;
            // let notes = req.body.notes;
            let { user, date, time, activity, location, choice1, choice2, contact, notes } = req.body;
            
            // let newEntry = {owner:user, date:date, time:time, activity:activity, location:location, choice1:choice1, choice2:choice2, contact:contact, notes:notes,}
            let newEntry = { user, date, time, activity, location, choice1, choice2, contact, notes, owner:user };
            
            await JournalEntry.create(newEntry, function(err, newlyCreated) {
                try{
                    console.log('Success!' + newlyCreated);
                    
                } catch(err) {
                    console.log('Not Successful' + err);
                }
            })
            
            // res.redirect('https://127.0.0.1:8001/');
        }
        
        // Logout current user - POST
        exports.logout = function(req, res) {
            req.logout();
            // req.flash('success', 'Logged out!');
            // res.redirect('https://127.0.0.1:8001/');
        };
        
       
        












        //     console.log(users)
        //     res.send(Object.values(users));
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        
    // CalendarEntry.find()
    //     .then((entries) => {
    //         res.send(Object.values(entries));
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })