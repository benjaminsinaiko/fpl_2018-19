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
    let loadSpinner;
    if (players === null || loading) {
      playerItems = null;
      loadSpinner = <Spinner />;
    } else {
      playerItems = <ResultsTable players={players} />;
      loadSpinner = null;
    }

    let weeks = Array.from(Array(38).keys()).map(num => num + 1);
    let gameweeks = weeks.map((week, index) => (
      <th key={index} scope="col">
        GW {week}
      </th>
    ));

    return (
      <div className="results">
        <div className="dark-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <Header page="Weekly Results" />
                </div>
              </div>
            </div>
          </div>

          <table className="table table-responsive-lg table-striped table-bordered table-hover league-table">
            <caption>Weekly Results</caption>
            <thead className="black white-text text-center">
              <tr>
                <th scope="col">Team</th>
                {gameweeks}
              </tr>
            </thead>
            <tbody>{playerItems}</tbody>
          </table>
          {loadSpinner}
        </div>
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
