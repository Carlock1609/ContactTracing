const express = require('express');
const router = express.Router();


// importing the controllers
const indexController = require('../../controllers/indexController');
const usersController = require('../../controllers/usersController');

// Get index page
// This page i want to have Calender and journal data on it.
router.get('/', indexController.index);

// Created marker
router.post('/', indexController.create_calendar_entry);

// created journal entry
router.post('/journal_entry', indexController.create_journal_entry)

// logout user
router.get('/logout', usersController.logout); 


module.exports = router;
