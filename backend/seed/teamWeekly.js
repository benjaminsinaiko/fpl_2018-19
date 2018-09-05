const axios = require('axios');

// Get weekly data by player
function getWeeklyData(entry) {
  axios
    .get(`https://fantasy.premierleague.com/drf/entry/${entry}/history`)
    .then(res => console.log(res.data.history))

    .catch(err => console.log(err));
}

// Get Playe Ids
axios
  .get('http://localhost:5000/api/players/all')
  .then(res => {
    // Get Player info
    let players = res.data;
    let playersId = [];
    players.map(player => {
      playersId.push({ player: player._id, entry: player.id });
    });

    // Get Weekly data by player
    playersId.map(playerId => {
      getWeeklyData(playerId.entry);
    });
  })
  .catch(err => console.log(err));
