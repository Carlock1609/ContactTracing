const { validationResult } = require('express-validator');

const Calendar = require('../models/Calendar');
const User = require('../models/User');

// Get calendar - GET
exports.get_calendar = async (req, res) => {
    try{
        
        const calendar = await Calendar.findById(req.user.id);
    
        if(!calendar) {
            return res.status(404).json({ msg: 'No calendar entries found' });
        }
    
        res.json(calendar)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
};

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
