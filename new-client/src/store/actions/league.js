import axios from 'axios';

import * as actionTypes from './actionTypes';

// Set loading
export const fetchLeagueStart = () => {
  return {
    type: actionTypes.FETCH_LEAGUE_START
  };
};

// Fetch league success
export const fetchLeagueSuccess = leagueData => {
  return {
    type: actionTypes.FETCH_LEAGUE_SUCCESS,
    payload: leagueData.standings.results
  };
};

// Fetch league fail
export const fetchLeagueFail = error => {
  return {
    type: actionTypes.FETCH_LEAGUE_FAIL,
    error: error
  };
};

// Get league data
export const fetchLeague = () => {
  return dispatch => {
    dispatch(fetchLeagueStart());
    axios
      .get('/api/leagues')
      .then(response => {
        dispatch(fetchLeagueSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchLeagueFail(error));
      });
  };
};
