import axios from 'axios';

import * as actionTypes from './actionTypes';

// League
// Set League Loading
export const fetchLeagueStart = () => {
  return {
    type: actionTypes.FETCH_LEAGUE_START
  };
};

// Fetch League Success
export const fetchLeagueSuccess = leagueData => {
  return {
    type: actionTypes.FETCH_LEAGUE_SUCCESS,
    payload: leagueData.standings.results
  };
};

// Fetch League Fail
export const fetchLeagueFail = error => {
  return {
    type: actionTypes.FETCH_LEAGUE_FAIL,
    error: error
  };
};

// Fetch League Data
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

// Global
// Set Global Loading
export const fetchGlobalStart = () => {
  return {
    type: actionTypes.FETCH_GLOBAL_START
  };
};

// Fetch Global Success
export const fetchGlobalSuccess = globalData => {
  return {
    type: actionTypes.FETCH_GLOBAL_SUCCESS,
    payload: globalData
  };
};

// Fetch Global Fail
export const fetchGlobalFail = error => {
  return {
    type: actionTypes.FETCH_GLOBAL_FAIL,
    error: error
  };
};

// Fetch Global Data
export const fetchGlobal = () => {
  return dispatch => {
    dispatch(fetchGlobalStart());
    axios
      .get('/api/leagues/global')
      .then(response => {
        dispatch(fetchGlobalSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchGlobalFail(error));
      });
  };
};
