import { POST_ITIN, FETCH_ITIN } from '../actions/constants';

const itineraryReducer = (state = [], action) => {
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
    default: return state;

  }
}

export default itineraryReducer
