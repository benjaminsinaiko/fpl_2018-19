import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import Header from '../common/Header';
import ResultsTable from './ResultsTable';
import ResultsWeekly from './ResultsWeekly';
import { getPlayers } from '../../actions/playersActions';

class Results extends Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const { players, loading } = this.props.players;

    let weeklyWinners;
    let playerItems;
    let loadSpinner;
    if (players === null || loading) {
      playerItems = null;
      loadSpinner = <Spinner />;
    } else {
      weeklyWinners = <ResultsWeekly players={players} />;
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <Header page="Weekly Results" />
              </div>
            </div>
          </div>
        </div>

        {weeklyWinners}

        <div className="container-fluid table-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="league-table">
                <table className="table table-responsive-lg table-striped table-bordered table-hover">
                  <caption>Gameweek Points - Transfer Costs</caption>
                  <thead className="text-center thead-dark">
                    <tr>
                      <th scope="col">Team</th>
                      {gameweeks}
                    </tr>
                  </thead>
                  <tbody>{playerItems}</tbody>
                </table>
              </div>
              {loadSpinner}
            </div>
          </div>
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
