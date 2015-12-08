/**
 * Created by mars on 2015/10/12.
 */

'use strict';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import CnodeApp from './cnodeApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class App extends Component {
  //load default config
  componentDidMount(){

  }
  render() {
    return (
      <Provider store={store}>
        {() => <CnodeApp />}
      </Provider>
    );
  }
}

module.exports=App
