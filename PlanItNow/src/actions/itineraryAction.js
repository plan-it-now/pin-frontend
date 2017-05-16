import axios from 'axios';

import { POST_ITIN, FETCH_ITIN } from './constants';

const postItinSuccess = (data) => ({
  type: POST_ITIN,
  payload: data
})

export const postItinerary = (user, arrayPlaces) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/itineraries', {
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
    axios.get('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/itineraries/user/'+userid)
    .then(res => dispatch(fetchItinSuccess(res.data)))
  )
)
