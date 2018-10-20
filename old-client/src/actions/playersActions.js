import axios from 'axios';

import { GET_PLAYERS, PLAYERS_LOADING } from './types';

// Get All Players
export const getPlayers = () => dispatch => {
  dispatch(setPlayersLoading());
  axios
    .get('/api/players/all')
    .then(res => dispatch({ type: GET_PLAYERS, payload: res.data }))
    .catch(err => dispatch({ type: GET_PLAYERS, payload: err.data }));
};

export const setPlayersLoading = () => {
  return {
    type: PLAYERS_LOADING
  };
};
