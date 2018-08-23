import React, { Component } from 'react';

class ResultsTableBody extends Component {
  render() {
    const { player } = this.props;

    let row;
    if (player.history > 0) {
      row = player.history.map(hist => <td>Hello</td>);
    }

    return (
      <tbody>
        <tr>{row}</tr>
      </tbody>
    );
  }
}

export default ResultsTableBody;
