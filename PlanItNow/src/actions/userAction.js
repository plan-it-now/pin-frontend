import axios from 'axios';

import { LOGIN_USER } from '../constants';


export const loginSuccess = (token) => ({
  type: LOGIN_USER,
  payload: token,
})

export const login = (datauser) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/login',datauser)
    .then((res) => (dispatch(loginSuccess(res.data)))
    )
  )
)
