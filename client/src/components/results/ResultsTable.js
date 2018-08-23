import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsTableItem from './ResultsTableItem';
import ResultsTableBody from './ResultsTableBody';

class ResultsTable extends Component {
  header(player) {
    return <th>{player.value}</th>;
  }

  render() {
    const { players } = this.props;

    return players.map(player => (
      <React.Fragment>
        <ResultsTableItem key={player._id} player={player} />
        <ResultsTableBody key={player._id} player={player} />
      </React.Fragment>
    ));

    // return (
    //   <table class="table table-hover">
    //     <thead>
    //       <tr>
    //         <th scope="col">GW</th>
    //         {players.map(player => (
    //           <header key={player.id} value={player.handle} />
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="row">1</th>
    //         <td>Mark</td>
    //         <td>Otto</td>
    //         <td>@mdo</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Jacob</td>
    //         <td>Thornton</td>
    //         <td>@fat</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">3</th>
    //         <td colspan="2">Larry the Bird</td>
    //         <td>@twitter</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // );
  }
}

ResultsTable.propTypes = {
  players: PropTypes.array.isRequired
};

export default ResultsTable;
