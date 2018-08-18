const express = require('express');
const router = new express.Router();

// @route GET api/leagues/test
// @desc Tests leagues route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Leagues works' }));

module.exports = router;
