import { LOGIN_USER, SIGNUP_USER, LOGIN_FB } from '../actions/constants';
import { AsyncStorage } from 'react-native';

const initialState = {
  token: '',
  userdata: '',
  shouldRedirectSignIn: false,
  shouldRedirectSignUp: false,
  warning: ''
}

function loginSuccess(payload) {
  console.log("PAYLOAD", payload);
  if(payload.error === null || payload.error){
    return {...initialState, warning: 'Invalid Email or Password'}
  } else {
    console.log("xxx");
    AsyncStorage.setItem('token', payload.token)
    return {...payload,
        shouldRedirectSignIn: true,
        shouldRedirectSignUp: false,
        warning: ''
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

function loginFb(payload) {
  if (payload.error === null || payload.error) {
    return initialState
  } else {
    console.log('jalan');
    AsyncStorage.setItem('token', payload.token)
    return {...payload,
        shouldRedirectSignIn: true,
        shouldRedirectSignUp: false
      };
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: return loginSuccess(action.payload)
    case SIGNUP_USER: return signUp(action.payload)
    case LOGIN_FB: return loginFb(action.payload)
    default: return state;
  }
}

export default userReducer;
