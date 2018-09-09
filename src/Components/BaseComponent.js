import React, { Component } from 'react';
import Header from'./Header.js';
import {BrowserRouter, Route} from 'react-router-dom';

class BaseComponent extends Component {

  constructor(props){
    super(props);
  }

  render() {
    var view="block";
    if(window.location =='http://localhost:3000/'){
      view="none";
    }
    return (
      <React.Fragment>
      {
        window.location !='http://localhost:3000/' && window.location !='http://localhost:3000/signup'?(<Header/>):("")
      }
      {this.props.children}
      <footer className="page-footer fixed-bottom font-small" style={{background:"#212529"}}>

        <div className="footer-copyright text-center py-3" style={{color:"white"}}>© 2018 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/" style={{color:"white"}}> Telstra Car Pool</a>
        </div>

      </footer>
      </React.Fragment>
    );
  }
}

export default BaseComponent;
