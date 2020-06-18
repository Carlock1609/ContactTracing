const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalEntrySchema = new mongoose.Schema({
    date: {
        type: Date, 
        required: true
    },
    time: {
        type: String, 
        required: true
    },
    activity: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    choice1: {
        type: Array, 
        required: true
    },
    choice2: {
        type: Array, 
        required: true
    },
    contact: {
        type: String, 
        required: true
    },
    notes: {
        type: String, 
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
})

module.exports = mongoose.model('journal', journalEntrySchema);
