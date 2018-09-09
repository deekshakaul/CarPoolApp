import {connect} from 'react-redux';
import BookRide from './../Components/BookRide.js';
import {sendDetailsForBookRide} from './../Actions/bookRideAction.js';
var mapStateToProps = (state,ownprops)=>{
  return {
    status:state.bookRide.status,
    rideData:ownprops
  }
}
var mapDispatchToProps = (dispatch)=>{
  return {
    bookRide:(rideDetails)=>{
      console.log("in container", rideDetails)
      dispatch(sendDetailsForBookRide(rideDetails));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookRide);
