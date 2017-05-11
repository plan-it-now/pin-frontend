import { combineReducers } from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  data: userReducer,
});

export default rootReducer;
