const { validationResult } = require('express-validator');

const Calendar = require('../models/Calendar');


// Creates calendar entry - POST
exports.calendar_entry = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // deconstructing req.body
    const { user, date, time, choice, notes } = req.body;
    
    const newEntry = { user, date, time, choice, notes, owner:user }
    try {
        const entry = new Calendar(newEntry);

        await entry.save();

        res.json(entry);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};

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