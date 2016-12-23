import React,{Component} from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import {Provider} from 'react-redux';
import HomeContainer from '../containers/HomeContainer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
)
export default class Home extends Component{

  render(){
    return(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    )
  }
}
