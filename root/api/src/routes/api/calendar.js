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

router.get(
    '/:id',
    auth.authorized,
    calendarController.get_entry

)


module.exports = router;

