import loginReducer from './loginReducer.js';
import {combineReducers} from 'redux';

var indexReducer = combineReducers({
  login:loginReducer
});

export default indexReducer;
