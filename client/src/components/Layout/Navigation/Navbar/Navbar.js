import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav
        styles={styles.Navbar}
        className={`navbar navbar-expand-sm navbar-dark mb-4 ${styles.Navbar}`}
      >
        <div className="container">
          <NavLink exact className="navbar-brand" to="/">
            FPL 2018/19
          </NavLink>
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
                <NavLink exact className="nav-link" to="/league">
                  {' '}
                  League Standings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/results">
                  {' '}
                  F&C Results
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/players">
                  {' '}
                  Player Data
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  {' '}
                  Gameweek Status
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
