require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const path = require('path');

const status = require('./routes/api/status');
const players = require('./routes/api/players');
const teams = require('./routes/api/teams');
const leagues = require('./routes/api/leagues');

// Add cors
app.use(cors());
app.options('*', cors()); // enable pre-flight

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Use Routes
app.use('/api/status', status);
app.use('/api/players', players);
app.use('/api/teams', teams);
app.use('/api/leagues', leagues);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
