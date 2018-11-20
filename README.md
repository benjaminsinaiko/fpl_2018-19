<!-- ![FPL Tracker](./img/trackerLogo.jpg) -->

# FPL Tracker

This project was started to automate a manual spreadsheet for keeping track of weekly PL stats and to learn a little React. FPL Tracker uses the Premier League's unofficial API for all Global and Private league data.

**FPL Tracker** is live for our League, _Fish & Crumple-Ones_, on Heroku - [https://fish-crumple-ones.herokuapp.com](https://fish-crumple-ones.herokuapp.com/)

## How To Use

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### Installing

```bash
# Clone this repository
$ git clone https://github.com/benjaminsinaiko/fpl_2018-19

# Go into the repository
$ cd fpl_2018-19

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

### Using

This build uses the specific league _Fish & Crumple-Ones_. Any league code can be found in the FPL url. _Fish & Crumple-Ones_'s League ID is 765405 as seen in the url:

[https://fantasy.premierleague.com/a/leagues/standings/765405/classic](https://fantasy.premierleague.com/a/leagues/standings/765405/classic)

The league can be changed in the backend _players_ and _leagues_ routes.

## Credits

The source for all League, Team, and Player data comes from the [Premier League's](https://fantasy.premierleague.com/) unofficial Fantasy API. Info on this can be found with a simple reddit search.

FPL Tracker uses the following open source packages:

_backend_

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [body-parser](https://github.com/expressjs/body-parser#readme)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)
- [cors](https://github.com/expressjs/cors#readme)
- [nodemon](https://nodemon.io/)

_client_

- [axios](https://github.com/axios/axios)
- [Chart.js](https://www.chartjs.org/)
- [Moment.js](https://momentjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

## License

MIT
