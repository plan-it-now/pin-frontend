import { LOGIN_USER } from '../actions/constants';

const initialState = {
  token: '',
  id: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return action.payload
    }
    default: return state

  }
}
