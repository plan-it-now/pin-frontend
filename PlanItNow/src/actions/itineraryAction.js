import axios from 'axios';

import { POST_ITIN, FETCH_ITIN, SERVER_URL } from './constants';

const postItinSuccess = (data) => ({
  type: POST_ITIN,
  payload: data
})

export const postItinerary = (user, arrayPlaces) => (
  dispatch => (
    axios.post(SERVER_URL+'itineraries', {
      user: user,
      days: arrayPlaces.days,
      places: arrayPlaces.places
    })
    .then((res) => dispatch(postItinSuccess(res.data)))
  )
)

const fetchItinSuccess = (data) => ({
  type: FETCH_ITIN,
  payload: data
})

export const fetchItin = (userid) => (
  dispatch => (
    axios.get(SERVER_URL+'itineraries/user/'+userid)
    .then(res => dispatch(fetchItinSuccess(res.data)))
  )
)
