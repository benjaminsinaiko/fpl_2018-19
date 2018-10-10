import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueStandings.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import LeagueStandingsData from '../../components/LeagueStandingsData/LeagueStandingsData';

class LeagueStandings extends Component {
  componentDidMount() {
    this.props.onFetchLeague();
  }

  render() {
    // League Standings table
    let tableData = <Spinner />;

    if (this.props.standings) {
      tableData = <LeagueStandingsData standings={this.props.standings} />;
    }

    return (
      <div className={styles.LeagueStandings}>
        <div className="container">
          <Header page="League Standings" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.LeagueTable}>{tableData}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    standings: state.league.standings,
    loading: state.league.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchLeague: () => dispatch(actions.fetchLeague())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueStandings);
