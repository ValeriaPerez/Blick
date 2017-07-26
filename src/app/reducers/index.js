import {combineReducers} from 'redux';
import todos from './todos';
import json from './json';

const rootReducer = combineReducers({
  todos,
  json
});

export default rootReducer;
