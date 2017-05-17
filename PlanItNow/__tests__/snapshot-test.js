import 'react-native';
import React from 'react';
import PlanItNow from '../index.android.js';
import { shallow } from  'enzyme';
import reducers from '../src/reducers';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import Login from '../src/Components/Login';
import Profile from '../src/Components/Profile';
import GeoDirection from '../src/Components/GeoDirection';
import inputQuery from '../src/Components/inputQuery';
import ItineraryDetail from '../src/Components/ItineraryDetail';
import ItineraryStepOne from '../src/Components/ItineraryStepOne';
import MyComponent from '../src/Components/step2';

const store = createStore(reducers, applyMiddleware(thunk, logger));

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Should render Login Component', () => {
  const LoginComp = shallow(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(LoginComp).toMatchSnapshot();
})

it('Should render Profile Component', () => {
  const profileComp = shallow(
    <Provider store={store}>
      <Profile />
    </Provider>
  );
  expect(profileComp).toMatchSnapshot();
})

it('Should render GeoDirection Componet', () => {
  const GeoDirectionComp = shallow(
    <Provider store={store}>
      <GeoDirection />
    </Provider>
  );
  expect(GeoDirectionComp).toMatchSnapshot();
})

it('Should render inputQuery Componet', () => {
  const inputQueryComp = shallow(
    <Provider store={store}>
      <inputQuery />
    </Provider>
  );
  expect(inputQueryComp).toMatchSnapshot();
})

it('Should render ItineraryStepOne Componet', () => {
  const ItineraryStepOneComp = shallow(
    <Provider store={store}>
      <ItineraryStepOne />
    </Provider>
  );
  expect(ItineraryStepOneComp).toMatchSnapshot();
})

it('Should render MyComponent Componet', () => {
  const MyComponentComp = shallow(
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
  expect(MyComponentComp).toMatchSnapshot();
})
