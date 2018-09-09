import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardHeader } from 'reactstrap';
import noRides from '../noRides.jpg';

class MyRide extends Component {


  constructor(props){
    super(props);
    this.state = {
      cancelledStatus:false
    }
  }
  componentWillMount()
  {
    if(sessionStorage.getItem('rideId')!=0)
    {
      this.props.fetchRides()
    }
  }

  render(){
    var message= this.props.rides.status == "cancelled"? "Ride Cancelled Successfully" : "No Rides Booked"
    return (
      <React.Fragment>
      {
        (sessionStorage.getItem('rideId')==0 || this.props.rides.status == "cancelled")?(
          <div align="center" >
          <div class="alert alert-warning" align="center" >
        {message}
        </div>
        <img style={{width:"35%"}} src={noRides} alt="noRides"/>
        </div>
      ):(<React.Fragment>
      <div className="container" style={{marginTop:"8%"}}>
      <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8" >
     <Card body inverse color="info">
     <CardTitle color="danger"><h1><center>Here You Go !!! </center></h1></CardTitle>
     <CardText><center>Ride Id: {this.props.rides.rideId} </center></CardText>
     <CardText><center>Rider Name: {this.props.rides.riderName}</center></CardText>
     <CardText><center>Ridee Name: {this.props.rides.rideeName}</center></CardText>
     <CardText><center>Pickup: {this.props.rides.pickUp} </center></CardText>
     <CardText><center>Destination: {this.props.rides.destination}</center></CardText>
     <CardText><center>Status: {this.props.rides.status}</center></CardText>
       <Button color="danger" onClick={()=>{
         this.props.cancelRide(sessionStorage.getItem('rideId'));

       }}>Cancel Ride</Button>
     </Card>
     </div>
     </div>
     </div>

        </React.Fragment>)
      }
      </React.Fragment>
    )
  }
}
  export default MyRide;
