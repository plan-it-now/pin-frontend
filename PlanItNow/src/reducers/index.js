import { combineReducers } from 'redux';

import userReducer from './userReducer';
import placeReducer from './placeReducer';

const rootReducer = combineReducers({
  logindata: userReducer,
  places: placeReducer,
});

export default rootReducer;
