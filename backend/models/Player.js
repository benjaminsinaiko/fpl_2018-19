const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlayerSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  league_id: {
    type: Number,
    required: true
  },
  player_first_name: {
    type: String,
    required: true
  },
  player_last_name: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  }
});

module.exports = Player = mongoose.model('Player', PlayerSchema);
