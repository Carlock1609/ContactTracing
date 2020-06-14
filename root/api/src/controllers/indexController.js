// Require controllers
const CalendarEntry = require('../models/Calendar');
const JournalEntry = require('../models/Journal');
const User = require('../models/User');

// Sends User page Dynamic data to list - GET
exports.index = async (req, res) => {
    try {
        // query for all users
        let users = await User.find();

        // if no users are found
        if(!users) {
            return res.status(400).json({ msg: "Users not found" })
        }

        // send all users to client
        res.json(users)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
};

// Creates calendar entry - POST
exports.create_calendar_entry = async (req,res) => {
    // deconstructing req.body
    const { user, date, time, choice, notes } = req.body;
    
    const newEntry = { user, date, time, choice, notes, owner:user }
    try {
        const entry = new CalendarEntry(newEntry);

        await entry.save();

        return res.json(entry);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};

// Creates Journal entry - POST
exports.create_journal_entry = async (req, res) => {
    let { user, date, time, activity, location, choice1, choice2, contact, notes } = req.body;
    
    let newEntry = { user, date, time, activity, location, choice1, choice2, contact, notes, owner:user };
    
    try{
        const entry = new JournalEntry(newEntry);

        await entry.save();

        res.json(entry);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};

// Logout current user - POST
exports.logout = function(req, res) {
    req.logout();
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