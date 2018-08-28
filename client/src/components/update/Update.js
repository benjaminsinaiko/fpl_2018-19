import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Spinner from '../common/Spinner';
import Header from '../common/Header';
import { getPlayers } from '../../actions/playersActions';

import axios from 'axios';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayer: null,
      playersUpdated: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getPlayers();
  }

  onSubmit(e) {
    e.preventDefault();

    let playerId = this.state.selectedPlayer;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/drf/entry/${playerId}/history`
      )
      .then(res => {
        res.data.history.map(gw => {
          axios
            .post(`api/players/history/${playerId}`, gw)
            .then(res => {
              console.log(`${res.data.handle} updated`);
            })
            .catch(err => console.log(err));
        });
      })

      .catch(err => console.log(err));
  }

  render() {
    const { players, loading } = this.props.players;

    let playerCards;
    if (players === null || loading) {
      playerCards = <Spinner />;
    } else {
      playerCards = players.map(player => (
        <div key={player.id} className="card border-success">
          <div className="card-body">
            <h5 className="card-title">{player.handle}</h5>
            <p className="card-text">
              {player.player_first_name} {player.player_last_name}
            </p>
            <form onSubmit={this.onSubmit}>
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={() => {
                  this.setState({
                    selectedPlayer: player.id
                  });
                  this.state.playersUpdated.push(player.id);
                }}
              >
                Update
              </button>
            </form>
            <br />
            <small style={{ color: '#28a745' }}>
              {this.state.playersUpdated.includes(player.id) ? (
                <time>Player Updated</time>
              ) : (
                <Moment fromNow>{player.updatedAt}</Moment>
              )}
            </small>
          </div>
        </div>
      ));
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <Header />
                <div className="card-columns">{playerCards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Update.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  players: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  players: state.players
});

export default connect(
  mapStateToProps,
  { getPlayers }
)(Update);
