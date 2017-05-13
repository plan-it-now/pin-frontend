import { FETCH_PLACES } from '../actions/constants';

const initialState = [
  {
    name: 'Loading...',
    description: '',
    photos: ''
  }
]
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:{
      return action.payload;
    }
    default: return state;

  }
}

export default placeReducer
