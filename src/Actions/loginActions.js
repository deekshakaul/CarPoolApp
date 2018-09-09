import axios from 'axios';

function onLogin(response){
  console.log("response from login", response)
  return {
    type:"LOGIN",
    response
  }
}

export function validateCredentials(creds){
  return (dispatch)=>{
    axios.post('http://192.168.43.78:3000/login', {
        ...creds
      }).
      then(json=>dispatch(onLogin(json)));
  }
}
