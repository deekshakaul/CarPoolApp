import React, { Component } from 'react';
import RideRow from './RideRow';
import BookRide from './BookRide';
import {Modal,ModalBody,ModalFooter,ModalHeader,Button} from 'reactstrap';
import Header from './Header';
import noRides from '../showRidesBackground.jpg';

class ShowRides extends Component {

  constructor(props){
    super(props);
    this.state={
      show:"all",
      modal:false,
      currentRide:{},
      bookedRide:false
    }
    this.toggle = this.toggle.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert(){
    return (<div className="alert alert-info">
      Ride Booked Successfuly
    </div>)
  }

  componentDidMount(){
    this.props.fetchRides(this.state.show);
  }
  toggle(rideDetails) {
    console.log("uuuuuuuuuuuuuuuu",rideDetails)
    this.setState({
      modal: !this.state.modal,
      currentRide:rideDetails

    });
  }
  render() {
    console.log(this.props.rides)
    var message = sessionStorage.getItem('rideId')!=0? "Ride already booked":"No rides Available"
    return (
      <React.Fragment>
          {
            this.props.rides.length == 0 || sessionStorage.getItem('rideId') !=0? (
              <React.Fragment>
              <div align="center">
              <div className="alert alert-info" align="center">
              {message}
              </div>
              <button class="btn btn-dark" value="all" onClick={()=>{
                  this.props.fetchRides("all")}
              }>Show All Rides</button>&nbsp;
              <button class="btn btn-success" value="from" onClick={()=>{
                  this.props.fetchRides("from")}
              }>From Telstra</button>&nbsp;
              <button class="btn btn-success" value="to" onClick={()=>{
                  this.props.fetchRides("to")}
              }>To Telstra</button>&nbsp;
              <br/><br/>
              <img style={{width:"25%"}} src={noRides} alt="noRides"/>

              </div>
              </React.Fragment>
            ):(
              <React.Fragment>
              <br/>
              <div align="center">
              <button class="btn btn-dark" value="all" onClick={()=>{
                  this.props.fetchRides("all")}
              }>Show All Rides</button>&nbsp;
              <button class="btn btn-success" value="from" onClick={()=>{
                  this.props.fetchRides("from")}
              }>From Telstra</button>&nbsp;
              <button class="btn btn-success" value="to" onClick={()=>{
                  this.props.fetchRides("to")}
              }>To Telstra</button>&nbsp;
              </div>
              <br/>
              <div className="container">
              <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-8">
              <table className="table table-hover show-ride-table">
                  <tr className="thead-dark">
                  <th style={{textAlign : "center"}}>Start Point</th>
                  <th style={{textAlign : "center"}}>End Point</th>
                  <th style={{textAlign : "center"}}>Seats Available</th>
                  </tr>
                  <tbody>
                  {this.props.rides.map(eachRide =>
                    <RideRow
                      id={eachRide.offerId}
                      name={eachRide.name}
                      car={eachRide.car}
                      startPoint={eachRide.pickUp}
                      endPoint={eachRide.destination}
                      availableSeats={eachRide.seatsLeft}
                      openModal={this.toggle}>
                    </RideRow>
                  )}
                  </tbody>
              </table>
              </div>
              </div>
              </div>

              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
              {
                this.state.bookedRide == true?(<div className="alert alert-info" align="center">
                  Ride Booked
                </div>):(null)
              }
              <ModalHeader toggle={this.toggle}>Book Ride Here</ModalHeader>
              <ModalBody>
                <BookRide {...this.state.currentRide}/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{
                  this.props.bookRide(this.state.currentRide);
                  this.setState({
                    bookedRide:true
                  })

                }}>Book Ride</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
              </React.Fragment>
            )
          }

      </React.Fragment>
    );
  }
}

export default ShowRides;
