import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueResults.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class LeagueResults extends Component {
  state = {
    gameweeks: null,
    weeklyWinners: null
  };

  componentWillMount() {
    this.props.onFetchPlayers();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.players !== this.props.players) {
      this.setState({ gameweeks: this.setGameweekScores(newProps.players) });
    }
  }

  setGameweekScores(playersData) {
    let gameweeks = [];
    playersData.map(player => {
      let name = player.entry.name;
      return player.history.map(gw => {
        let gameweek = gw.event;
        let gwScore = {
          name: name,
          score: gw.points - gw.event_transfers_cost
        };

        if (!gameweeks[`Gameweek ${gameweek}`])
          gameweeks[`Gameweek ${gameweek}`] = [];
        return gameweeks[`Gameweek ${gameweek}`].push(gwScore);
      });
    });
    return gameweeks;
  }

  getWinners(gameweeks) {
    let weeklyWinners = gameweeks.forEach(gameweek => {
      return gameweek.map(week => week.score);
    });
    return weeklyWinners;
  }

  render() {
    if (this.state.gameweeks) {
      console.log(this.state.gameweeks);
    }

    return (
      <div className={`container-fluid ${styles.LeagueResults}`}>
        <div className="container">
          <Header page="League Results" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlayers: () => dispatch(actions.fetchPlayersData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueResults);
