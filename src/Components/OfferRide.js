import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class OfferRide extends Component {

  render() {
    return (
      <React.Fragment>
      {this.props.status == 200 ? (<div class="alert alert-success" align="center" role="alert">
        Ride Offered Successfully
      </div>):""}
      <div className="container">
      
      <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
      <form className="form-group offer-form">
          <label>Rider Name</label>
          <input class="form-control" type="text" name="name" ref="name" required/>
          <label>Start Location</label>
          <input class="form-control" type="text" name="start" ref="start" required/>
          <label>Drop Location</label>
          <input class="form-control" type="text" name="drop" ref="drop" required/>
          <label>Car</label>
          <input class="form-control" type="text" name="car" ref="car" required/>
          <label>Seats Left</label>
          <input class="form-control" type="number" name="seats" ref="seats" required/><br/>
          <input class="btn btn-success" type="button" name="submit" value="Submit" onClick={() =>{this.props.offerRide({
              name:this.refs.name.value,
              pickUp:this.refs.start.value,
              destination:this.refs.drop.value,
              car:this.refs.car.value,
              seatsLeft:this.refs.seats.value,
            })
          }
          } style={{width:"12%",marginLeft:"44%"}}/>
      </form>
      </div>
      </div>
      </div>

      </React.Fragment>
    );
  }
}

export default OfferRide;
