import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/file-list-header.css';
import '../assets/css/file-list.css';
import '../assets/css/file-item.css';
import '../assets/css/side-menu.css';
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('main-container')
);
