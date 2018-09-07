import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ChartsWeeklyRank extends Component {
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
      playerData.data = player.history.map(week => week[this.props.chart]);
      playerData.fill = false;
      playerData.backgroundColor = this.colorPicker();
      playerData.borderColor = playerData.backgroundColor;
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
          text: 'Weekly Rank',
          fontSize: '24',
          fontFamily: 'PremierSans-Regular'
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
