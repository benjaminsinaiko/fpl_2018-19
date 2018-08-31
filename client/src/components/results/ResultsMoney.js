import React, { Component } from 'react';

class ResultsMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusMoney: [960, 600, -50, -100],
      weeklyWinnings: 840 / 38,
      teamNames: [],
      weeklyWinners: [],
      numberOfWins: {},
      amountFromWins: {},
      totalPoints: {},
      bonus: {},
      totalPL: {}
    };

    this.getPlayerData = this.getPlayerData.bind(this);
  }

  componentWillMount() {
    this.setState({ gameweeksComplete: this.props.gameweeksComplete });
    this.setState({ teamNames: this.props.teamNames });
    this.setState({ weeklyWinners: this.props.weeklyWinners });
  }

  componentDidMount() {
    this.getPlayerData(this.props.players);
  }

  // Find number of wins
  getPlayerData(players) {
    players.forEach(player => {
      let gw = this.state.gameweeksComplete - 1;
      let winsTotal = 0;
      let amountTotal = 0;

      // Get Total Score
      this.setState(prevState => ({
        totalPoints: {
          ...prevState.totalPoints,
          [player.handle]: player.history[gw].total_points
        }
      }));

      this.state.weeklyWinners.forEach(week => {
        let numOfWinners = week.length;

        if (week.includes(player.handle)) {
          winsTotal += 1 / numOfWinners;
          amountTotal += this.state.weeklyWinnings / numOfWinners;
        }
      });

      this.setState(prevState => ({
        numberOfWins: { ...prevState.numberOfWins, [player.handle]: winsTotal }
      }));
      this.setState(prevState => ({
        amountFromWins: {
          ...prevState.amountFromWins,
          [player.handle]: amountTotal
        }
      }));
    });
  }

  // Find total score
  findScore(players) {
    players.forEach(player => {
      //
    });
  }

  // Format Weekly $ column
  winningsFormat(amount) {
    if (amount) {
      return `$${amount.toFixed(2)}`;
    }
  }

  render() {
    const { teamNames, numberOfWins, amountFromWins, totalPoints } = this.state;
    const { players } = this.props;
    // console.log('players', players);
    console.log('state: ', this.state);

    let teams;
    if (teamNames) {
      teams = teamNames.map((team, index) => (
        <tr key={index} className="text-center">
          <td>{team}</td>
          <td>{numberOfWins[team]}</td>
          <td>{this.winningsFormat(amountFromWins[team])}</td>
          <td>{totalPoints[team]}</td>
          <td>4</td>
          <td>5</td>
        </tr>
      ));
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="league-table">
                <table className="table table-responsive-lg table-striped table-bordered table-hover">
                  <caption>(Bonus/Penalty Not Final Until GW 38)</caption>
                  <thead className="text-center thead-dark">
                    <tr>
                      <th scope="col">Team</th>
                      <th scope="col">Weekly Wins</th>
                      <th scope="col">Weekly $</th>
                      <th scope="col">Total Score</th>
                      <th scope="col">Bonus/Penalty</th>
                      <th scope="col">Total P/L</th>
                    </tr>
                  </thead>
                  <tbody>{teams}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsMoney;
