import { GET_PLAYERS_GWS, PLAYERS_GWS_LOADING } from '../actions/types';

const initialState = {
  playersGWS: null,
  gws: null,
  loading: null
};

export default function(state = initialState, action) {
  switch (action.type) {
  case PLAYERS_GWS_LOADING:
    return {
      ...state,
      loading: true
    };
  case GET_PLAYERS_GWS:
    return {
      ...state,
      playersGWS: action.payload,
      gws: action.payload[0].history.length,
      loading: false
    };
  default:
    return state;
  }
}
