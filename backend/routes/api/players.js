const express = require('express');
const router = new express.Router();
const axios = require('axios');

// @route GET api/players/test
// @desc Tests players route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Players works' }));

// @route GET api/players
// @desc Get All League Players (API) - Sorted By Score
// @access Public
router.get('/', async (req, res) => {
  const playerIds = await axios
    .get(
      'https://fantasy.premierleague.com/drf/leagues-classic-standings/765405'
    )
    .then(response => {
      const leagueIds = response.data.standings.results.map(team => team.entry);
      return leagueIds;
    });

  const playerPromises = playerIds.map(playerId => {
    return Promise.resolve(
      axios
        .get(`https://fantasy.premierleague.com/drf/entry/${playerId}/history`)
        .then(response => response.data)
    );
  });

  Promise.all(playerPromises)
    .then(response => {
      res.json(response);
    })
    .catch(error => res.json(error));
});

module.exports = router;
