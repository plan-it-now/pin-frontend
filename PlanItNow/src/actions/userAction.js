import axios from 'axios';

import { LOGIN_USER, SIGNUP_USER, LOGIN_FB } from './constants';

//loginkey = token dan ID
export const loginSuccess = (loginkey) => ({
  type: LOGIN_USER,
  payload: loginkey,
})

export const login = (datauser) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/login',datauser)
    .then((res) => (dispatch(loginSuccess(res.data)))
    )
  )
)

export const signupSuccess = (data) => ({
  type: SIGNUP_USER,
  payload: data
})

export const signup = (datauser) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/signup',datauser)
    .then((res) => (dispatch(signupSuccess(res.data)))
    )
  )
)

export const loginfbSuccess = (data) => ({
  type: LOGIN_FB,
  payload: data
})

export const loginfb = (datauser) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/login-fb',datauser)
    .then((res) => (dispatch(loginfbSuccess(res.data)))
    )
  )
)

//tambahkan urusan logout
