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
                <div class="jumbotron jumbotron-fluid landing-header">
                  <div class="container">
                    <h1 class="display-4 ">Fish & Crumple-Ones</h1>
                    <p class="lead">2018/19 Season</p>
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
