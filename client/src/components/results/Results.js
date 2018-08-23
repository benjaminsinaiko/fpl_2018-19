import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import Header from '../common/Header';
import ResultsTable from './ResultsTable';
import { getPlayers } from '../../actions/playersActions';

class Results extends Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const { players, loading } = this.props.players;

    let playerItems;
    if (players === null || loading) {
      playerItems = <Spinner />;
    } else {
      playerItems = <ResultsTable players={players} />;
    }
    console.log('playerItems', playerItems);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <Header />
              </div>
            </div>
          </div>
        </div>

        <table className="table table-responsive table-hover league-table">
          {playerItems}
          <caption>Weekly Results</caption>
        </table>
      </div>
    );
  }
}

Results.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  players: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  players: state.players
});

export default connect(
  mapStateToProps,
  { getPlayers }
)(Results);
