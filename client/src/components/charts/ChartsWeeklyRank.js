import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ChartsWeeklyRank extends Component {
  dynamicColors() {
    let r = 0;
    let g = Math.floor(Math.random() * 256);
    let b = 0;
    return `rgb(${r}, ${g}, ${b})`;
  }

  createDatasets(players) {
    let dataset = [];
    players.forEach(player => {
      let playerData = {};
      playerData.label = player.handle;
      playerData.data = player.history.map(week => week[this.props.chart]);
      playerData.fill = false;
      playerData.borderColor = this.dynamicColors();
      dataset.push(playerData);
    });
    return dataset;
  }

  render() {
    const { players, gws } = this.props;

    let weeklyChart;

    if (players !== null || gws !== null) {
      let gw = Array.from(Array(gws).keys()).map(num => `GW ${num + 1}`);

      let dataset = this.createDatasets(players);

      let data = {
        labels: gw,
        datasets: [...dataset]
      };

      let options = {
        responsive: true,
        title: {
          display: true,
          text: 'Weekly Rank'
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

      weeklyChart = <Line data={data} options={options} />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">{weeklyChart}</div>
        </div>
      </div>
    );
  }
}

export default ChartsWeeklyRank;
