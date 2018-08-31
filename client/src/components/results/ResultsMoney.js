import React, { Component } from 'react';

class ResultsMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusMoney: [960, 600, -50, -100],
      weeklyWinnings: 840 / 38,
      playerNames: [
        '@ChicagoSeagulls',
        'babybelend',
        'CHANGE NAME',
        'Goldberg\'s Dele',
        'Kim Jong Kün',
        'Mmmbappe ba duba dop',
        'Obama\'s Yang',
        'Sergio VARmos',
        'WINP \'17'
      ],
      weeklyWinners: [['babybelend'], ['Obama\'s Yang'], ['CHANGE NAME']]
    };

    this.numWins = this.numWins.bind(this);
    this.winnings = this.winnings.bind(this);
  }

  componentDidMount() {
    this.numWins(this.state.playerNames);
  }

  numWins(player) {
    let winsTotal = 0;

    this.state.weeklyWinners.forEach(week => {
      let numOfWinners = week.length;
      if (week.includes(player)) {
        winsTotal += 1 / numOfWinners;
      }
      console.log('winsTotal: ', player, winsTotal);
      return winsTotal;
    });
  }

  winnings(player) {
    let winningsTotal = 0;

    this.state.weeklyWinners.forEach(week => {
      let numOfWinners = week.length;
      if (week.includes(player)) {
        winningsTotal += this.state.weeklyWinnings / numOfWinners;
      }
      console.log('winningsTotal: ', player, winningsTotal.toFixed(2));
      return winningsTotal.toFixed(2);
    });
  }

  render() {
    const {
      playerNames,
      bonusMoney,
      weeklyWinnings,
      weeklyWinners
    } = this.state;

    let team;
    if (playerNames) {
      team = playerNames.map((name, index) => (
        <tr key={index}>
          <td>{name}</td>
          <td>{this.numWins(name)}</td>
          <td>{this.winnings(name)}</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
      ));
    }

    return (
      <div>
        <h1>Money Page</h1>

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
                  <tbody>{team}</tbody>
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
