import React from 'react';

import Table from '../UI/Table/Table';

const winningsResultsData = props => {
  console.log('props', props.winners);
  // console.log('props', props.players);

  // Set Players
  // let teamNames = props.players.map(team => {
  //   return team.entry.name;
  // });

  const winnersCount = player => {
    let winsPerWeek = props.winners.map(week => {
      return week.lenght;

      if (week.name.includes(player)) {
      }
    });
  };

  console.log(winnersCount);

  // Set Columns
  const columns = [
    {
      dataField: 'team',
      text: 'Team',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'weekly_wins',
      text: 'Weekly Wins',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'weekly_winnings',
      text: 'Weekly $',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'total_score',
      text: 'Total Score',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'bonus_penalty',
      text: 'Bonus/Penalty',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'max_loss',
      text: 'Max Loss',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    },
    {
      dataField: 'total_pl',
      text: 'Total P/L',
      headerStyle: { color: 'white', backgroundColor: '#38003C' }
    }
  ];

  const winningsData = props.players.map((team, index) => {
    return {
      id: index,
      team: team.entry.name,
      weekly_wins: '-',
      weekly_winnings: '-',
      total_score: '-',
      bonus_penalty: '-',
      max_loss: '-',
      total_pl: '-'
    };
  });

  return <Table columns={columns} data={winningsData} />;
};

export default winningsResultsData;
