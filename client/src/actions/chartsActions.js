import axios from 'axios';

import { GET_PLAYERS_GWS, PLAYERS_GWS_LOADING } from './types';

export const getPlayersGWS = () => dispatch => {
  dispatch(setPlayersGWSLoading());
  axios
    .get('/api/players/gameweeks')
    .then(res => dispatch({ type: GET_PLAYERS_GWS, payload: res.data }))
    .catch(err => dispatch({ type: GET_PLAYERS_GWS, payload: err.data }));
};

export const setPlayersGWSLoading = () => {
  return {
    type: PLAYERS_GWS_LOADING
  };
};
