import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import fileShareApp from './Reducers';
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/side-menu.css';
let store = createStore(fileShareApp);
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('main-container')
);
