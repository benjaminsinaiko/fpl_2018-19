import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './LeagueResults.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import WinningsResultsData from '../../components/WinningsResultsData/WinningsResultsData';
import WeeklyWinnersCard from '../../components/Cards/WeeklyWinnersCard/WeeklyWinnersCard';
import LeagueResultsGameweekData from '../../components/LeagueResultsGameweekData/LeagueResultsGameweekData';

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
      // console.log('[componentDidUpdate]');
      this.setState({
        weeklyWinners: this.setWeeklyWinners(this.state.gameweekScores)
      });
    }
  }

  setGameweekScores(playersData) {
    let gameweekScores = [];
    playersData.map(player => {
      let team = player.entry.name;
      let name = `${player.entry.player_first_name} ${
        player.entry.player_last_name
      }`;
      return player.history.map(gw => {
        let gameweek = gw.event;
        let gwScore = {
          team: team,
          name: name,
          score: gw.points - gw.event_transfers_cost
        };
        if (!gameweekScores[`${gameweek}`]) gameweekScores[`${gameweek}`] = [];
        return gameweekScores[`${gameweek}`].push(gwScore);
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
    let resultsTable = <Spinner />;
    if (this.state.weeklyWinners && this.props.players) {
      resultsTable = (
        <WinningsResultsData
          players={this.props.players}
          winners={this.state.weeklyWinners}
        />
      );
    }

    let weeklyWinners = null;
    if (this.state.weeklyWinners.length) {
      weeklyWinners = <WeeklyWinnersCard winners={this.state.weeklyWinners} />;
    }

    let gameweeksTable = null;
    if (this.state.gameweekScores) {
      gameweeksTable = (
        <LeagueResultsGameweekData gameweekScores={this.state.gameweekScores} />
      );
    }

    return (
      <div className={`container-fluid ${styles.LeagueResults}`}>
        <div className="container">
          <Header page="League Results" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className={styles.GroupHeader}>Overall Results</h4>
            <div className={styles.GameweeksTable}>{resultsTable}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className={styles.GroupHeader}>Weekly Winners</h4>
            <div className={styles.WeeklyWinners}>{weeklyWinners}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className={styles.GroupHeader}>Weekly Points</h4>
            <div className={styles.GameweeksTable}>{gameweeksTable}</div>
          </div>
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
