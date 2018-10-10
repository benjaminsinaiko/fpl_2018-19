import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './GameweekStatus.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import StatusCard from '../../components/StatusCard/StatusCard';
import GameweekStatusData from '../../components/GameweekStatusData/GameweekStatusData';

class GameweekStatus extends Component {
  componentDidMount() {
    this.props.onFetchStatus();
  }

  render() {
    // Gameweek Status
    let cardData = <Spinner />;
    let chartData = null;

    if (this.props.status) {
      // Filter for Previous, Current, Next gameweeks
      const currentStatusEvents = this.props.status.filter(event => {
        return (
          event.is_previous === true ||
          event.is_current === true ||
          event.is_next === true
        );
      });
      cardData = currentStatusEvents.map(event => {
        return <StatusCard key={event.id} event={event} />;
      });

      // Gameweek scores chart
      const finishedEvents = this.props.status.filter(event => {
        return event.data_checked;
      });
      // console.log(finishedEvents);
      chartData = <GameweekStatusData events={finishedEvents} />;
    }

    return (
      <div className={styles.GameweekStatus}>
        <div className="container">
          <Header page="Gameweek Status" />
          <div className="row">
            <div className="col-md-12">
              <div className="card-deck">{cardData}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={styles.GameweekStatusChart}>{chartData}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status.events,
    loading: state.status.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchStatus: () => dispatch(actions.fetchStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameweekStatus);
