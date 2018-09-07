import React, { Component } from 'react';

class OfferRide extends Component {


  render() {
    return (
      <div class="offer-ride">
      <form class="form-group">
        <input class="form-control" type="text" name="name" placeholder="Name"/><br/>
        <input class="form-control" type="text" name="start" placeholder="Start Location"/><br/>
        <input class="form-control" type="text" name="drop" placeholder="Drop Location"/><br/>
        <input class="form-control" type="text" name="car" placeholder="Car"/><br/>
        <input class="form-control" type="number" name="seats" value="Seats Available"/><br/>
        <input class="btn btn-success" type="button" name="submit" value="Submit" style={{width:"12%",marginLeft:"44%"}}/>
      </form>
      </div>
    );
  }
}

export default OfferRide;
