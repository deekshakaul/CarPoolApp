import React, { Component } from 'react';

class BookRide extends Component {


  render() {
    console.log(this.props)
    return (
      <React.Fragment>
      <div class="modal-header">
      <div align="center">Book Ride</div>
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
      </div>
      <div id="orderItems" class="modal-body">
        <div class="container">
        <div class="row">
          <div class="col-md-2"><b>id</b></div>
          <div class="col-md-2"><b>Name</b></div>
          <div class="col-md-2"><b>Car</b></div>
          <div class="col-md-2"><b>Seats Left</b> </div>
          <div class="col-md-2"><b>Pickup Point </b> </div>
          <div class="col-md-2"><b>Destination</b></div>
        </div>
        <br/>
        <div class="row">
          <div class="col-md-2">{this.props.id}</div>
          <div class="col-md-2">{this.props.name}</div>
          <div class="col-md-2">{this.props.car}</div>
          <div class="col-md-2">{this.props.availableSeats}</div>
          <div class="col-md-2">{this.props.startPoint}</div>
          <div class="col-md-2">{this.props.endPoint}</div>
        </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
        <button class="btn btn-success" data-dismiss="modal" aria-hidden="true">Book Ride</button>

      </div>
      </React.Fragment>
    );
  }
}

export default BookRide;
