import React from 'react';
import Table from '../UI/Table/Table';

const leagueResultsGameweekData = props => {
  // Set Columns
  const names = props.gameweekScores['1'].map(player => {
    return {
      dataField: `${player.name}`,
      text: `${player.name}`,
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    };
  });
  const columns = [
    {
      dataField: 'gameweek',
      text: 'GW',
      headerStyle: { color: 'black', backgroundColor: '#00ff87' }
    },
    ...names
  ];

  // Set Data
  let gameweekScores = [];
  for (let player in props.gameweekScores) {
    let scores = props.gameweekScores[player].map(player => {
      return {
        id: player.name,
        [player.name]: player.score
      };
    });
    let gameweek = Object.assign({ gameweek: `${player}` }, ...scores);

    gameweekScores.push(gameweek);
  }

  return <Table columns={columns} data={gameweekScores.reverse()} />;
};

export default leagueResultsGameweekData;
