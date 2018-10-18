import React from 'react';

import BarChart from '../../UI/Charts/BarChart/BarChart';

const PlayerHistoryData = props => {
  // Set Labels
  const labels = props.player.season.map(season => season.season_name);

  // Set History Points
  let historyPoints = {};
  historyPoints.label = 'Total Points';
  historyPoints.type = 'bar';
  // historyPoints.yAxisID = 'y-axis-points';
  historyPoints.backgroundColor = '#E90052';
  historyPoints.data = props.player.season.map(season => season.total_points);

  // Set History Rank
  let historyRank = {};
  historyRank.label = 'Overall Rank';
  historyRank.type = 'line';
  // historyRank.yAxisID = 'y-axis-rank';
  historyRank.backgroundColor = '#04f5ff';
  historyRank.showLine = false;
  historyRank.pointStyle = 'triangle';
  historyRank.radius = 6;
  historyRank.data = props.player.season.map(season => season.rank);

  // Set Data
  const data = {
    labels: labels,
    datasets: [historyRank]
  };

  // Set Options
  const options = {
    responsive: true,
    title: { display: true, text: 'Player History', fontSize: '28' },
    tooltips: {
      mode: 'label',
      titleMarginBottom: 15,
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        }
      },
      elements: { line: { fill: false } },
      scales: {
        xAxes: [
          { display: true, stacked: false, gridLines: { display: false } }
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            stacked: false,
            scaleLabel: { display: true, labelString: 'Total Points' },
            position: 'left',
            // id: 'y-axis-points',
            gridLines: { display: true },
            ticks: { suggestedMax: 2400, min: 1100 },
            labels: { show: true }
          },
          {
            type: 'linear',
            display: true,
            stacked: false,
            scaleLabel: { display: true, labelString: 'Overall Rank' },
            position: 'right',
            id: 'y-axis-rank',
            gridLines: { display: true },
            ticks: { suggestedMax: 2400, suggestedMin: 0 },
            labels: { show: true }
          }
        ]
      }
    }
  };

  return <BarChart data={data} options={options} />;
};

export default PlayerHistoryData;
