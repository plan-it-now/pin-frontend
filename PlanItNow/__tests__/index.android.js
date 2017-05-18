import 'react-native';
import React from 'react';
import PlanItNow from '../index.android.js';
import { shallow } from  'enzyme';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

// const store = createStore(reducers, applyMiddleware(thunk, logger));

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = shallow(
    <PlanItNow />
  );
  expect(tree).toMatchSnapshot();
});
