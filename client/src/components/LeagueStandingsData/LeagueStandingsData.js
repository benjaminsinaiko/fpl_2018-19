import React from 'react';
import Table from '../UI/Table/Table';

const leagueStandingsData = props => {
  // Set columns
  const columns = [
    {
      dataField: 'movement',
      text: '',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'entry_name',
      text: 'Team',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'rank',
      text: 'Rank',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'last_rank',
      text: 'Last',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'event_total',
      text: 'GW',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'total',
      text: 'Total',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'player_name',
      text: 'Player',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    }
  ];

  const leaguePlayersData = props.standings.map(player => {
    // set movement
    let movement;
    if (player.movement === 'up') {
      movement = <i className="fa fa-arrow-up" style={{ color: 'green' }} />;
    } else if (player.movement === 'down') {
      movement = <i className="fa fa-arrow-down" style={{ color: 'red' }} />;
    } else {
      movement = <i className="fa fa-arrows-h" style={{ color: 'gray' }} />;
    }

    return {
      id: player.id,
      movement: movement,
      entry_name: player.entry_name,
      rank: player.rank,
      last_rank: player.last_rank,
      event_total: player.event_total,
      total: player.total,
      player_name: player.player_name
    };
  });
  return <Table columns={columns} data={leaguePlayersData} keyId="id" />;
};

export default leagueStandingsData;
