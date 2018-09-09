import {connect} from 'react-redux';
import ShowRides from './../Components/ShowRides.js';
import {fetchRides} from './../Actions/showRideAction.js';
import {sendDetailsForBookRide} from './../Actions/bookRideAction.js'

var mapStateToProps = (state)=>{
  console.log("booked ride status is hereeeeeeeeeee",state.bookRide.status)
  return {
    status:state.showRide.status,
    rides:state.showRide.rides,
    bookedStatus:state.bookRide.rides
  }
}

var mapDispatchToProps = (dispatch)=>{
  return {
    fetchRides:(show)=>{
      dispatch(fetchRides(show));
    },
    bookRide:(rideDetails)=>{
      console.log("in container", rideDetails)
      dispatch(sendDetailsForBookRide(rideDetails));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowRides);
