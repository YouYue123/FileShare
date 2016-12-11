import React from 'react'
import {render} from 'react-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/styles.css'
import '../assets/css/side-menu.css'

render(
  <Home />,
  document.getElementById('main-container')
);
