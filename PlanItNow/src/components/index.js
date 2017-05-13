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
  // Profile: {screen : Profile}
  Login: {screen : Login},
  inputQuery: {screen: inputQuery},
  Register: {screen: Register},
  // ItineraryStepThree: {screen: ItineraryStepThree},
  ItineraryStepOne: {screen: ItineraryStepOne},
  step2: {screen: step2}
}, {
  headerMode: 'none'
})

export default App;
