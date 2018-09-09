

var loginReducer = (state={
  status:'',
  baseLink:"http://10.69.158.79:3000/"
},action)=>{
    switch(action.type){
      case "LOGIN":
        if(action.response.data.status == 200){
          sessionStorage.setItem('loggedIn',true);
          sessionStorage.setItem('username', action.response.data.username);
          sessionStorage.setItem('rideId', action.response.data.rideId)
        }
        return Object.assign({},state,{status:action.response.data.status});

      default:
        return state;
    }
}

export default loginReducer;
