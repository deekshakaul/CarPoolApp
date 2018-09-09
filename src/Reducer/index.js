import loginReducer from './loginReducer.js';
import offerRideReducer from './offerRideReducer.js';
import showRideReducer from './showRideReducer.js';
import bookRideReducer from './bookRideReducer.js';
import signupReducer from './signupReducer.js';
import myRideReducer from './myRideReducer.js';
import {combineReducers} from 'redux';

var indexReducer = combineReducers({
  login:loginReducer,
  offerRide:offerRideReducer,
  showRide:showRideReducer,
  bookRide: bookRideReducer,
  signup: signupReducer,
  myRide: myRideReducer
});

export default indexReducer;
