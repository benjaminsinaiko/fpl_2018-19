import * as actionTypes from '../actions/actionTypes';

const initialState = {
  players: null,
  loading: false,
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_PLAYERS_DATA_START:
    return {
      ...state,
      loading: true
    };
  case actionTypes.FETCH_PLAYERS_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      players: action.payload
    };
  case actionTypes.FETCH_PLAYERS_DATA_FAIL:
    return {
      ...state,
      loading: false,
      errors: state.errors.concat(action.error)
    };
  default:
    return state;
  }
};

export default reducer;
