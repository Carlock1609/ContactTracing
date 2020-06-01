const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarEntrySchema = new mongoose.Schema({
    date: Date,
    time: Date,
    choice: Array,
    notes: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model('CalendarEntry', calendarEntrySchema);