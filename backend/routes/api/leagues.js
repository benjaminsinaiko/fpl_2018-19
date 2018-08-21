const express = require('express');
const router = new express.Router();

// Load Player Model
const Player = require('../../models/Player');
// Load League Model
const League = require('../../models/League');

// @route GET api/leagues/test
// @desc Tests leagues route
// @access Public
router.post('/test', (req, res) => res.json({ msg: 'Leagues works' }));

// @route POST api/leagues
// @desc Add/Update leage results
// @access Public
router.get('/', (req, res) => {
  const teamResults = {};

  if (req.body.league_id) teamResults.league_id = req.body.id;
  if (req.body.entry_name) teamResults.entry_name = req.body.entry_name;
  if (req.body.event_total) teamResults.event_total = req.body.event_total;
  if (req.body.player_name) teamResults.player_name = req.body.player_name;
  if (req.body.movement) teamResults.movement = req.body.movement;
  if (req.body.rank) teamResults.rank = req.body.rank;
  if (req.body.last_rank) teamResults.last_rank = req.body.last_rank;
  if (req.body.rank_sort) teamResults.rank_sort = req.body.rank_sort;
  if (req.body.total) teamResults.total = req.body.total;

  // League.findOne({ league_id: req.body.id })
  //   .populate('player')
  //   .then(players => {});
});

module.exports = router;
