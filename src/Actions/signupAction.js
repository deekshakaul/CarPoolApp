import axios from 'axios';

function onSignup(response){
  return {
    type:"SIGNUP",
    response
  }
}

export function saveUser(creds){
  return (dispatch)=>{
    axios.post('http://192.168.43.78:3000/signup', {
        ...creds
      }).
      then(json=>dispatch(onSignup(json)));
  }
}
