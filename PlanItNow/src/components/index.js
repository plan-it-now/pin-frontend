import React from 'react';

import { StackNavigator } from 'react-navigation';

import Login from './Login';
import inputQuery from './inputQuery';
import Register from './Register';
import Recomendation from './Recomendation';

const App = StackNavigator({
  Main: {screen: Login},
  // Register: {screen: Register},
  // inputQuery: {screen: inputQuery},
  // Recomendation: {screen: Recomendation}
})

export default App;
