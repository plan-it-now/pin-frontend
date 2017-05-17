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
import { RowComponent } from '../src/Components/step2';
import ItineraryStepThree from '../src/Components/ItineraryStepThree';
import ScheduleDetail from '../src/Components/ItineraryStepThree/ScheduleDetail.js';
import MapDetail from '../src/Components/MapDetail';
import Recomedation from '../src/Components/Recomendation';
import Register from '../src/Components/Register';

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

it('Should render GeoDirection Component', () => {
  const GeoDirectionComp = shallow(
    <Provider store={store}>
      <GeoDirection />
    </Provider>
  );
  expect(GeoDirectionComp).toMatchSnapshot();
})

it('Should render inputQuery Component', () => {
  const inputQueryComp = shallow(
    <Provider store={store}>
      <inputQuery />
    </Provider>
  );
  expect(inputQueryComp).toMatchSnapshot();
})

it('Should render ItineraryStepOne Component', () => {
  const ItineraryStepOneComp = shallow(
    <Provider store={store}>
      <ItineraryStepOne />
    </Provider>
  );
  expect(ItineraryStepOneComp).toMatchSnapshot();
})

it('Should render MyComponent Component', () => {
  const MyComponentComp = shallow(
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
  expect(MyComponentComp).toMatchSnapshot();
})

it('Should render RowComponent Component', () => {
  const RowComponentComp = shallow(
    <Provider store={store}>
      <RowComponent />
    </Provider>
  );
  expect(RowComponentComp).toMatchSnapshot();
})

it('Should render ItineraryStepThree Component', () => {
  const ItineraryStepThreeComp = shallow(
    <Provider store={store}>
      <ItineraryStepThree />
    </Provider>
  );
  expect(ItineraryStepThreeComp).toMatchSnapshot();
})

it('Should render ItineraryStepThree Component', () => {
  const ItineraryStepThreeComp = shallow(
    <Provider store={store}>
      <ItineraryStepThree />
    </Provider>
  );
  expect(ItineraryStepThreeComp).toMatchSnapshot();
})

it('Should render ScheduleDetail Component', () => {
  const ScheduleDetailComp = shallow(
    <Provider store={store}>
      <ScheduleDetail />
    </Provider>
  );
  expect(ScheduleDetailComp).toMatchSnapshot();
})

it('Should render MapDetail Component', () => {
  const MapDetailComp = shallow(
    <Provider store={store}>
      <MapDetail />
    </Provider>
  );
  expect(MapDetailComp).toMatchSnapshot();
})

it('Should render Register Component', () => {
  const RegisterComp = shallow(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(RegisterComp).toMatchSnapshot();
})

it('Should render Register Component', () => {
  const RegisterComp = shallow(
    <Provider store={store}>
      <Register />
    </Provider>
  );
  expect(RegisterComp).toMatchSnapshot();
})
