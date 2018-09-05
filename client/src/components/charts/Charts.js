import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getPlayersGWS } from '../../actions/chartsActions';
import { Line } from 'react-chartjs-2';

class Charts extends Component {
  componentDidMount() {
    this.props.getPlayersGWS();
  }

  render() {
    const { playersGWS, loading } = this.props;

    let chartItems;
    if (playersGWS === null || loading) {
      chartItems = <Spinner />;
    } else {
      chartItems = <h3>Chart data available</h3>;
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
  playersGWS: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  playersGWS: state.charts
});

export default connect(
  mapStateToProps,
  { getPlayersGWS }
)(Charts);
