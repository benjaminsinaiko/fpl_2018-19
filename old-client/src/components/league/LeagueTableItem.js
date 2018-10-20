import React, { Component } from 'react';

class LeagueTableItem extends Component {
  render() {
    const { result } = this.props;

    let moveArrow;
    if (result.movement === 'up') {
      moveArrow = <i className="fa fa-arrow-up" style={{ color: 'green' }} />;
    } else if (result.movement === 'down') {
      moveArrow = <i className="fa fa-arrow-down" style={{ color: 'red' }} />;
    } else {
      moveArrow = <i className="fa fa-arrows-h" style={{ color: 'gray' }} />;
    }

    return (
      <tr>
        <td>{moveArrow}</td>
        <td>{result.entry_name}</td>
        <td>{result.rank}</td>
        <td>{result.last_rank}</td>
        <td>{result.event_total}</td>
        <td>
          <b>{result.total}</b>
        </td>
        <td>{result.player_name}</td>
      </tr>
    );
  }
}

export default LeagueTableItem;