const { validationResult } = require('express-validator');

const Calendar = require('../models/Calendar');
const User = require('../models/User');

// Creates calendar entry - POST
exports.calendar_entry = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // finds user but leaves out the password
        const user = await User.findById( req.user.id ).select('-password');

        const entry = new Calendar({
            date: req.body.date,
            time: req.body.time,
            choice: req.body.choice,
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

// Get calendar - GET
exports.get_calendar = async (req, res) => {
    try{
        const calendar = await Calendar.find({user:req.user.id});

        res.json(calendar)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
};

// Get calendar entry - GET
exports.get_entry = async (req, res) => {
    try {
        const calendar = await Calendar.findById(req.params.id);

        if(!calendar) {
            return res.status(404).json({ msg: 'Calendar entry not found' });
        }

        res.json(calendar)
    } catch (err) {
        console.log(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server error');
    }
};