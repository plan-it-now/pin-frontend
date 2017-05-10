import React from 'react';

import { StackNavigator } from 'react-navigation';
import Login from './Login';
import inputQuery from './inputQuery';

const App = StackNavigator({
  Main: {screen: Login},
  inputQuery: {screen: inputQuery}
})

export default App;
