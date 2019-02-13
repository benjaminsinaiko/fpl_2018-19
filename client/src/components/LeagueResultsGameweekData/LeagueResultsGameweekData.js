import React from 'react';
import Table from '../UI/Table/Table';

const leagueResultsGameweekData = props => {
  // Get name initials
  const getInitials = fullName => {
    const names = fullName.split(' ');
    const initials =
      names[0].substring(0, 1).toUpperCase() +
      names[1].substring(0, 1).toUpperCase();
    return initials;
  };

  // Set Columns
  const names = props.gameweekScores['1'].map(player => {
    return {
      dataField: `${player.name}`,
      text: `${player.team} [${getInitials(player.name)}]`,
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
  for (let playerName in props.gameweekScores) {
    let scores = props.gameweekScores[playerName].map((player, index) => {
      return {
        id: playerName,
        [player.name]: player.score
      };
    });
    let gameweek = Object.assign({ gameweek: `${playerName}` }, ...scores);

    gameweekScores.push(gameweek);
  }

  return <Table columns={columns} data={gameweekScores.reverse()} />;
};

export default leagueResultsGameweekData;
