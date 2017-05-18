import { FETCH_PLACES, PROCESS_PLACES, PROCESS_STEP1, PROCESS_STEP2, DELETE_PLACE} from '../actions/constants';

const initialState = {
  days: 0,
  rejectedPlaces: [],
  //approvedPlaces example : {place: {}, day: 1, orderIndex: 0, schedule: ''}
  approvedPlaces: [],
  recomendationPlaces: [
    {
      name: 'Loading...',
      description: '',
      photo: ''
    }
  ]
}

const deletePlace = (state, selectedPlace) => {
    const newState = state.approvedPlaces.filter(x => x.place._id !== selectedPlace.place._id );
    return newState;
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
    case PROCESS_STEP1: {
      return {
        ...state,
        ...action.payload
      }
    }
    case PROCESS_STEP2: {
      return {
        ...state,
        ...action.payload
      }
    }
    case DELETE_PLACE: {
      const approvedPlaces = deletePlace(state,action.payload);
      return {
        ...state,
        approvedPlaces
      };
    }
    default: return state;

  }
}

export default placeReducer
