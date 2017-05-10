import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


import { StackNavigator } from 'react-navigation';
import Login from './Login';

const App = StackNavigator({
  Main: {screen: Login},

})

export default App;
