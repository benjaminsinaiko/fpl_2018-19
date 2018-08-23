import React, { Component } from 'react';
import Header from '../common/Header';

import Events from '../events/Events';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <Header />
            <div className="row">
              <div className="col-md-12 text-center">
                <Events />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
