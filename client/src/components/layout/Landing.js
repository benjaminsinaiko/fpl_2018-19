import React, { Component } from 'react';
import Header from '../common/Header';

import Events from '../events/Events';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <Header page="Gameweek Status" />
          <div className="row">
            <div className="col-md-12 text-center">
              <Events />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
