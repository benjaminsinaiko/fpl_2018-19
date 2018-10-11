import * as actionTypes from '../actions/actionTypes';

const initialState = {
  standings: null,
  overall: null,
  usa: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_LEAGUE_START:
    return {
      ...state,
      loading: true
    };
  case actionTypes.FETCH_LEAGUE_SUCCESS:
    return {
      ...state,
      loading: false,
      standings: action.payload
    };
  case actionTypes.FETCH_OVERALL_SUCCESS:
    return {
      ...state,
      overall: action.payload[0]
    };
  case actionTypes.FETCH_USA_SUCCESS:
    return {
      ...state,
      usa: action.payload[0]
    };
  case actionTypes.FETCH_LEAGUE_FAIL:
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
};

export default reducer;
