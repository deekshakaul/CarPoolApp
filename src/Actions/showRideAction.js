import axios from 'axios';
import store from '../Store/index.js';

function sendRides(response){
  return {
    type:"SHOW_RIDE",
    response
  }
}

export function fetchRides(show){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.get(baseLink + 'show_ride?show='+show).
      then(json=>dispatch(sendRides(json)));
  }
}
