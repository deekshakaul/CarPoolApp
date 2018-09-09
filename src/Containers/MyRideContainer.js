import {connect} from 'react-redux';
import MyRide from './../Components/MyRide.js';
import {fetchRides,cancelRide} from './../Actions/myRideAction.js';


var mapStateToProps = (state)=>{

  return {
    status:state.myRide.status,
    rides:state.myRide.rides,

  }
}

var mapDispatchToProps = (dispatch)=>{
  console.log("am in conatiner")
  return {
    fetchRides:()=>{
      dispatch(fetchRides());
    },
    cancelRide:(rideId)=>{
      dispatch(cancelRide(rideId));
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyRide);
