import React from 'react';

import { StackNavigator } from 'react-navigation';

import Login from './Login';
import inputQuery from './inputQuery';
import Register from './Register';
import Recomendation from './Recomendation';
import ItineraryStepOne from './ItineraryStepOne';
import ItineraryStepThree from './ItineraryStepThree';
import step2 from './step2';

const App = StackNavigator({

  // ItineraryStepOne: {screen: ItineraryStepOne}
  ItineraryStepThree: {screen: ItineraryStepThree}
  // Login: {screen: Login},
  // Register: {screen: Register},
  // inputQuery: {screen: inputQuery},
  // Recomendation: {screen: Recomendation},
  // ItineraryStepOne: {screen: ItineraryStepOne}

  // step2: {screen: step2}
}, {
  headerMode: 'none'
})

export default App;
