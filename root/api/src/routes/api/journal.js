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

// @route  GET api/journal/:id
// @desc   Get journal entry by id
// @access Private
router.get(
    '/:id',
    auth.authorized,
    journalController.get_entry
)

// @route  DELETE api/journal/:id
// @desc   Delete a journal entry
// @access Private
router.delete(
    '/:id',
    auth.authorized,
    journalController.delete_entry
)

module.exports = router;





