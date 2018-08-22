import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import leagueReducer from './leagueReducer';

export default combineReducers({
  events: eventsReducer,
  league: leagueReducer
});
