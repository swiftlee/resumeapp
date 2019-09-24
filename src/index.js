import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes';
import "./styles/Home.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const wrapper = document.getElementById("router");
wrapper ? ReactDOM.render(<Router><Routes/></Router>, wrapper) : false;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some piZZZZtfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
