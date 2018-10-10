import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueStandings.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class LeagueStandings extends Component {
  componentDidMount() {
    this.props.onFetchLeague();
  }

  render() {
    return (
      <div className={styles.LeagueStandings}>
        <div className="container">
          <Header page="League Standings" />
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
  null,
  mapDispatchToProps
)(LeagueStandings);
