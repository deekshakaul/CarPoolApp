
var myRideReducer = (state={
  status:'',
  rides:{}
},action)=>{

    switch(action.type){
      case "MY_RIDE":
        var newState =  Object.assign({},state,{status:action.response.status, rides: action.response});
        console.log(newState)
        return newState;

        case "CANCEL_RIDE":
          // sessionStorage.setItem('rideId',0)
          console.log(action.response,"llllllllllllllllllllllll")
          var newState =  Object.assign({},state,{status:action.response.status, rides: action.response.data.ride});
          console.log(newState)
          sessionStorage.setItem('rideId',0);
          return newState;

      default:
        return state;
    }
}

export default myRideReducer;
