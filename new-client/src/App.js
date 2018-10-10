import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/Layout/Navigation/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import GameweekStatus from './containers/GameweekStatus/GameweekStatus';
import LeagueStandings from './containers/LeagueStandings/LeagueStandings';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={GameweekStatus} />
          <Route path="/league" component={LeagueStandings} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
