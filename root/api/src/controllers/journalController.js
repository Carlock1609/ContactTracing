const { validationResult } = require('express-validator');

const Journal = require('../models/Journal');

// Gets all journal entries
exports.get_journal = async (req, res) => {
    try {
        const journal = await Journal.findById(req.user.id);

        if(!journal) {
            return res.status(404).json({ msg: 'Journal entries not found' })
        }

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
    
    const { user, date, time, activity, location, choice1, choice2, contact, notes } = req.body;
    
    const newEntry = { user, date, time, activity, location, choice1, choice2, contact, notes, owner:user };
    
    try{
        const entry = new Journal(newEntry);

        await entry.save();

        res.json(entry);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};