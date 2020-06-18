const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    journal: [ {
        date: {
            type: Date,
        },
        time: {
            type: String,
        },
        activity: {
            type: String,
        },
        location: {
            type: String
        },
        choice1: {
            type: Array,
        },
        choice2: {
            type: Array,
        },
        contact: {
            type: String,
        },
        notes: {
            type: String,
        }
    } ],
    calendar: [ {
        date: {
            type: String,
        },
        time: {
            type: String,
        },
        choice: {
            type: Array,
        },
        notes: {
            type: String,
        }
    } ]
});

module.exports = Profile = mongoose.model('dashboard', DashboardSchema);