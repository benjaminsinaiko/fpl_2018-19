const express = require('express');
const router = new express.Router();
const request = require('request');

// @route GET api/status/test
// @desc Tests status route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Status works' }));

// @route GET api/status/
// @desc Get Gameweek Status
// @access Public
router.get('/', (req, res) => {
  request(
    {
      url: 'https://fantasy.premierleague.com/drf/events/',
      method: 'GET'
    },
    (error, response) => {
      if (error) {
        //
      } else {
        const body = JSON.parse(response.body);
        res.json(body);
      }
    }
  );
});

module.exports = router;
