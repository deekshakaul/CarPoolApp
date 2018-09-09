
var bookRideReducer = (state={
  status:''
},action)=>{
    switch(action.type){
      case "BOOK_RIDE":
      if(action.response.data.status == 200){
      
        sessionStorage.setItem('rideId', action.response.data.rideId)
      }
        return Object.assign({},state,{status:action.response.status});

      default:
        return state;
    }
}

export default bookRideReducer;
