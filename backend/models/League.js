const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LeagueSchema = new Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  league_id: {
    type: Number,
    required: true
  },
  entry_name: {
    type: String,
    required: true
  },
  event_total: {
    type: Number,
    required: true
  },
  player_name: {
    type: String,
    required: true
  },
  movement: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  last_rank: {
    type: Number,
    required: true
  },
  rank_sort: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = League = mongoose.model('League', LeagueSchema);
