import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from'./Components/Header.js';
import LoginContainer from'./Containers/LoginContainer.js';
import ShowRidesContainer from'./Containers/ShowRidesContainer.js';
import OfferRideContainer from'./Containers/OfferRideContainer.js';
import MyRideContainer from './Containers/MyRideContainer.js';
import ShowRides from'./Components/ShowRides.js';
import OfferRide from'./Components/OfferRide.js';
import SignupContainer from'./Containers/SignupContainer.js';
import BaseComponent from'./Components/BaseComponent.js';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './Store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <BaseComponent>
          <Route exact path='/' component={LoginContainer}/>
          <Route path='/show-ride' component={ShowRidesContainer}/>
          <Route path='/offer-ride' component={OfferRideContainer}/>
          <Route path='/signup' component={SignupContainer}/>
          <Route path='/my-ride' component={MyRideContainer}/>
      </BaseComponent>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
