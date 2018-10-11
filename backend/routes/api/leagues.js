const express = require('express');
const router = new express.Router();
const request = require('request');

// Load Player Model
const Player = require('../../models/Player');
// Load League Model
const League = require('../../models/League');

// @route GET api/leagues/test
// @desc Tests leagues route
// @access Public
router.post('/test', (req, res) => res.json({ msg: 'Leagues works' }));

// @route GET api/leagues/
// @desc Get League Data
// @access Public
router.get('/', (req, res) => {
  request(
    {
      url:
        'https://fantasy.premierleague.com/drf/leagues-classic-standings/765405',
      method: 'GET'
    },
    (error, response) => {
      if (error) {
        res.json(error);
      } else {
        const body = JSON.parse(response.body);
        res.json(body);
      }
    }
  );
});

// @route GET api/leagues/:id
// @desc Get League Data
// @access Public
router.get('/:id', (req, res) => {
  request(
    {
      url: `https://fantasy.premierleague.com/drf/leagues-classic-standings/${
        req.params.id
      }`,
      method: 'GET'
    },
    (error, response) => {
      if (error) {
        res.json(error);
      } else {
        const body = JSON.parse(response.body);
        res.json(body);
      }
    }
  );
});

module.exports = router;
