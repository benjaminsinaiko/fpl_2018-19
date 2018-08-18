const express = require('express');
const router = new express.Router();

// @route GET api/teams/test
// @desc Tests teams route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Teams works' }));

module.exports = router;
