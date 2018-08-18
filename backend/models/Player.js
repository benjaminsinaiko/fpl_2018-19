const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  player_first_name: {
    type: String
  },
  player_last_name: {
    type: String
  },
  handle: {
    type: String
  }
});
