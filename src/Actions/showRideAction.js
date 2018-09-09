import axios from 'axios';

function sendRides(response){
  return {
    type:"SHOW_RIDE",
    response
  }
}

export function fetchRides(show){
  return (dispatch)=>{
    axios.get('http://192.168.43.78:3000/show_ride?show='+show).
      then(json=>dispatch(sendRides(json)));
  }
}
