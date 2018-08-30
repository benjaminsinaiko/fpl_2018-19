import React, { Component } from 'react';

class ResultsWeekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameweeksComplete: 0,
      playerNames: [],
      weeklyWinners: [],
      weeklyHighScores: []
    };
  }

  componentDidMount() {
    if (this.props) {
      this.setState({
        gameweeksComplete: this.props.players[0].history.length
      });
      this.props.players.forEach(player => {
        this.state.playerNames.push(player.handle);
      });
    }
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

    // Find weekly Winners
    if (players) {
      for (let i = 0; i < this.state.gameweeksComplete; i++) {
        let winners = this.gameweekWinner(players, i);
        let handles = winners.map(winner => winner.handle);
        this.state.weeklyWinners.push(handles);
      }
    }

    let gwCard;
    if (this.state.weeklyWinners.length > 0) {
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

    console.log(this.state);

    return (
      <div className="container">
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
