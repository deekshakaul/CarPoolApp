import axios from 'axios';

function offerRide(response){
  return {
    type:"OFFER_RIDE",
    response
  }
}

export function sendDetailsForOfferRide(rideDetails){
  return (dispatch)=>{
    axios.post("http://192.168.43.78:3000/offer_ride",{
      ...rideDetails
      // credentials:"same-origin"
    }).
      then(json=>dispatch(offerRide(json)));
  }
}
