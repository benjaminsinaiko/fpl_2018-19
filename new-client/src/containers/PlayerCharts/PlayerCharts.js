import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PlayerCharts.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';

export class PlayerCharts extends Component {
  state = {
    selectedPlayer: null
  };

  componentDidMount() {
    this.checkForPlayersData();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.players !== this.props.players) {
      this.setSelectedPlayer(newProps.players[0]);
    }
  }

  checkForPlayersData = () => {
    if (!this.props.players) {
      this.props.onFetchPlayers();
    }
  };

  setSelectedPlayer = player => {
    this.setState({ selectedPlayer: player });
  };

  render() {
    if (this.state.selectedPlayer) {
      console.log('state', this.state.selectedPlayer);
    }

    return (
      <div className={`container-fluid ${styles.PldayerChartsPage}`}>
        <div className="container">
          <Header page="Player Charts" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlayers: () => dispatch(actions.fetchPlayersData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerCharts);
