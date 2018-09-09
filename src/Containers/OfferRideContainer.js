import {connect} from 'react-redux';
import OfferRide from './../Components/OfferRide.js';
import {sendDetailsForOfferRide} from './../Actions/offerRideActions.js';

var mapStateToProps = (state)=>{
  return {
    status:state.offerRide.status
  }
}

var mapDispatchToProps = (dispatch)=>{
  return {
    offerRide:(rideDetails)=>{
      dispatch(sendDetailsForOfferRide(rideDetails));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OfferRide);
