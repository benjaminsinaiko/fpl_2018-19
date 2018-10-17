import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PlayerCharts.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import PlayerBenchData from '../../components/PlayerData/PlayerBenchData/PlayerBenchData';

export class PlayerCharts extends Component {
  state = {
    selectedPlayer: null
  };

  componentDidMount() {
    this.checkForPlayersData();

    if (this.props.players) {
      this.setSelectedPlayer(this.props.players[0]);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.players) {
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
    let playerBench = null;
    if (this.state.selectedPlayer) {
      playerBench = <PlayerBenchData player={this.state.selectedPlayer} />;
    }

    return (
      <div className={`container-fluid ${styles.PldayerChartsPage}`}>
        <div className="container">
          <Header page="Player Charts" />
        </div>
        {playerBench}
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
