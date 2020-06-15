const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const calendarController = require('../../controllers/calendarController');

// @route  POST api/calendar
// @desc   Get all calendar entries
// @access Private
router.post(
    '/', 
    [auth.authorized, auth.calendar_post],
    calendarController.calendar_entry
);

// @route  GET api/calendar
// @desc   Get all calendar entries
// @access Private
router.get(
    '/', 
    auth.authorized,
    calendarController.get_calendar
);

// @route  GET api/calendar/:id
// @desc   Get calendar entry by id
// @access Private
router.get(
    '/:id',
    auth.authorized,
    calendarController.get_entry

)

// @route  DELETE api/calendar/:id
// @desc   Delete a calendar entry
// @access Private
router.delete(
    '/:id',
    auth.authorized,
    calendarController.delete_entry
)


module.exports = router;

