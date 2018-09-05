import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import leagueReducer from './leagueReducer';
import playersReducer from './playersReducer';
import chartsReducer from './chartsReducer';

export default combineReducers({
  events: eventsReducer,
  league: leagueReducer,
  players: playersReducer,
  charts: chartsReducer
});
