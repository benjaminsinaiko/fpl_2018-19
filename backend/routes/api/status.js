const express = require('express');
const router = new express.Router();
const axios = require('axios');

// @route GET api/status/test
// @desc Tests status route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Status works' }));

// @route GET api/status/
// @desc Get Gameweek Status
// @access Public
router.get('/', (req, res) => {
  axios
    .get('https://fantasy.premierleague.com/drf/events/')
    .then(response => response.data);
});

module.exports = router;
