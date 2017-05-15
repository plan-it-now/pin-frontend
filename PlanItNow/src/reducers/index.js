import { combineReducers } from 'redux';

import userReducer from './userReducer';
import placeReducer from './placeReducer';
import itineraryReducer from './itineraryReducer';

const rootReducer = combineReducers({
  logindata: userReducer,
  places: placeReducer,
  itineraries: itineraryReducer
});

export default rootReducer;
