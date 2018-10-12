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
    this.props.onFetchGlobal();
    this.props.onFetchLeague();
  }

  render() {
    // League Standings table
    let tableData = <Spinner />;
    let globalLeague = null;

    if (this.props.fishLeague && this.props.globalLeagues) {
      console.log('[fish]', this.props.fishLeague);
      console.log('[global]', this.props.globalLeagues);
      tableData = <LeagueStandingsData standings={this.props.fishLeague} />;

      const overall = this.props.globalLeagues[0].standings[0];
      const usa = this.props.globalLeagues[1].standings[0];
      console.log(usa);
      globalLeague = <GlobalLeagueCard overall={overall} usa={usa} />;
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
    fishLeague: state.league.fishLeague,
    globalLeagues: state.league.globalLeagues,
    loading: state.league.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchLeague: () => dispatch(actions.fetchLeague(765405)),
    onFetchGlobal: () => dispatch(actions.fetchGlobal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueStandings);
