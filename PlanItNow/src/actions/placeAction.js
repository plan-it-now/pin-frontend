import axios from 'axios';

import { FETCH_PLACES } from './constants';

const mockingjayAlgorithm = (pref,data) => {
  let arrayPlaces = data;

  let history = arrayPlaces.filter(place => place.tag.toLowerCase() === 'history');
  let nature = arrayPlaces.filter(place => place.tag.toLowerCase() === 'nature');
  let shopping = arrayPlaces.filter(place => place.tag.toLowerCase() === 'shopping');
  let architecture = arrayPlaces.filter(place => place.tag.toLowerCase() === 'architecture');
  let art = arrayPlaces.filter(place => place.tag.toLowerCase() === 'art');

  let urutan = [];


  for(let i=0;i<array.length;i++){
    if(pref.history >=40 && history.length != 0) {
      urutan.push(history.shift());
    }
    if(pref.nature >=40 && nature.length != 0) {
      urutan.push(nature.shift());
    }
    if(pref.shopping >=40 && shopping.length != 0) {
      urutan.push(shopping.shift());
    }
      if(pref.history >=60 && history.length != 0) {
      urutan.push(history.shift());
    }
    if(pref.nature >=60 && nature.length != 0) {
      urutan.push(nature.shift());
    }
    if(pref.shopping >=60 && shopping.length != 0) {
      urutan.push(shopping.shift());
    }
  }

  while(urutan.length !== array.length){
    if(history.length!==0) {
      urutan.push(history.shift());
    }
    if(nature.length!==0){
      urutan.push(nature.shift());
    }
    if(shopping.length!==0){
      urutan.push(shopping.shift());
    }
  }

  return urutan;
}

const fetchPlacesSucces = (pref,data) => ({
  type: FETCH_PLACES,
  payload: mockingjayAlgorithm(pref,data)
})

export const fetchPlaces = (pref,city) => (
  dispatch => (
    axios.get('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/places/city/'+city)
    .then((res) => (dispatch(fetchPlacesSucces(user,res.data))))
  )
)
