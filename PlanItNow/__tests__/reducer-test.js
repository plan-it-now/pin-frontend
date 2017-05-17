import React from 'react';
import 'react-native';
import userReducer from '../src/reducers/userReducer';
import { loginSuccess, signUp } from '../src/actions/userAction';

import {
  SIGNUP_USER,
  LOGOUT_USER
} from '../src/actions/constants';

const initialState = {
  token: '',
  userdata: '',
  shouldRedirectSignIn: false,
  shouldRedirectSignUp: false,
  warning: ''
}

describe('User Reducers', () => {
  it('handle LOGIN action SUCCESS', () => {
    let loginkey = "key"
    expect(userReducer(state = initialState, loginSuccess(loginkey))).toEqual({
      "0": loginkey[0],
      "1": loginkey[1],
      "2": loginkey[2],
      "shouldRedirectSignIn": true,
      "shouldRedirectSignUp": false,
      "warning": ""
    })
  })

  it('handle SIGNUP action SUCCESS', () => {
    const actions = {
      type: SIGNUP_USER,
      payload: {payloadKey: 'payloadVal'}
    }
    const newState = userReducer(undefined, actions)
    expect(newState).toEqual({
      "payloadKey": "payloadVal",
      "shouldRedirectSignIn": false,
      "shouldRedirectSignUp": true,
    })
  })

  it('handle LOGOUT action SUCCESS', () => {
    const actions = {
      type: LOGOUT_USER,
      payload: {payloadKey: 'payloadVal'}
    }
    const newState = userReducer(undefined, actions)
    expect(newState).toEqual({
      "shouldRedirectSignIn": false,
      "shouldRedirectSignUp": false,
      "token" : "",
      "userdata": "",
      "warning": ""
    })
  })


})
