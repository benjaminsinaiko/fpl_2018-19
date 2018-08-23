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

// @route POST api/players/history/:id
// @desc Update player history
// @access Public
router.post('/history/:id', (req, res) => {
  const newHistory = {
    entry: req.body.entry,
    movement: req.body.movement,
    points: req.body.points,
    total_points: req.body.total_points,
    rank: req.body.rank,
    rank_sort: req.body.rank_sort,
    overall_rank: req.body.overall_rank,
    event_transfers: req.body.event_transfers,
    event_transfers_cost: req.body.event_transfers_cost,
    value: req.body.value,
    points_on_bench: req.body.points_on_bench,
    bank: req.body.bank,
    event: req.body.event,
    week_id: req.body.id
  };

  Player.findOne({ id: req.params.id }).then(player => {
    let history = player.history;
    if (history.lenght > 0) {
      history.map(week => {
        if (week.event === req.body.event) {
          week = newHistory;
          console.log('History Updated');
        } else {
          player.history.push(newHistory);
        }
      });
    }
    player.history.push(newHistory);

    player.save().then(player => res.json(player));
    // res.json(newHistory);
  });
});

module.exports = router;
