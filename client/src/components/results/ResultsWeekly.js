import React, { Component } from 'react';
import ResultsMoney from './ResultsMoney';

class ResultsWeekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameweeksComplete: 0,
      teamNames: [],
      weeklyWinners: [],
      weeklyHighScores: []
    };

    this.sortedTeamNames = this.sortedTeamNames.bind(this);
  }

  componentDidMount() {
    if (this.props) {
      this.setState({
        gameweeksComplete: this.props.players[0].history.length
      });
    }
  }

  sortedTeamNames(teams, gw) {
    let sortedTeams = teams.sort(
      (a, b) => b.history[gw].total_points - a.history[gw].total_points
    );
    sortedTeams.forEach(team => {
      this.state.teamNames.push(team.handle);
    });
  }

  gameweekWinner(arr, gw) {
    const gwScores = arr.map(
      scores =>
        scores.history[gw].points - scores.history[gw].event_transfers_cost
    );
    const highScore = Math.max(...gwScores);
    this.state.weeklyHighScores.push(highScore);
    const gwWinner = arr.filter(
      player =>
        player.history[gw].points - player.history[gw].event_transfers_cost ===
        highScore
    );
    return gwWinner;
  }

  render() {
    const { players } = this.props;
    const { teamNames, weeklyWinners, gameweeksComplete } = this.state;

    if (gameweeksComplete > 0) {
      this.sortedTeamNames(players, gameweeksComplete - 1);
    }

    // Find weekly Winners
    if (players) {
      for (let i = 0; i < this.state.gameweeksComplete; i++) {
        let winners = this.gameweekWinner(players, i);
        let handles = winners.map(winner => winner.handle);
        this.state.weeklyWinners.push(handles);
      }
    }

    let winningsTable;
    let gwCard;
    if (this.state.weeklyWinners.length > 0) {
      winningsTable = (
        <ResultsMoney
          teamNames={teamNames}
          weeklyWinners={weeklyWinners}
          players={players}
        />
      );
      gwCard = this.state.weeklyWinners.map((week, index) => (
        <div key={index} className="card">
          <div className="card-header text-center">
            GW {index + 1} |{' '}
            <small>High Score: {this.state.weeklyHighScores[index]}</small>
          </div>
          <div className="card-body">
            <p className="card-text">{week}</p>
          </div>
        </div>
      ));
    }

    return (
      <div className="container">
        {winningsTable}
        <div className="row">
          <div className="col-md-12">
            <div className="card-columns">{gwCard}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsWeekly;
