const express = require('express');
const router = new express.Router();

// @route GET api/players/test
// @desc Tests players route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Players works' }));

module.exports = router;
