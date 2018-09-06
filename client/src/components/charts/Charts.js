import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getPlayersGWS } from '../../actions/chartsActions';
import { Line } from 'react-chartjs-2';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gws: 4,
      labels: [],
      datasets: []
    };

    this.getPlayerData = this.getPlayerData.bind(this);
  }

  componentWillMount() {
    this.props.getPlayersGWS();
  }

  componentDidMount() {}

  setGameweeks() {
    this.setState({ gws: this.props.charts.gws });
  }

  getPlayerData(player) {
    // console.log(player);

    let data = {};
    data.label = player.handle;
    data.data = player.history.map(week => week.overall_rank);

    // console.log('Playerdata', data);
    return data;
  }

  render() {
    const { playersGWS, loading, gws } = this.props.charts;
    let chartItems;

    if (playersGWS === null || loading) {
      chartItems = <Spinner />;
    } else {
      let playerData = this.getPlayerData(playersGWS[2]);
      // console.log(playerData);
      let gw = Array.from(Array(this.state.gws).keys()).map(num => num + 1);
      let data = {
        labels: gw,
        datasets: [
          {
            ...playerData
          }
        ]
      };
      console.log(data);

      let options = {
        title: {
          display: true,
          text: 'Overall Rank'
        }
      };

      chartItems = <Line data={data} options={options} />;
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">{chartItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

Charts.propTypes = {
  getPlayersGWS: PropTypes.func.isRequired,
  charts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  charts: state.charts
});

export default connect(
  mapStateToProps,
  { getPlayersGWS }
)(Charts);
