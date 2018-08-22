import React, { Component } from 'react';

import Events from '../events/Events';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="jumbotron jumbotron-fluid landing-header">
                  <div className="container">
                    <h1 className="display-4 ">Fish & Crumple-Ones</h1>
                    <p className="lead">2018/19 Season</p>
                  </div>
                </div>
              </div>
            </div>
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
