import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {NavLink} from 'react-router';
import Telstra from '../logo2.png'
class Header extends Component {


  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    sessionStorage.clear();
    this.props.history.push('/')
  }

  render() {

    var username=sessionStorage.getItem('username')
    return (
      <nav className="navbar navbar-right navbar-expand-sm navbar-dark bg-dark">
      <img src={Telstra} style={{width:"30px"}}/>
  <div className="navbar-brand">&nbsp;
  Hi {username}!</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/show-ride">Show Rides</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/offer-ride">Offer Ride</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/my-ride">My Ride</a>
      </li>
     </ul>
     <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/" onClick={this.logout} style={{color:"white"}}>Logout</Link>
      </li>
    </ul>

  </div>
</nav>
    );
  }
}

export default Header;
