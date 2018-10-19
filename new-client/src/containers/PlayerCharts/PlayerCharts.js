import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PlayerCharts.module.css';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import PlayerSelector from '../../components/PlayerChartsData/PlayerSelector/PlayerSelector';
import PlayerBenchData from '../../components/PlayerChartsData/PlayerBenchData/PlayerBenchData';
import PlayerHistoryData from '../../components/PlayerChartsData/PlayerHistoryData/PlayerHistoryData';

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
    let playerSelector = <Spinner />;
    let playerBench = null;
    let playerHistory = null;

    if (this.state.selectedPlayer) {
      playerBench = <PlayerBenchData player={this.state.selectedPlayer} />;

      playerSelector = (
        <PlayerSelector
          players={this.props.players}
          selectedId={this.state.selectedPlayer.entry.id}
          selectPlayer={player => this.selectPlayerHandler(player)}
        />
      );

      playerHistory = <PlayerHistoryData player={this.state.selectedPlayer} />;
    }

    return (
      <div className={`container-fluid ${styles.PldayerChartsPage}`}>
        <div className="container">
          <Header page="Player Charts" />
        </div>
        <div className={`card sticky-top ${styles.PlayerSelector}`}>
          {playerSelector}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.PlayerChartsChart}>{playerBench}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={styles.PlayerChartsChart}>{playerHistory}</div>
            </div>
          </div>
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
