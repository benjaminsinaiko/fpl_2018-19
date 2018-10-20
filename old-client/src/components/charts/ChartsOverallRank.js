import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ChartsOverallRank extends Component {
  colorPicker() {
    let colors = [
      '#e57373',
      '#f06292',
      '#ba68c8',
      '#9575cd',
      '#7986cb',
      '#64b5f6',
      '#4fc2f7',
      '#4dd0e1',
      '#4db6ac',
      '#81c784',
      '#aed581',
      '#dce775',
      '#fff176',
      '#ffd54f',
      '#ffb74d',
      '#ff8a65'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  createDatasets(players) {
    let dataset = [];
    players.forEach(player => {
      let playerData = {};
      playerData.label = player.handle;
      playerData.data = player.history.map(week => week.overall_rank);
      playerData.fill = false;
      playerData.backgroundColor = this.colorPicker();
      playerData.borderColor = playerData.backgroundColor;
      dataset.push(playerData);
    });

    return dataset;
  }

  render() {
    const { players, gws } = this.props;
    // console.log(players);

    let overallChart;

    if (players !== null || gws !== null) {
      let gw = Array.from(Array(gws).keys()).map(num => `GW ${num + 1}`);

      let dataset = this.createDatasets(players);

      let data = {
        labels: gw,
        datasets: [...dataset]
      };

      let options = {
        responsive: true,
        title: { display: true, text: 'Overall Rank', fontSize: '24' },
        tooltips: {
          intersect: true,
          callbacks: {
            label: function(tooltipItem, data, index) {
              // let value = data.datasets[tooltipItem.datasetIndex].data[0];
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
        hover: { mode: 'dataset' },
        scales: {
          xAxes: [{ display: true, scaleLabel: { show: true } }],
          yAxes: [
            {
              type: 'linear',
              display: true,
              scaleLabel: { display: true, labelString: 'Overall FPL Rank' },
              position: 'left',
              gridLines: { display: false },
              ticks: {
                reverse: true,
                callback: function(value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return value
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                  } else {
                    return value;
                  }
                }
              },
              labels: { show: true }
            }
          ]
        }
      };

      overallChart = <Line data={data} options={options} />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">{overallChart}</div>
        </div>
      </div>
    );
  }
}

export default ChartsOverallRank;
