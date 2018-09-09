import axios from 'axios';
import store from '../Store/index.js'

function sendRides(res){
  console.log("<<<<<<<<<<<<<<<<<",res)
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
  console.log("fetchRides..... sending request to backend",sessionStorage.getItem('rideId'))
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.get(baseLink + 'get_myride?rideId='+sessionStorage.getItem('rideId')).
      then(json=>dispatch(sendRides(json)));
  }
}

export function cancelRide(rideId){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + 'cancel_ride?rideId='+rideId).
      then(json=>dispatch(sendCanceledRides(json)));
  }
}
