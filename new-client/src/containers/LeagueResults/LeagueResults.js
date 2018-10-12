import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueResults.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class LeagueResults extends Component {
  componentDidMount() {
    this.props.onFetchPlayers();
  }

  render() {
    return (
      <div className={`container-fluid ${styles.LeagueResults}`}>
        <div className="container">
          <Header page="League Results" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlayers: () => dispatch(actions.fetchPlayersData())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LeagueResults);
