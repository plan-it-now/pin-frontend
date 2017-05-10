import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import inputQuery from './inputQuery'

const App = StackNavigator({
  inputQuery: {screen: inputQuery}
})

export default App
