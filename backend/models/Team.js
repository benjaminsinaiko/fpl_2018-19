const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TeamSchema = new Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'Player'
  },
  entry: {
    type: Number,
    required: true
  },
  movement: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  total_points: {
    type: Number,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  rank_sort: {
    type: Number,
    required: true
  },
  overall_rank: {
    type: Number,
    required: true
  },
  event_transfers: {
    type: Number,
    default: 0
  },
  event_transfers_cost: {
    type: Number,
    default: 0
  },
  value: {
    type: Number,
    required: true
  },
  points_on_bench: {
    type: Number,
    default: 0
  },
  bank: {
    type: Number,
    default: 0
  },
  event: {
    type: Number,
    required: true
  },
  week_id: {
    type: Number,
    required: true
  }
});

module.exports = Team = mongoose.model('Team', TeamSchema);
