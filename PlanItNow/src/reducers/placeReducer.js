import { FETCH_PLACES } from '../actions/constants';


const placeReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PLACES:{
      return action.payload
    }
    default: return state;

  }
}
