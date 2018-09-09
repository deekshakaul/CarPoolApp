import React, { Component } from 'react';
import BookRide from './BookRide';
import BookRideContainer from '../Containers/BookRideContainer';


class RideRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <tr data-toggle="modal" data-target="#orderModal" onClick={()=>{
          console.log(sessionStorage,"*****************")
          var ridee = sessionStorage.getItem('username');
          this.props.openModal({...this.props,ridee:ridee});
        }}>
          <td style={{textAlign : "center"}}>{this.props.startPoint}</td>
          <td style={{textAlign : "center"}}>{this.props.endPoint}</td>
          <td style={{textAlign : "center"}}>{this.props.availableSeats}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default RideRow;
