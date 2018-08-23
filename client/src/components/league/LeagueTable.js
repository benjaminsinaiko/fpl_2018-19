import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeagueTableItem from './LeagueTableItem';

class LeagueTable extends Component {
  render() {
    const { leagueResults } = this.props;

    return leagueResults.map(result => (
      <LeagueTableItem key={result.id} result={result} />
    ));
  }
}

LeagueTable.propTypes = {
  leagueResults: PropTypes.array.isRequired
};

export default LeagueTable;
