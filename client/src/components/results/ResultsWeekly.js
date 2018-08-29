import React, { Component } from 'react';

class ResultsWeekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameweeksComplete: 0,
      playerNames: [],
      playerScores: [],
      weeklyWinners: []
    };
  }

  componentDidMount() {
    if (this.props) {
      this.setState({
        gameweeksComplete: this.props.players[0].history.length
      });
      this.props.players.map(player => {
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
    const gwWinner = arr.filter(
      player =>
        player.history[gw].points - player.history[gw].event_transfers_cost ===
        highScore
    );
    return gwWinner;
  }

  render() {
    const { players } = this.props;

    if (players) {
      let winners = this.gameweekWinner(players, 0);
      let handles = winners.map(winner => winner.handle);
      console.log('winner: ', handles);
    }

    console.log(this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-columns">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">GW</h5>
                  <p className="card-text">Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsWeekly;
