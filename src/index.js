import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from'./Components/Header.js';
import Login from'./Components/Login.js';
import ShowRides from'./Components/ShowRides.js';
import OfferRide from'./Components/OfferRide.js';
import BookRide from'./Components/BookRide.js';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
