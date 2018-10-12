const express = require('express');
const router = new express.Router();
const request = require('request');
const axios = require('axios');

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

// @route GET api/leagues/global
// @desc Get Global Leagues Data
// @access Public
router.get('/global', (req, res) => {
  const leagueIds = [313, 249];

  const leaguePromises = leagueIds.map(leagueId => {
    return Promise.resolve(
      axios
        .get(
          `https://fantasy.premierleague.com/drf/leagues-classic-standings/${leagueId}`
        )
        .then(response => {
          return {
            league: response.data.league.name,
            standings: response.data.standings.results.slice(0, 5)
          };
        })
    );
  });

  Promise.all(leaguePromises)
    .then(response => {
      res.json(response);
    })
    .catch(error => res.json(error));
});

// @route GET api/leagues/:id
// @desc Get League Data By ID
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
