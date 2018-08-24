import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsTableItem from './ResultsTableItem';

class ResultsTable extends Component {
  header(player) {
    return <th>{player.value}</th>;
  }

  render() {
    const { players } = this.props;

    return players
      .sort((a, b) => a.handle.localeCompare(b.handle))
      .map(player => <ResultsTableItem key={player._id} player={player} />);
  }
}

ResultsTable.propTypes = {
  players: PropTypes.array.isRequired
};

export default ResultsTable;
