import axios from 'axios';

import * as actionTypes from './actionTypes';

// Set Player Data Loading
export const fetchPlayersDataStart = () => {
  return {
    type: actionTypes.FETCH_PLAYERS_DATA_START
  };
};

// Fetch Players Data Success
export const fetchPlayersDataSuccess = playersData => {
  return {
    type: actionTypes.FETCH_PLAYERS_DATA_SUCCESS,
    payload: playersData
  };
};

// Fetch Players Data Fail
export const fetchPlayersDataFail = error => {
  return {
    type: actionTypes.FETCH_PLAYERS_DATA_FAIL,
    error: error
  };
};

// Fetch Players Data
export const fetchPlayersData = () => {
  return dispatch => {
    dispatch(fetchPlayersDataStart());
    axios
      .get('/api/players')
      .then(response => {
        dispatch(fetchPlayersDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPlayersDataFail(error));
      });
  };
};
