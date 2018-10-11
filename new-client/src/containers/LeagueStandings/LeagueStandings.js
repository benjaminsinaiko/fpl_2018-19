import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueStandings.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import LeagueStandingsData from '../../components/LeagueStandingsData/LeagueStandingsData';
import GlobalLeagueCard from '../../components/Cards/GlobalLeagueCard/GlobalLeagueCard';

class LeagueStandings extends Component {
  componentDidMount() {
    this.props.onFetchLeague();
    this.props.onFetchOverall();
    this.props.onFetchUSA();
  }

  render() {
    // League Standings table
    let tableData = <Spinner />;
    let globalLeague = null;

    if (this.props.standings && this.props.overall && this.props.usa) {
      tableData = <LeagueStandingsData standings={this.props.standings} />;
      globalLeague = (
        <GlobalLeagueCard overall={this.props.overall} usa={this.props.usa} />
      );
    }

    return (
      <div className={`container-fluid ${styles.LeagueStandings}`}>
        <div className="container">
          <Header page="League Standings" />
        </div>
        <div className="row text-center">
          <div className="col-md-8 mx-auto">
            <div>{globalLeague}</div>
          </div>
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
    overall: state.league.overall,
    usa: state.league.usa,
    loading: state.league.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchLeague: () => dispatch(actions.fetchLeague(765405)),
    onFetchOverall: () => dispatch(actions.fetchOverall()),
    onFetchUSA: () => dispatch(actions.fetchUSA())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueStandings);
