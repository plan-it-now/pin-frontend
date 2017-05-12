/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import App from './src/components/'


export default class PlanItNow extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('PlanItNow', () => PlanItNow);
