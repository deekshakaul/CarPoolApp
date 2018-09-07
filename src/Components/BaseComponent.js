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
        window.location !='http://localhost:3000/'?(<Header/>):("")
      }
      {this.props.children}
      </React.Fragment>
    );
  }
}

export default BaseComponent;
