const express = require('express');
const router = new express.Router();

// Load Player Model
const Player = require('../../models/Player');
// Load Team Model
const Team = require('../../models/Team');

// @route GET api/teams/test
// @desc Tests teams route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Teams works' }));

// @route POST api/teams
// @desc Add/Update team results
// @access Public
router.post('/', (req, res) => {
  const teamFields = {};

  if (req.body.entry) teamFields.entry = req.body.entry;
  if (req.body.id) teamFields.week_id = req.body.id;
  if (req.body.movement) teamFields.movement = req.body.movement;
  if (req.body.points) teamFields.points = req.body.points;
  if (req.body.total_points) teamFields.total_points = req.body.total_points;
  if (req.body.rank) teamFields.rank = req.body.rank;
  if (req.body.rank_sort) teamFields.rank_sort = req.body.rank_sort;
  if (req.body.overall_rank) teamFields.overall_rank = req.body.overall_rank;
  if (req.body.event_transfers)
    teamFields.event_transfers = req.body.event_transfers;
  if (req.body.event_transfers_cost)
    teamFields.event_transfers_cost = req.body.event_transfers_cost;
  if (req.body.value) teamFields.value = req.body.value;
  if (req.body.points_on_bench)
    teamFields.points_on_bench = req.body.points_on_bench;
  if (req.body.bank) teamFields.bank = req.body.bank;
  if (req.body.event) teamFields.event = req.body.event;

  Team.findOne({ week_id: req.body.id })
    .then(event => {
      if (event) {
        console.log('Event found');
        console.log('teamFields: ', teamFields);
        Team.findOneAndUpdate(
          { week_id: req.body.id },
          { $set: teamFields },
          { new: true }
        )
          .then(event => {
            console.log('Event updated');
            res.json(event);
          })
          .catch(err => console.log(err));
      } else {
        console.log('No Event found');
        console.log('teamFields: ', teamFields);
        // Create
        new Team(teamFields).save().then(event => res.json(event));
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;
