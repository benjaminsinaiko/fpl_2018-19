import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ChartsOverallRank extends Component {
  dynamicColors() {
    let r = Math.floor(Math.random() * 155) + 100;
    let g = Math.floor(Math.random() * 155) + 100;
    let b = Math.floor(Math.random() * 155) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  }

  createDatasets(players) {
    let dataset = [];
    players.forEach(player => {
      let playerData = {};
      playerData.label = player.handle;
      playerData.data = player.history.map(week => week.overall_rank);
      playerData.fill = false;
      playerData.borderColor = this.dynamicColors();
      dataset.push(playerData);
    });
    // console.log('dataset', dataset);
    return dataset;
  }

  render() {
    const { players, gws } = this.props;
    // console.log(players);

    let overallChart;

    if (players !== null || gws !== null) {
      let gw = Array.from(Array(gws).keys()).map(num => `GW ${num + 1}`);

      let dataset = this.createDatasets(players);
      console.log('dataset', dataset[0]);

      let data = {
        labels: gw,
        datasets: [...dataset]
      };

      console.log('data', data);
      let options = {
        responsive: true,
        title: {
          display: true,
          text: 'Overall Rank'
        },
        tooltips: {
          mode: 'label'
        },
        hover: {
          mode: 'dataset'
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                show: true
              }
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
