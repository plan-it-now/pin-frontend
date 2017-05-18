import { POST_ITIN, FETCH_ITIN, CLEAR_DATA } from '../actions/constants';

const initialState = [];

const itineraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ITIN:{
      const newArr = [
        action.payload,
        ...state
      ]
      return newArr;
    }
    case FETCH_ITIN:{
      return action.payload;
    }
    case CLEAR_DATA: return initialState;
    default: return state;

  }
}

export default itineraryReducer
