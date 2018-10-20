import { GET_PLAYERS, PLAYERS_LOADING } from '../actions/types';

const initialState = {
  players: null,
  loading: null
};

export default function(state = initialState, action) {
  switch (action.type) {
  case PLAYERS_LOADING:
    return {
      ...state,
      loading: true
    };
  case GET_PLAYERS:
    return {
      ...state,
      players: action.payload,
      gws: action.payload[0].history.length,
      loading: false
    };
  default:
    return state;
  }
}
