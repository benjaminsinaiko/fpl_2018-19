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
      totalPoints: {}
    };

    this.getPlayerData = this.getPlayerData.bind(this);
    this.getBonusPenalty = this.getBonusPenalty.bind(this);
  }

  componentWillMount() {
    this.setState({
      gameweeksComplete: this.props.gameweeksComplete,
      teamNames: this.props.teamNames,
      weeklyWinners: this.props.weeklyWinners
    });
  }

  componentDidMount() {
    this.getBonusPenalty(this.state.teamNames);
    this.getPlayerData(this.props.players);
  }

  componentDidUpdate() {}

  // Find number of wins
  getPlayerData(players) {
    players.forEach(player => {
      let gw = this.state.gameweeksComplete - 1;
      let winsTotal = 0;
      let amountTotal = 0;

      // Calculate weekly wins and weekly $
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

      // Get Total Score
      this.setState(prevState => ({
        totalPoints: {
          ...prevState.totalPoints,
          [player.handle]: player.history[gw].total_points
        }
      }));
    });
  }

  getBonusPenalty(teams) {
    teams.forEach(team => {
      let bonusPenalty = 0;
      let index = teams.indexOf(team);

      if (index === 0) {
        bonusPenalty = 960;
      } else if (index === 1) {
        bonusPenalty = 600;
      } else if (index === teams.length - 2) {
        bonusPenalty = -50;
      } else if (index === teams.length - 1) {
        bonusPenalty = -100;
      }
      this.setState(prevState => ({
        bonusPenalty: {
          ...prevState.bonusPenalty,
          [team]: bonusPenalty
        }
      }));
    });
  }

  // Format Weekly $ column
  weeklyFormat(amount) {
    if (amount !== 0) {
      return `$${amount.toFixed(2)}`;
    } else {
      return '--';
    }
  }

  // Format Weekly $ column
  totalFormat(amount) {
    if (amount >= 0) {
      return `$${amount.toFixed(2)}`;
    } else {
      return `$(${Math.abs(amount.toFixed(2))})`;
    }
  }

  render() {
    const {
      teamNames,
      numberOfWins,
      amountFromWins,
      totalPoints,
      bonusPenalty
    } = this.state;

    let teams;
    if (teamNames && bonusPenalty) {
      teams = teamNames.map((team, index) => (
        <tr key={index} className="text-center">
          <td>{team}</td>
          <td>{numberOfWins[team]}</td>
          <td>{this.weeklyFormat(amountFromWins[team])}</td>
          <td>{totalPoints[team]}</td>
          <td>{this.totalFormat(bonusPenalty[team])}</td>
          <td>{this.totalFormat(amountFromWins[team] - 250)}</td>
          <td>
            {this.totalFormat(amountFromWins[team] + bonusPenalty[team] - 250)}
          </td>
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
                      <th scope="col">Max Loss</th>
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
