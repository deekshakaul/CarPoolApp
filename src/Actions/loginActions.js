import axios from 'axios';

function onLogin(response){
  return {
    type:"LOGIN",
    response
  }
}


export function validateCredentials(creds){
  console.log('from validateCredentials action');
  return (dispatch)=>{
    axios(url,{
      method:'POST',
      body:JSON.stringify(creds),
      headers:{
        "Content-type":"application/json"
      },
      credentials:"same-origin"
    }).
      then(json=>dispatch(onLogin(json)));
  }
}
