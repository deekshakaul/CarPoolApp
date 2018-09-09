import axios from 'axios';
import store from '../Store/index.js';

function bookRide(response){
  console.log("response from book ride action", response)
  return {
    type:"BOOK_RIDE",
    response
  }
}

export function sendDetailsForBookRide(rideDetails){
  console.log(rideDetails,".............ACTION")
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + "book_ride",{
      ...rideDetails
      // credentials:"same-origin"
    }).
      then(json=>dispatch(bookRide(json)));
  }
}
