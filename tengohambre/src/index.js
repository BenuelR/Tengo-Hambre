import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var config = {
    apiKey: "AIzaSyBM-6fxpYQL9xxCWwM6DDwLjq4XHiKm68M",
    authDomain: "tengo-hambre-6eefc.firebaseapp.com",
    databaseURL: "https://tengo-hambre-6eefc.firebaseio.com",
    projectId: "tengo-hambre-6eefc",
    storageBucket: "tengo-hambre-6eefc.appspot.com",
    messagingSenderId: "407229264584"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
