import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PlayerCharts.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import PlayerBenchData from '../../components/PlayerData/PlayerBenchData/PlayerBenchData';
import PlayerSelector from '../../components/PlayerSelector/PlayerSelector';

export class PlayerCharts extends Component {
  state = {
    selectedPlayer: null
  };

  componentDidMount() {
    this.checkForPlayersData();

    if (this.props.players) {
      this.defaultSelectedPlayer(this.props.players[0]);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.players) {
      this.defaultSelectedPlayer(newProps.players[0]);
    }
  }

  checkForPlayersData = () => {
    if (!this.props.players) {
      this.props.onFetchPlayers();
    }
  };

  defaultSelectedPlayer = player => {
    this.setState({ selectedPlayer: player });
  };

  selectPlayerHandler = player => {
    this.setState({ selectedPlayer: player });
  };

  render() {
    let playerBench = null;
    let playerSelector = null;

    if (this.state.selectedPlayer) {
      playerBench = <PlayerBenchData player={this.state.selectedPlayer} />;

      playerSelector = (
        <PlayerSelector
          players={this.props.players}
          selectedId={this.state.selectedPlayer.entry.id}
          selectPlayer={player => this.selectPlayerHandler(player)}
        />
      );
    }

    return (
      <div className={`container-fluid ${styles.PldayerChartsPage}`}>
        <div className="container">
          <Header page="Player Charts" />
        </div>
        {playerSelector}
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
