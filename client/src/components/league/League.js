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

    if (league === null || loading) {
      leagueItems = null;
    } else {
      leagueItems = <LeagueTable leagueResults={league.standings.results} />;
    }

    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <Header />
              </div>
            </div>
          </div>
        </div>
        <table className="table table-responsive table-hover league-table">
          <caption>FPL Standings</caption>
          <thead>
            <tr>
              <th scope="col">
                <i className="fa fa-arrows-v" />
              </th>
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
