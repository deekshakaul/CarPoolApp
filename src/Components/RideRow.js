import React, { Component } from 'react';
import BookRide from './BookRide';

class RideRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <tr data-toggle="modal" data-target="#orderModal">
          <td style={{textAlign : "center"}}>{this.props.startPoint}</td>
          <td style={{textAlign : "center"}}>{this.props.endPoint}</td>
          <td style={{textAlign : "center"}}>{this.props.availableSeats}</td>
        </tr>

        <div id="orderModal" class="modal fade" style={{width:"80%"}} role="dialog" aria-labelledby="orderModal" aria-hidden="true">
          <div class = "modal-dialog modal-lg">
            <div class = "modal-content" >
              <BookRide {...this.props}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RideRow;
