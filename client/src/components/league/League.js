import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import Header from '../common/Header';
import LeagueTable from './LeagueTable';
import { getLeagueStandings } from '../../actions/leagueActions';

class League extends Component {
  componentDidMount() {
    this.props.getLeagueStandings();
  }

  render() {
    const { league, loading } = this.props.league;

    let leagueItems;
    let loadSpinner;

    if (league === null || loading) {
      leagueItems = null;
      loadSpinner = <Spinner />;
    } else {
      leagueItems = <LeagueTable leagueResults={league.standings.results} />;
      loadSpinner = null;
    }

    return (
      <div className="league">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <Header page="League Table" />
              </div>
            </div>
          </div>
        </div>
        <div className="league-table">
          <table className="table table-responsive table-hover">
            <caption>FPL League Standings</caption>
            <thead className="thead-dark">
              <tr>
                <th scope="col" />
                <th scope="col">Team</th>
                <th scope="col">Rank</th>
                <th scope="col">Last</th>
                <th scope="col">GW</th>
                <th scope="col">Total</th>
                <th scope="col">Player</th>
              </tr>
            </thead>
            <tbody>{leagueItems}</tbody>
          </table>
        </div>
        {loadSpinner}
      </div>
    );
  }
}

League.propTypes = {
  getLeagueStandings: PropTypes.func.isRequired,
  league: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  league: state.league
});

export default connect(
  mapStateToProps,
  { getLeagueStandings }
)(League);
