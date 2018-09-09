import axios from 'axios';
import store from '../Store/index.js'

function onLogin(response){
  console.log("response from login", response)
  return {
    type:"LOGIN",
    response
  }
}

export function validateCredentials(creds){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + 'login', {
        ...creds
      }).
      then(json=>dispatch(onLogin(json)));
  }
}
