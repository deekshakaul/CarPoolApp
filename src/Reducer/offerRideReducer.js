

var offerRideReducer = (state={
  status:''
},action)=>{
    switch(action.type){
      case "OFFER_RIDE":
        return Object.assign({},state,{status:action.response.status});

      default:
        return state;
    }
}

export default offerRideReducer;
