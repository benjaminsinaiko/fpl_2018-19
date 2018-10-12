import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fishLeague: null,
  globalLeagues: null,
  fishLoading: false,
  globalLoading: false,
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LEAGUE_START:
      return {
        ...state,
        fishLoading: true
      };
    case actionTypes.FETCH_LEAGUE_SUCCESS:
      return {
        ...state,
        fishLoading: false,
        fishLeague: action.payload
      };
    case actionTypes.FETCH_LEAGUE_FAIL:
      return {
        ...state,
        fishLoading: false,
        errors: state.errors.concat(action.error)
      };
    case actionTypes.FETCH_GLOBAL_START:
      return {
        ...state,
        globalLoading: true
      };
    case actionTypes.FETCH_GLOBAL_SUCCESS:
      return {
        ...state,
        globalLoading: false,
        globalLeagues: action.payload
      };
    case actionTypes.FETCH_GLOBAL_FAIL:
      return {
        ...state,
        globalLoading: false,
        errors: state.errors.concat(action.error)
      };
    default:
      return state;
  }
};

export default reducer;
