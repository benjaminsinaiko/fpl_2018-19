import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import classnames from 'classnames';

class ChartsWeeklyBench extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handles: [],
      gameweeks: '',
      datasets: [],
      currentHandle: '',
      currentDataSet: []
    };
  }

  componentDidMount() {
    let handles = this.props.players.map(player => player.handle);

    let gw = Array.from(Array(this.props.gws).keys()).map(
      num => `GW ${num + 1}`
    );
    this.setState({
      handles: handles,
      gameweeks: gw,
      datasets: this.createDataSet(this.props.players),
      currentHandle: handles[0],
      currentDataSet: this.createDataSet(this.props.players)[0]
    });
  }

  createDataSet(players) {
    let dataset = [];
    players.forEach(player => {
      let playerBar = {};
      let playerLine = {};

      playerBar.label = 'GW Points';
      playerBar.type = 'bar';
      playerBar.backgroundColor = '#b3e5fc';
      playerBar.data = player.history.map(
        week => week.points - week.event_transfers_cost
      );

      playerLine.label = 'Points On Bench';
      playerLine.type = 'bar';
      playerLine.borderColor = '#ef9a9a';
      playerLine.backgroundColor = '#ef9a9a';
      playerLine.data = player.history.map(week => week.points_on_bench);

      dataset.push([playerLine, playerBar]);
    });
    return dataset;
  }

  playerClick(handle, index) {
    this.setState({
      currentHandle: handle,
      currentDataSet: this.state.datasets[index]
    });
  }

  render() {
    // console.log('state', this.state);

    let data = {
      labels: this.state.gameweeks,
      datasets: [...this.state.currentDataSet]
    };

    const options = {
      responsive: true,
      title: {
        display: true,
        text: 'Played v. Bench Points',
        fontSize: '28'
      },
      tooltips: {
        mode: 'label',
        titleMarginBottom: 15,
        callbacks: {
          title: function(tooltipItem, data) {
            return data['labels'][tooltipItem[0]['index']];
          },
          footer: function([tooltipItem], data) {
            var dataset1 = data['datasets'][0];
            var dataset2 = data['datasets'][1];
            var percent = Math.round(
              (dataset1['data'][tooltipItem['index']] /
                dataset2['data'][tooltipItem['index']]) *
                100
            );
            // return '(' + percent + '%)';
            return `Percent of Total (${percent}%)`;
          }
        }
      },
      elements: { line: { fill: false } },
      scales: {
        xAxes: [
          { display: true, stacked: true, gridLines: { display: false } }
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Gameweek Points'
            },
            position: 'left',

            gridLines: { display: false },
            ticks: { suggestedMax: 100, min: 0 },
            labels: { show: true }
          }
        ]
      }
    };

    let weeklyBar = <Bar data={data} options={options} />;

    let playerPicker = this.state.handles.map((handle, index) => (
      <button
        key={index}
        className={classnames('btn', {
          'btn-outline-secondary': this.state.currentHandle !== handle,
          'btn-secondary': this.state.currentHandle === handle
        })}
        type="button"
        onClick={() => this.playerClick(handle, index)}
      >
        {handle}
      </button>
    ));

    return (
      <div className="col-md-12 mb-4">
        {weeklyBar}
        {playerPicker}
      </div>
    );
  }
}

export default ChartsWeeklyBench;
