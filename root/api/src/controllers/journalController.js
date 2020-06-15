const { validationResult } = require('express-validator');

const Journal = require('../models/Journal');
const User = require('../models/User');

// Gets all journal entries - GET
exports.get_journal = async (req, res) => {
    try {
        const journal = await Journal.find({user:req.user.id});

        res.json(journal)
    } catch(err) {
        console.log(err);
        return res.status(500).send('Server error');
    }
};

// Creates Journal entry - POST
exports.journal_entry = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        // finds user but leaves out the password
        const user = await User.findById(req.user.id).select('-password');

        const entry = new Journal({
            date: req.body.date,
            time: req.body.time,
            activity: req.body.activity,
            location: req.body.location,
            choice1: req.body.choice1,
            choice2: req.body.choice2,
            contact: req.body.contact,
            notes: req.body.notes,
            user: user.id
        });

        await entry.save();

        res.json(entry);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};