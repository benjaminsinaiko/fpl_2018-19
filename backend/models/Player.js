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
  },
  history: [
    {
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
    }
  ]
});

module.exports = Player = mongoose.model('Player', PlayerSchema);
