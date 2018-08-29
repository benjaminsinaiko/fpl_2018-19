import React, { Component } from 'react';

class ResultsWeekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameweeksComplete: 0,
      playerNames: [],
      playerScores: []
    };
  }

  componentDidMount() {
    if (this.props) {
      this.setState({
        gameweeksComplete: this.props.players[0].history.length
      });
    }
  }

  render() {
    const { players } = this.props;

    let playerNames = [];

    if (players) {
      players.map(player => {
        let scores = [];
        playerNames.push(player.handle);

        player.history.map(week => {
          scores.push(week.points - week.event_transfers_cost);
        });
        this.state.playerScores.push(scores);
      });
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
