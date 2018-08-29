import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Update from './components/update/Update';
import League from './components/league/League';
import Results from './components/results/Results';
import ResultsWeekly from './components/results/ResultsWeekly';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/update" component={Update} />
            <Route exact path="/league" component={League} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/weekly" component={ResultsWeekly} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
