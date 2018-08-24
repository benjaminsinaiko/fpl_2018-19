import React, { Component } from 'react';

class ResultsTableItem extends Component {
  render() {
    const { player } = this.props;

    let score;
    if (player.history.length > 0) {
      score = player.history.map((week, index) => (
        <th key={index} scope="col">
          {week.points}
        </th>
      ));
    }

    return (
      <tr>
        <th scope="row">{player.handle}</th>
        {score}
      </tr>
    );
  }
}

export default ResultsTableItem;
