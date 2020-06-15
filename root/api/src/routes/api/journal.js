const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');

const journalController = require('../../controllers/journalController');

// @route  POST api/journal
// @desc   Create a journal entry
// @access Private
router.post(
    '/', 
    [auth.authorized, auth.journal_post], 
    journalController.journal_entry
);

// @route  GET api/journal
// @desc   Get all journal entries
// @access Private
router.get(
    '/', 
    auth.authorized, 
    journalController.get_journal
);

router.get(
    '/:id',
    auth.authorized,
    journalController.get_entry
)

module.exports = router;





