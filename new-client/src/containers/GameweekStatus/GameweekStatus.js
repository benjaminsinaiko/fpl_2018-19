import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './GameweekStatus.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class GameweekStatus extends Component {
  componentDidMount() {
    this.props.onFetchStatus();
  }

  render() {
    let status = <Spinner />;
    if (!this.props.loading) {
      status = <h1>Status Pending</h1>;
    }

    return (
      <div className={styles.GameweekStatus}>
        <div className="container">
          <Header page="Gameweek Status" />
          <div>Gameweek Status Page</div>
          {status}
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
