/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/components/'
import {
 AppRegistry
} from 'react-native';

import { Provider } from 'react-redux'
//import store from './src/store'

export default class PlanItNow extends Component {
 render() {
   return (

       <App />

   );
 }
}

AppRegistry.registerComponent('PlanItNow', () => PlanItNow);
