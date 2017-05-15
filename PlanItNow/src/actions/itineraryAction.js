import axios from 'axios';

import { POST_ITIN } from './constants';

const postItinSuccess = (data) => ({
  type: POST_ITIN,
  payload: data
})

export const postItinerary = (userid, arrayPlaces) => (
  dispatch => (
    axios.post('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/itineraries', {
      user: userid,
      places: arrayPlaces
    })
    .then((res) => dispatch(postItinSuccess(res.data)))
  )
)
