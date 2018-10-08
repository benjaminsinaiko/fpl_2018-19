import * as actionTypes from '../actions/actionTypes';

const initialState = {
  events: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_STATUS_START:
    return {
      ...state,
      loading: true
    };
  case actionTypes.FETCH_STATUS_SUCCESS:
    return {
      ...state,
      loading: false,
      status: action.payload
    };
  case actionTypes.FETCH_STATUS_FAIL:
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
};

export default reducer;
