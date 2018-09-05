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
  }

  componentWillMount() {
    let handles = this.props.players.map(player => {
      return player.handle;
    });
    this.setState({ teamNames: handles });

    this.setState({
      gameweeksComplete: this.props.players[0].history.length
    });
  }

  componentDidMount() {
    if (this.props) {
      for (let i = 0; i < this.state.gameweeksComplete; i++) {
        let winners = this.gameweekWinner(this.props.players, i);
        let handles = winners.map(winner => winner.handle);
        this.setState(prevState => ({
          weeklyWinners: [...prevState.weeklyWinners, handles]
        }));
      }
    }
  }

  gameweekWinner(players, gw) {
    const gwScores = players.map(
      scores =>
        scores.history[gw].points - scores.history[gw].event_transfers_cost
    );
    const highScore = Math.max(...gwScores);
    this.setState(prevState => ({
      weeklyHighScores: [...prevState.weeklyHighScores, highScore]
    }));
    const gwWinner = players.filter(
      player =>
        player.history[gw].points - player.history[gw].event_transfers_cost ===
        highScore
    );
    return gwWinner;
  }

  render() {
    const { players } = this.props;
    const { teamNames, weeklyWinners, gameweeksComplete } = this.state;

    console.log('state', this.state);

    let winningsTable;
    let gwCard;
    if (this.state.weeklyWinners.length > 0) {
      winningsTable = (
        <ResultsMoney
          gameweeksComplete={gameweeksComplete}
          teamNames={teamNames}
          weeklyWinners={weeklyWinners}
          players={players}
        />
      );
      gwCard = this.state.weeklyWinners.map((week, index) => (
        <div key={index} className="col-sm-3 mb-4">
          <div className="card">
            <div className="card text-center">
              <div className="card-header">
                GW {index + 1} |{' '}
                <small>High Score: {this.state.weeklyHighScores[index]}</small>
              </div>
              <div className="card-body">
                <p className="card-text">{week}</p>
              </div>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div className="container">
        {winningsTable}
        <h3 className="text-center mb-4 text-white">Weekly Winners</h3>
        <div className="row">{gwCard}</div>
      </div>
    );
  }
}

export default ResultsWeekly;
