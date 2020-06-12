const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarEntrySchema = new mongoose.Schema({
    date: {
        type: String, 
        required: true
    },
    time: {
        type: String, 
        required: true
    },
    choice: {
        type: Array, 
        required: true
    },
    notes: {
        type: String, 
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model('CalendarEntry', calendarEntrySchema);