import React from 'react';

import { StackNavigator } from 'react-navigation';

import Login from './Login';
import inputQuery from './inputQuery';
import Register from './Register';
import Recomendation from './Recomendation';
import ItineraryStepOne from './ItineraryStepOne';

const App = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  inputQuery: {screen: inputQuery},
  // Recomendation: {screen: Recomendation}
}, {
  headerMode: 'none'

})

export default App;
