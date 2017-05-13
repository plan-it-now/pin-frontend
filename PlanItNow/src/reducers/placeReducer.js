import { FETCH_PLACES, PROCESS_PLACES } from '../actions/constants';

const initialState = {
  days: 0,
  rejectedPlaces: [],
  approvedPlaces: [],
  recomendationPlaces: [
    {
      name: 'Loading...',
      description: '',
      photos: ''
    }
  ]
}
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:{
      return {
        ...initialState,
        ...action.payload
      }
    }
    case PROCESS_PLACES: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state;

  }
}

export default placeReducer
