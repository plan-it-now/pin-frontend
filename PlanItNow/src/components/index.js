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
import SpinnerLogin from './SpinnerLogin';
import PopupLogin from './PopupLogin';
import StepIndicators from './StepIndicators';
import EditPassword from './EditPassword';

const App = StackNavigator({
  // Profile: {screen : Profile}
  // Login: {screen : Login},
  // inputQuery: {screen: inputQuery},
  // Register: {screen: Register},
  // Recomendation: {screen: Recomendation},
  // Step1: {screen: ItineraryStepOne},
  // step2: {screen: step2},
  // SpinnerLogin: {screen: SpinnerLogin},
  // PopupLogin: {screen: PopupLogin},
  // StepIndicators: {screen: StepIndicators},
  // EditPassword: {screen: EditPassword},
  // ItineraryStepThree: {screen: ItineraryStepThree},
  Login: {screen : Login},
  inputQuery: {screen: inputQuery},
  Register: {screen: Register},
  Recomendation: {screen: Recomendation},
  Step1: {screen: ItineraryStepOne},
  Step2: {screen: step2},
  Step3: {screen: ItineraryStepThree},
  StepIndicators: {screen: StepIndicators},
  // ItineraryStepThree: {screen: ItineraryStepThree},
}, {
  headerMode: 'none'
})

export default App;
