import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from'./Components/Header.js';
import LoginContainer from'./Container/LoginContainer.js';
import ShowRides from'./Components/ShowRides.js';
import OfferRide from'./Components/OfferRide.js';
import BookRide from'./Components/BookRide.js';
import Signup from'./Components/Signup.js';
import BaseComponent from'./Components/BaseComponent.js';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './../Store/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <BaseComponent>
      <Route exact path='/' component={LoginContainer}/>
      <Route path='/show-ride' component={ShowRides}/>
      <Route path='/offer-ride' component={OfferRide}/>
      <Route path='/signup' component={Signup}/>

      </BaseComponent>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
