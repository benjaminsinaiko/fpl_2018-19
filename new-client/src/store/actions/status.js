import axios from 'axios';

import * as actionTypes from './actionTypes';

// Set loading
export const fetchStatusStart = () => {
  return {
    type: actionTypes.FETCH_STATUS_START
  };
};

// Fetch status success
export const fetchStatusSuccess = eventsData => {
  return {
    type: actionTypes.FETCH_STATUS_SUCCESS,
    payload: eventsData
  };
};

// Fetch status fail
export const fetchStatusFail = error => {
  return {
    type: actionTypes.FETCH_STATUS_FAIL,
    error: error
  };
};

// Get gameweek status
export const fetchStatus = () => {
  return dispatch => {
    dispatch(fetchStatusStart());
    axios
      .get('https://fantasy.premierleague.com/drf/events/')
      .then(response => {
        dispatch(fetchStatusSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchStatusFail(error));
      });
  };
};
