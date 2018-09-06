import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Spinner from '../common/Spinner';
import { getPlayers } from '../../actions/playersActions';
import ChartsOverallRank from './ChartsOverallRank';
import ChartsWeeklyRank from './ChartsWeeklyRank';

class Charts extends Component {
  componentWillMount() {
    this.props.getPlayers();
  }

  render() {
    const { players, loading, gws } = this.props.players;

    let overallRankChart;
    let weeklyRankChart;

    if (players === null || gws === null || loading) {
      overallRankChart = <Spinner />;
    } else {
      overallRankChart = <ChartsOverallRank players={players} gws={gws} />;
      weeklyRankChart = (
        <ChartsWeeklyRank players={players} gws={gws} chart={'overall_rank'} />
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
  getPlayers: PropTypes.func.isRequired,
  players: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  players: state.players
});

export default connect(
  mapStateToProps,
  { getPlayers }
)(Charts);
