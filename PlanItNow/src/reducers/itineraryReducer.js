import { POST_ITIN } from '../actions/constants';

const itineraryReducer = (state = [], action) => {
  switch (action.type) {
    case POST_ITIN:{
      const newArr = [
        ...state
      ]
      newArr.push(action.payload)
      return newArr;

    }
    default: return state;

  }
}

export default itineraryReducer
