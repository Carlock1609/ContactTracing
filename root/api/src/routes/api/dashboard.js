const express = require('express');
const router = express.Router();


// importing the controllers
const dashboardController = require('../../controllers/dashboardController');

// Get index page
// This page i want to have Calender and journal data on it.
router.get('/index', dashboardController.dashboard);

// Created marker
router.post('/calendar', dashboardController.create_calendar_entry);

// created journal entry
router.post('/journal', dashboardController.create_journal_entry)


module.exports = router;
