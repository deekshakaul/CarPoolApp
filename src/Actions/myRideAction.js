import axios from 'axios';

function sendRides(res){
  var response= res.data.data[0]
  return {
    type:"MY_RIDE",
    response
  }
}

function sendCanceledRides(response){
  console.log(response,"....................");
  return {
    type:"CANCEL_RIDE",
    response
  }
}

export function fetchRides(){
  return (dispatch)=>{
    axios.get('http://192.168.43.78:3000/get_myride?rideId='+sessionStorage.getItem('rideId')).
      then(json=>dispatch(sendRides(json)));
  }
}

export function cancelRide(rideId){
  return (dispatch)=>{
    axios.post('http://192.168.43.78:3000/cancel_ride?rideId='+rideId).
      then(json=>dispatch(sendCanceledRides(json)));
  }
}
