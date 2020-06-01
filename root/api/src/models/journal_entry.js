const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalEntrySchema = new mongoose.Schema({
    date: Date,
    time: Date,
    activity: String,
    location: String,
    choice1: Array,
    choice2: Array,
    contact: String,
    notes: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model('JournalEntry', journalEntrySchema);