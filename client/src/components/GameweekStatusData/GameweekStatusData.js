import React from 'react';
import LineChart from '../UI/Charts/LineChart/LineChart';

const gameweekStatusData = props => {
  const chartLabels = props.events.map(gameweek => `GW ${gameweek.id}`);
  const avgScore = props.events.map(score => score.average_entry_score);
  const highScore = props.events.map(score => score.highest_score);

  const datasets = [
    {
      label: 'Average Score',
      data: avgScore,
      backgroundColor: '#eaff04',
      lineTension: 0
    },
    {
      label: 'High Score',
      data: highScore,
      backgroundColor: '#00FF87',
      lineTension: 0
    }
  ];

  const data = {
    labels: chartLabels,
    datasets: datasets
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0
          }
        }
      ]
    }
  };

  return <LineChart data={data} options={options} />;
};

export default gameweekStatusData;
