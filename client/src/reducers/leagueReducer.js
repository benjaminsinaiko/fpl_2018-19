import { GET_LEAGUE_STANDINGS, LEAGUE_LOADING } from '../actions/types';

const initialState = {
  league: null,
  loading: null
};

export default function(state = initialState, action) {
  switch (action.type) {
  case LEAGUE_LOADING:
    return {
      ...state,
      loading: true
    };
  case GET_LEAGUE_STANDINGS:
    return {
      ...state,
      league: action.payload,
      loading: false
    };
  default:
    return state;
  }
}
