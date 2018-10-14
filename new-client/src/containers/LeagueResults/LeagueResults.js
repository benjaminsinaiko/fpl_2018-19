import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueResults.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
// import Spinner from '../../components/UI/Spinner/Spinner';

class LeagueResults extends Component {
  state = {
    gameweekScores: null,
    weeklyWinners: []
  };

  componentWillMount() {
    this.props.onFetchPlayers();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.players !== this.props.players) {
      this.setState({
        gameweekScores: this.setGameweekScores(newProps.players)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.weeklyWinners.length) {
      this.setState({
        weeklyWinners: this.setWeeklyWinners(this.state.gameweekScores)
      });
    }
  }

  setGameweekScores(playersData) {
    let gameweekScores = [];
    playersData.map(player => {
      let name = player.entry.name;
      return player.history.map(gw => {
        let gameweek = gw.event;
        let gwScore = {
          name: name,
          score: gw.points - gw.event_transfers_cost
        };
        if (!gameweekScores[`gameweek_${gameweek}`])
          gameweekScores[`gameweek_${gameweek}`] = [];
        return gameweekScores[`gameweek_${gameweek}`].push(gwScore);
      });
    });
    return gameweekScores;
  }

  setWeeklyWinners(gameweeks) {
    let weeklyWinners = [];
    for (let gameweek in gameweeks) {
      const gwScores = gameweeks[gameweek].map(week => week.score);
      const highScore = Math.max(...gwScores);
      let winners = gameweeks[gameweek].filter(
        player => player.score === highScore
      );
      weeklyWinners.push(winners);
    }
    return weeklyWinners;
  }

  render() {
    if (this.state.weeklyWinners.length) {
      console.log('weekly winners', this.state.weeklyWinners);
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
