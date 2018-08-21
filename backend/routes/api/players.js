const express = require('express');
const router = new express.Router();

// Load Player Model
const Player = require('../../models/Player');

// @route GET api/players/test
// @desc Tests players route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Players works' }));

// @route POST api/players/
// @desc Tests players route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Players works' }));

// @route GET api/players/all
// @desc Get all League Players
// @access Public
router.get('/all', (req, res) => {
  const errors = {};

  Player.find()
    .then(players => {
      if (!players) {
        errors.noplayers = 'There are no current players';
        return res.status(404).json(errors);
      }

      res.json(players);
    })
    .catch(err =>
      res.status(404).json({ players: 'There are no current players' })
    );
});

module.exports = router;
