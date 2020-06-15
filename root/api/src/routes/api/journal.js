const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const journalController = require('../../controllers/journalController');

// @route  GET api/journal
// @desc   Get all journal entries
// @access Private
router.get(
    '/', 
    auth.authorized, 
    journalController.get_all_journal
);

// @route  POST api/journal
// @desc   Create a journal entry
// @access Private
router.post(
    '/', 
    auth.authorized, 
    journalController.journal_entry
);


module.exports = router;





