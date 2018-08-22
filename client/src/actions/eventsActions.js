import axios from 'axios';

import { GET_EVENTS, GET_EVENT, EVENTS_LOADING } from './types';

// Get All Events
export const getEvents = () => dispatch => {
  dispatch(setEventsLoading());
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/drf/events/'
    )
    .then(res => dispatch({ type: GET_EVENTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_EVENTS, payload: null }));
};

export const setEventsLoading = () => {
  return {
    type: EVENTS_LOADING
  };
};
