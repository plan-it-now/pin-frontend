import { LOGIN_USER, SIGNUP_USER } from '../actions/constants';
import { AsyncStorage } from 'react-native';

const initialState = {
  token: '',
  userdata: '',
  shouldRedirectSignIn: false,
  shouldRedirectSignUp: false,
}

function loginSuccess(payload) {
  console.log("PAYLOAD", payload);
  if(payload.error === null || payload.error){
    return initialState
  } else {
    console.log("xxx");
    AsyncStorage.setItem('token', payload.token)
    return {...payload,
        shouldRedirectSignIn: true,
        shouldRedirectSignUp: false
      };
  }
}

function logout(){
  AsyncStorage.removeItem('token', (error)=> {
    console.log(error);
  })
  AsyncStorage.removeItem('id', (error)=> {
    console.log(error);
  })
  return initialState
}

function signUp(payload) {
  if(payload.error === null || payload.error){
    return initialState
  } else {
    console.log("xxx");
    AsyncStorage.setItem('token', payload.token)
    return {...payload,
        shouldRedirectSignUp: true,
        shouldRedirectSignIn: false
      };
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: return loginSuccess(action.payload)
    case SIGNUP_USER: return signUp(action.payload)
    default: return state;
  }
}

export default userReducer;
