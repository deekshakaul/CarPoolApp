import axios from 'axios';
import store from '../Store/index.js';

function offerRide(response){
  return {
    type:"OFFER_RIDE",
    response
  }
}

export function sendDetailsForOfferRide(rideDetails){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + "offer_ride",{
      ...rideDetails
      // credentials:"same-origin"
    }).
      then(json=>dispatch(offerRide(json)));
  }
}
