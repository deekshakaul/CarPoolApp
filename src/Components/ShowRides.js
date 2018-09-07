import React, { Component } from 'react';
import RideRow from './RideRow';
import Header from './Header';


class ShowRides extends Component {
  constructor(props){
    super(props);
    this.state={
      rides:[
        {
          startPoint:"Infosys",
          endPoint:"333",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        },
        {
          startPoint:"333",
          endPoint:"Infosys",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        },
        {
          startPoint:"333",
          endPoint:"Infosys",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        },
        {
          startPoint:"333",
          endPoint:"Infosys",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        },
        {
          startPoint:"333",
          endPoint:"Infosys",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        },
        {
          startPoint:"333",
          endPoint:"Infosys",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        },
        {
          startPoint:"333",
          endPoint:"Infosys",
          availableSeats:4,
          car:"xyz",
          name:"abc",
          id:"653"
        }
      ],
      childComponent :[]
    }
    this.setRides = this.setRides.bind(this);
    this.getRidesToInfosys = this.getRidesToInfosys.bind(this);
    this.getRidesFromInfosys = this.getRidesFromInfosys.bind(this);
  }

  componentDidMount(){
    if(this.state.childComponent.length == 0)
    {
      this.setState({childComponent:this.state.rides.map(eachRide => <RideRow {...eachRide}/>)});
    }

  }

  getRidesFromInfosys(){
    const result = this.state.rides.filter(ride => ride.startPoint== "Infosys");
    this.setState({
      fromInfosys : result
    })
  }

  getRidesToInfosys(){
    const result = this.state.rides.filter(ride => ride.endPoint== "Infosys");
    this.setState({
      toInfosys : result
    })
  }

  setRides(event){
    var rides=[];

    if (event.target.value =="from") {
      var result = this.state.rides.filter(ride => ride.startPoint== "Infosys");
      this.setState({
        fromInfosys : result
      })
      if(this.state.fromInfosys){
        this.setState({childComponent:this.state.fromInfosys.map(eachRide => <RideRow {...eachRide}/>)})
      }
    }
    else if(event.target.value == "to"){
      var result = this.state.rides.filter(ride => ride.endPoint== "Infosys");
      this.setState({
        toInfosys : result
      })
      if(this.state.toInfosys){
        this.setState({childComponent:this.state.toInfosys.map(eachRide => <RideRow {...eachRide}/>)})
      }
    }
    else{
      this.setState({childComponent:this.state.rides.map(eachRide => <RideRow {...eachRide}/>)});
    }

  }

  FetchRides(){
    //api call
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
      <br/><div align="center">
      <button class="btn btn-dark" value="all" onClick={this.setRides} >Show All Rides</button>&nbsp;
      <button class="btn btn-success" value="from" onClick={this.setRides}>From Infosys</button>&nbsp;
      <button class="btn btn-success" value="to" onClick={this.setRides}>To Infosys</button>&nbsp;
      </div>
      <br/>
      <table class="table">
      <tr class="thead-dark">
      <th style={{textAlign : "center"}}>Start Point</th>
      <th style={{textAlign : "center"}}>End Point</th>
      <th style={{textAlign : "center"}}>Seats Available</th>
      </tr>
      {this.state.childComponent}
      </table>
      </React.Fragment>
    );
  }
}

export default ShowRides;
