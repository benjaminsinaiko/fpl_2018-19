import axios from 'axios';

import { GET_LEAGUE_STANDINGS, LEAGUE_LOADING } from './types';

// Get League Standings
export const getLeagueStandings = () => dispatch => {
  dispatch(setLeagueLoading());
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/drf/leagues-classic-standings/765405'
    )
    .then(res => dispatch({ type: GET_LEAGUE_STANDINGS, payload: res.data }))
    .catch(err => dispatch({ type: GET_LEAGUE_STANDINGS, payload: null }));
};

export const setLeagueLoading = () => {
  return {
    type: LEAGUE_LOADING
  };
};
