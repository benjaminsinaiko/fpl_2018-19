import React from 'react';

import Table from '../UI/Table/Table';

const winningsResultsData = props => {
  // weekly_wins
  const weeklyWins = props.players.map(player => {
    let fullName = `${player.entry.player_first_name} ${
      player.entry.player_last_name
    }`;
    let wins = 0;
    props.winners.map(week => {
      let numOfWinners = week.length;
      if (week[0].name.includes(fullName)) {
        wins += 1 / numOfWinners;
      }
    });
    return wins;
  });

  // weekly_winnings
  const weeklyWinnings = weeklyWins.map(wins => {
    return wins * (840 / 38);
  });

  // bonus_penalty
  const bonusPenalty = [...Array(9).keys()].map(index => {
    let bonusPenalty = 0;
    if (index === 0) {
      bonusPenalty = 900;
    } else if (index === 1) {
      bonusPenalty = 562.5;
    } else if (index === 2) {
      bonusPenalty = 150;
    } else if (index === 7) {
      bonusPenalty = -50;
    } else if (index === 8) {
      bonusPenalty = -100;
    }
    return bonusPenalty;
  });

  // Money format
  const moneyFormat = number => {
    if (number === 0) {
      return '-';
    } else if (number > 0) {
      return `$${number.toFixed(2)}`;
    } else {
      return `($${Math.abs(number.toFixed(2))})`;
    }
  };

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
      team: `${team.entry.player_first_name} ${team.entry.player_last_name}`,
      weekly_wins: weeklyWins[index],
      weekly_winnings: moneyFormat(weeklyWinnings[index]),
      total_score: team.history[team.history.length - 1].total_points,
      bonus_penalty: moneyFormat(bonusPenalty[index]),
      max_loss: moneyFormat(-250 + weeklyWinnings[index]),
      total_pl: moneyFormat(-250 + weeklyWinnings[index] + bonusPenalty[index])
    };
  });

  return <Table columns={columns} data={winningsData} />;
};

export default winningsResultsData;
