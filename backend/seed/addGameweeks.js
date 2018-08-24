const axios = require('axios');

const alex = 963600;

// Get weekly data by player
function getWeeklyData(player) {
  axios
    .get(`https://fantasy.premierleague.com/drf/entry/${player}/history`)
    .then(res => {
      // console.log(res.data.history);
      res.data.history.map(gw => {
        // console.log(gw);
        axios
          .post(`http://localhost:5000/api/players/history/${player}`, gw)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
      });
    })

    .catch(err => console.log(err));
}

// 963600

getWeeklyData(alex);
