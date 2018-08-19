require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('../models/Player');

const players = [
  {
    id: 1790869,
    league_id: 19080404,
    player_first_name: 'Benjamin',
    player_last_name: 'Sinaiko',
    handle: '@ChicagoSeagulls'
  },
  {
    id: 963600,
    league_id: 19080407,
    player_first_name: 'alex',
    player_last_name: 'balick',
    handle: 'babybelend'
  },
  {
    id: 954954,
    league_id: 19080408,
    player_first_name: 'Brett',
    player_last_name: 'Saltzman',
    handle: 'Obama’s Yang'
  },
  {
    id: 446958,
    league_id: 19080403,
    player_first_name: 'Benjamin',
    player_last_name: 'Lurie',
    handle: 'Kim Jong Kün'
  },
  {
    id: 1643394,
    league_id: 19080406,
    player_first_name: 'andy',
    player_last_name: 'Rosenband',
    handle: 'CHANGE NAME'
  },
  {
    id: 3357969,
    league_id: 19080405,
    player_first_name: 'Jonathan',
    player_last_name: 'Mirkin',
    handle: "WINP '17"
  },
  {
    id: 3587639,
    league_id: 20602343,
    player_first_name: 'Ian',
    player_last_name: 'Goldberg',
    handle: "Goldberg's Dele"
  },
  {
    id: 3015585,
    league_id: 22198524,
    player_first_name: 'Jon',
    player_last_name: 'Margolis',
    handle: 'Mmmbappe ba duba dop'
  },
  {
    id: 3863048,
    league_id: 22356874,
    player_first_name: 'paul',
    player_last_name: 'damato',
    handle: 'Sergio VARmos'
  }
];

// DB Config
const db = `mongodb://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@ds123562.mlab.com:23562/fpl_2018-19`;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Seed
players.map(player => {
  const playerData = new Player(player);
  playerData.save();
});
