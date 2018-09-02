import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            FPL 2018/19
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/league">
                  {' '}
                  League Standings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/results">
                  {' '}
                  F&C Results
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {' '}
                  Gameweek Status
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  More Soon...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
