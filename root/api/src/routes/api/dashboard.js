const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const dashboardController = require('../../controllers/dashboardController');

// @route  GET api/dashboard
// @desc   Get all dashboard entries
// @access Private
router.get(
    '/', 
    auth.authorized, 
    dashboardController.get_dashboard
);

// @route  PUT api/dashboard/journal
// @desc   Add dashboard journal entry
// @access Private
router.put(
    '/calendar',
    [auth.authorized, auth.calendar_post],
    dashboardController.create_calendar_entry
);

// @route  PUT api/dashboard/journal
// @desc   Add dashboard journal entry
// @access Private
router.put(
    '/journal',
    [auth.authorized, auth.journal_post],
    dashboardController.create_journal_entry
);

// @route  GET api/dashboard/calendar/:id
// @desc   Get calendar entry by id
// @access Private
router.get(
    '/journal/:id',
    auth.authorized,
    dashboardController.get_journal_entry
);

// @route  GET api/dashboard/calendar:id
// @desc   Get calendar entry by id
// @access Private
router.get(
    '/calendar/:id',
    auth.authorized,
    dashboardController.get_calendar_entry
);


// @route  DELETE api/dashboard/journal/:id
// @desc   Delete a journal entry
// @access Private
router.delete(
    '/journal/:id',
    auth.authorized,
    dashboardController.delete_journal_entry
);

// @route  DELETE api/dashboard/calendar/:id
// @desc   Delete a calendar entry
// @access Private
router.delete(
    '/calendar/:id',
    auth.authorized,
    dashboardController.delete_calendar_entry
);


module.exports = router;




