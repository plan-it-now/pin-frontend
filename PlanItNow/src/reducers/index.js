import { combineReducers } from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  logindata: userReducer,
});

export default rootReducer;
