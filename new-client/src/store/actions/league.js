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

// Fetch overall success
export const fetchOverallSuccess = leagueData => {
  return {
    type: actionTypes.FETCH_OVERALL_SUCCESS,
    payload: leagueData.standings.results
  };
};

// Fetch league success
export const fetchUSASuccess = leagueData => {
  return {
    type: actionTypes.FETCH_USA_SUCCESS,
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
export const fetchLeague = leagueId => {
  return dispatch => {
    dispatch(fetchLeagueStart());
    axios
      .get(`/api/leagues/${leagueId}`)
      .then(response => {
        dispatch(fetchLeagueSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchLeagueFail(error));
      });
  };
};

// Get Overall data
export const fetchOverall = () => {
  return dispatch => {
    dispatch(fetchLeagueStart());
    axios
      .get('/api/leagues/313')
      .then(response => {
        dispatch(fetchOverallSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchLeagueFail(error));
      });
  };
};

// Get USA data
export const fetchUSA = () => {
  return dispatch => {
    dispatch(fetchLeagueStart());
    axios
      .get('/api/leagues/249')
      .then(response => {
        dispatch(fetchUSASuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchLeagueFail(error));
      });
  };
};
