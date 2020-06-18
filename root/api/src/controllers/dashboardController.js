const { validationResult } = require('express-validator');

const Dashboard = require('../models/Dashboard');
const User = require('../models/User');

// FIGURE OUT HOW TO CREATE DASHBOARD WHEN USER IS CREATED
// Creates Dashboard entry - POST
exports.create_dashboard = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try{
        // finds user but leaves out the password
        const user = await User.findById(req.user.id).select('-password');
        
        const dashboard = new Dashboard({
            user: user.id
        });
        
        await dashboard.save();
        
        res.json(dashboard);
    } catch(err) {
        console.log(err.message);
        return res.status(500).send('Server error');
    }
};

// Get users dashboard - GET
exports.get_dashboard = async (req, res) => {
    try {
        const dashboard = await Dashboard.find({ user:req.user.id }).populate('user');

        if(!profile) {
            return res.status(400).json({ msg: 'There is no dashboard for this user' });
        }

        res.json(dashboard)
    } catch(err) {
        console.log(err);
        return res.status(500).send('Server error');
    }
};

// Create calendar entry
exports.create_calendar_entry = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
        date,
        time,
        choice,
        notes
    } = req.body;

    const newCalendar = {
        date,
        time,
        choice,
        notes
    }

    try {
        const dashboard = await Dashboard.findOne({ user: req.user.id });

        dashboard.calendar.unshift(newCalendar);

        await dashboard.save();

        res.json(dashboard);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
};

// Create journal entry
exports.create_journal_entry = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
        date,
        time,
        activity,
        location,
        choice1,
        choice2,
        contact,
        notes
    } = req.body;

    const newJournal = {
        date,
        time,
        activity,
        location,
        choice1,
        choice2,
        contact,
        notes
    }

    try {
        const dashboard = await Dashboard.findOne({ user: req.user.id });

        dashboard.journal.unshift(newJournal);

        await dashboard.save();

        res.json(dashboard);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
};

// Get specific calendar entry - GET
exports.get_calendar_entry = async (req, res) => {
    try {
        const calendar = await Dashboard.findById(req.params.id);

        if(!calendar) {
            return res.status(404).json({ msg: 'Calendar entry not found' });
        }

        res.json(calendar)
    } catch (err) {
        console.log(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Calendar entry not found' });
        }
        res.status(500).send('Server error');
    }
};

// Get specific calendar entry - GET
exports.get_journal_entry = async (req, res) => {
    try {
        const journal = await Dashboard.findOne({ id: req.params.id });

        if(!journal) {
            return res.status(404).json({ msg: 'Journal entry not found' });
        }

        res.json(journal)
    } catch (err) {
        console.log(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Journal entry not found' });
        }
        res.status(500).send('Server error');
    }
};

// Delete specific journal entry by id
exports.delete_journal_entry = async (req, res) => {
    try {
        const dashboard = await Dashboard.findOne({ user: req.user.id });

        const removeIndex = dashboard.journal.map(item => item.id).indexOf(req.params.id);

        dashboard.journal.splice(removeIndex, 1);

        await dashboard.save();

        res.json(dashboard)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete specific calendar entry by id
exports.delete_calendar_entry = async (req, res) => {
    try {
        const dashboard = await Dashboard.findOne({ user: req.user.id });

        const removeIndex = dashboard.calendar.map(item => item.id).indexOf(req.params.id);

        dashboard.calendar.splice(removeIndex, 1);

        await dashboard.save();

        res.json(dashboard)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};