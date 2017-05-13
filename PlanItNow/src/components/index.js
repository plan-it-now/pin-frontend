import React from 'react';

import { StackNavigator } from 'react-navigation';

import Login from './Login';
import inputQuery from './inputQuery';
import Register from './Register';
import Recomendation from './Recomendation';
import ItineraryStepOne from './ItineraryStepOne';
import ItineraryStepThree from './ItineraryStepThree';
import step2 from './step2';
import Profile from './Profile';

const App = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  inputQuery: {screen: inputQuery},
  Recomendation: {screen: Recomendation},
  // ItineraryStepOne: {screen: ItineraryStepOne},
  // step2: {screen: step2},
  // ItineraryStepThree: {screen: ItineraryStepThree},
}, {
  headerMode: 'none'
})

export default App;
