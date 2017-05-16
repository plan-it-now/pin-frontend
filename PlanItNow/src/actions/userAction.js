import axios from 'axios';

import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER, UPDATE_USER, LOGIN_FB, UPDATE_REDIRECT, DECODE_USER } from './constants';


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

export const updateRedirectFalse = () => ({
  type: UPDATE_REDIRECT
})

export const logout = () => ({
  type: LOGOUT_USER
})

export const signup = (datauser) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/signup',datauser)
    .then((res) => (dispatch(signupSuccess(res.data)))
    )
  )
)

const updateSuccess = (data) => ({
  type: UPDATE_USER,
  payload: data,
})

export const updateUser = (user,places) => {
  let newUser = user;
  for (let i = 0; i < places.approvedPlaces.length; i++) {
    if (places.approvedPlaces[i].place.tag == 'Art' && newUser.userdata.pref.art <= 95) {
      newUser.userdata.pref.art += 5;
    } else if (places.approvedPlaces[i].place.tag == 'Architecture' && newUser.userdata.pref.architecture <= 95){
      newUser.userdata.pref.architecture += 5;
    } else if (places.approvedPlaces[i].place.tag == 'History' && newUser.userdata.pref.history <= 95){
      newUser.userdata.pref.history += 5;
    } else if (places.approvedPlaces[i].place.tag == 'Shopping' && newUser.userdata.pref.shopping <= 95){
      newUser.userdata.pref.shopping += 5;
    } else if (places.approvedPlaces[i].place.tag == 'Nature' && newUser.userdata.pref.nature <= 95){
      newUser.userdata.pref.nature += 5;
    }
  }

  for (let i = 0; i < places.rejectedPlaces.length; i++ ) {
    if (places.rejectedPlaces[i].tag == 'Art' && newUser.userdata.pref.art > 0) {
      newUser.userdata.pref.art -= 5;
    } else if (places.rejectedPlaces[i].tag == 'Architecture' && newUser.userdata.pref.architecture > 0){
      newUser.userdata.pref.architecture -= 5;
    } else if (places.rejectedPlaces[i].tag == 'History' && newUser.userdata.pref.history > 0){
      newUser.userdata.pref.history -= 5;
    } else if (places.rejectedPlaces[i].tag == 'Shopping' && newUser.userdata.pref.shopping > 0){
      newUser.userdata.pref.shopping -= 5;
    } else if (places.rejectedPlaces[i].tag == 'Nature' && newUser.userdata.pref.nature > 0){
      newUser.userdata.pref.nature -= 5;
    }
  }

  return (
    dispatch => (
      axios.put(`http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/users/${newUser.userdata._id}`, {
        pref: newUser.userdata.pref
      })
      .then((res) => (dispatch(updateSuccess(res.data))))
    )
  )
}

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

const decodeUserSuccess = (data) => ({
  type: DECODE_USER,
  payload: data
})

export const decodeUser = (_token) => (
  dispatch => (
    axios.get('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/users/userdata',{
      headers: {'token': _token}
    })
    .then((res) => (dispatch(decodeUserSuccess(res.data))))
  )
)
//tambahkan urusan logout
