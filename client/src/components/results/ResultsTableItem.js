import React, { Component } from 'react';

class ResultsTableItem extends Component {
  render() {
    const { player } = this.props;
    console.log('player', player);

    return (
      <thead>
        <tr>
          <th scope="col">{player.handle}</th>
        </tr>
      </thead>
    );
  }
}

export default ResultsTableItem;
