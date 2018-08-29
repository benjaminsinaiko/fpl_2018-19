require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const players = require('./routes/api/players');
const teams = require('./routes/api/teams');
const leagues = require('./routes/api/leagues');
const results = require('./routes/api/results');

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Set mongoose.Promise to any Promise implementation
mongoose.Promise = Promise;

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

// Use Routes
app.use('/api/players', players);
app.use('/api/teams', teams);
app.use('/api/leagues', leagues);
app.use('/api/results', results);

app.get('/', (req, res) => res.send(process.env.MONGO_USER));

app.listen(port, () => console.log(`Server is running on port ${port}`));
