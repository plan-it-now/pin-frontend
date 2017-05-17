import React from 'react';
import 'react-native';

import userReducer from '../src/reducers/userReducer';
import itineraryReducer from '../src/reducers/itineraryReducer';
import placeReducer from '../src/reducers/placeReducer';

import { loginSuccess, signUp } from '../src/actions/userAction';

import {
  SIGNUP_USER,
  LOGOUT_USER,
  LOGIN_FB,
  UPDATE_REDIRECT,
  POST_ITIN,
  FETCH_ITIN,
  FETCH_PLACES
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

  it('handle LOGOUT action SUCCESS', () => {
    const actions = {
      type: UPDATE_REDIRECT,
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

describe('Itinerary Reducer', () => {
  it('handle FETCH ITINERARY USER action SUCCESS', () => {
    const actions = {
      type: FETCH_ITIN,
      payload: {payloadKey: 'payloadVal'}
    }
    const newState = itineraryReducer(undefined, actions)
    expect(newState).toEqual({
      "payloadKey": "payloadVal"
    })
  })
})

describe('Places Reducer', () => {
  it('handle Placer Reducer', () => {
    const actions = {
      type: FETCH_PLACES,
      payload: {payload: 'payloadVal'}
    }
    const newState = placeReducer(undefined, actions)
    expect(newState).toEqual({
      days: 0,
      recomendationPlaces: [{
        description: "",
        name: "Loading...",
        photo: "",
      }],
      approvedPlaces: [],
      payload: "payloadVal",
      rejectedPlaces: []
    })
  })
})
