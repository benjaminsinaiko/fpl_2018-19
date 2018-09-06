import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Spinner from '../common/Spinner';
import { getPlayersGWS } from '../../actions/chartsActions';
import ChartsOverallRank from './ChartsOverallRank';
import ChartsWeeklyRank from './ChartsWeeklyRank';

class Charts extends Component {
  componentWillMount() {
    this.props.getPlayersGWS();
  }

  render() {
    const { playersGWS, loading, gws } = this.props.charts;

    let overallRankChart;
    let weeklyRankChart;

    if (playersGWS === null || gws === null || loading) {
      overallRankChart = <Spinner />;
    } else {
      overallRankChart = <ChartsOverallRank players={playersGWS} gws={gws} />;
      weeklyRankChart = (
        <ChartsWeeklyRank
          players={playersGWS}
          gws={gws}
          chart={'overall_rank'}
        />
      );
    }

    return (
      <div className="charts">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <Header page="Charts" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4">{weeklyRankChart}</div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4">{overallRankChart}</div>
            </div>
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
