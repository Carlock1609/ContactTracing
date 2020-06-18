const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    journal: [ {
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
        }
    } ],
    calendar: [ {
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
        }
    } ]
});

module.exports = Profile = mongoose.model('dashboard', DashboardSchema);