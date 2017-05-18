import axios from 'axios';

import { POST_ITIN, FETCH_ITIN, SERVER_URL, CLEAR_DATA } from './constants';

const postItinSuccess = (data) => ({
  type: POST_ITIN,
  payload: data
})

export const postItinerary = (user, arrayPlaces,_token) => (
  dispatch => (
    axios.post(SERVER_URL+'itineraries', {
      user: user,
      days: arrayPlaces.days,
      places: arrayPlaces.places
    },{
      headers: {'token': _token}
    })
    .then((res) => dispatch(postItinSuccess(res.data)))
  )
)

const fetchItinSuccess = (data) => ({
  type: FETCH_ITIN,
  payload: data
})

export const fetchItin = (userid,_token) => (
  dispatch => (
    axios.get(SERVER_URL+'itineraries/user/'+userid,{
      headers: {'token': _token}
    })
    .then(res => dispatch(fetchItinSuccess(res.data)))
  )
)

export const clearDataItinerary = () => ({
  type: CLEAR_DATA
})
