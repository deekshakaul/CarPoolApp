

var showRideReducer = (state={
  status:'',
  rides:[]
},action)=>{

    switch(action.type){
      case "SHOW_RIDE":
        var newState =  Object.assign({},state,{status:action.response.status, rides:action.response.data});
        return newState;

      default:
        return state;
    }
}

export default showRideReducer;
