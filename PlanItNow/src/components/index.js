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
import EditPassword from './EditPassword';
import DrawerProfile from './DrawerProfile';

const App = StackNavigator({
  Login: {screen : Login},
  inputQuery: {screen: inputQuery},
  Register: {screen: Register},
  Recomendation: {screen: Recomendation},
  Step1: {screen: ItineraryStepOne},
  Step2: {screen: step2},
  Step3: {screen: ItineraryStepThree},
  Profile: {screen : Profile},
  // ItineraryStepThree: {screen: ItineraryStepThree},
}, {
  headerMode: 'none'
})

export default App;
