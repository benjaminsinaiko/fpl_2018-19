import React from 'react';

import BarChart from '../../UI/Charts/BarChart/BarChart';

const PlayerHistoryData = props => {
  // Set Labels
  const labels = props.player.season.map(season => season.season_name);

  // Set History Points
  const historyPoints = {
    label: 'Total Points',
    type: 'bar',
    backgroundColor: '#e90052',
    borderColor: '#e90052',
    data: props.player.season.map(season => season.total_points),
    yAxisID: 'y-axis-1'
  };

  // Set History Rank
  const historyRank = {
    label: 'Overall Rank',
    type: 'line',
    showLine: false,
    pointStyle: 'line',
    borderWidth: 4,
    radius: 10,
    backgroundColor: '#46004b',
    borderColor: '#46004b',
    data: props.player.season.map(season => season.rank),
    yAxisID: 'y-axis-2'
  };

  // Set Data
  const data = {
    labels: labels,
    datasets: [historyRank, historyPoints],
    type: 'bar'
  };

  // Set Options
  const options = {
    responsive: true,
    title: { display: true, text: 'Player League History', fontSize: '24' },
    tooltips: {
      mode: 'label',
      titleMargin: 15,
      callbacks: {
        label: function(tooltipItem, data, index) {
          let value =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          if (parseInt(value) >= 1000) {
            return `${
              data.datasets[tooltipItem.datasetIndex].label
            }: ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          } else {
            return value;
          }
        }
      }
    },
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Total Points'
          },
          position: 'left',
          id: 'y-axis-1',
          ticks: {
            suggestedMax: 2300,
            suggestedMin: 1100,
            callback: function(value, index, values) {
              if (parseInt(value) >= 1000) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              } else {
                return value;
              }
            }
          }
        },
        {
          type: 'linear',
          display: true,
          gridLines: { display: false },
          scaleLabel: {
            display: true,
            labelString: 'Overall Rank'
          },
          position: 'right',
          id: 'y-axis-2',
          ticks: {
            reverse: true,
            suggestedMax: 2300000,
            suggestedMin: 0,

            callback: function(value, index, values) {
              if (parseInt(value) >= 1000) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              } else {
                return value;
              }
            }
          }
        }
      ]
    }
  };

  return <BarChart data={data} options={options} />;
};

export default PlayerHistoryData;
