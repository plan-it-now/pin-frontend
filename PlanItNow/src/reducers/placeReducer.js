import { FETCH_PLACES } from '../actions/constants';

const initialState = [
  {
    name: 'How to',
    description: 'Swipe left if you dont want it, Swipe right if you do want it!',
    photos: 'https://media.lonelyplanet.com/a/g/hi/t/956c72960a8467425ac3287b9e652353-museum-puri-lukisan.jpg'
  }
]
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:{
      return action.payload
    }
    default: return state;

  }
}

export default placeReducer
