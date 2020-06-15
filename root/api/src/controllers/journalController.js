const { validationResult } = require('express-validator');

const Journal = require('../models/Journal');


// Creates Journal entry - POST
exports.journal_entry = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    let { user, date, time, activity, location, choice1, choice2, contact, notes } = req.body;
    
    let newEntry = { user, date, time, activity, location, choice1, choice2, contact, notes, owner:user };
    
    try{
        const entry = new Journal(newEntry);

        await entry.save();

        res.json(entry);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};