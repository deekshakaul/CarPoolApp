import axios from 'axios';

function bookRide(response){
  console.log("response from book ride action", response)
  return {
    type:"BOOK_RIDE",
    response
  }
}

export function sendDetailsForBookRide(rideDetails){
  console.log(rideDetails,".............ACTION")
  return (dispatch)=>{
    axios.post("http://192.168.43.78:3000/book_ride",{
      ...rideDetails
      // credentials:"same-origin"
    }).
      then(json=>dispatch(bookRide(json)));
  }
}
