import axios from 'axios';

import { FETCH_PLACES } from './constants';

const mockingjayAlgorithm = (pref,data) => {
  let arrayPlaces = data;

  let history = arrayPlaces.filter(place => place.tags.toLowerCase() === 'history');
  let nature = arrayPlaces.filter(place => place.tags.toLowerCase() === 'nature');
  let shopping = arrayPlaces.filter(place => place.tags.toLowerCase() === 'shopping');
  let architecture = arrayPlaces.filter(place => place.tags.toLowerCase() === 'architecture');
  let art = arrayPlaces.filter(place => place.tags.toLowerCase() === 'art');

  let urutan = [];

  for(let i=0;i<arrayPlaces.length;i++){
    if(pref.history >=40 && history.length != 0) {
      urutan.push(history.shift());
    }
    if(pref.nature >=40 && nature.length != 0) {
      urutan.push(nature.shift());
    }
    if(pref.shopping >=40 && shopping.length != 0) {
      urutan.push(shopping.shift());
    }
    if(pref.architecture >=40 && architecture.length != 0) {
      urutan.push(architecture.shift());
    }
    if(pref.art >=40 && art.length != 0) {
      urutan.push(art.shift());
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
    if(pref.architecture >=60 && architecture.length != 0) {
      urutan.push(architecture.shift());
    }
    if(pref.art >=60 && art.length != 0) {
      urutan.push(art.shift());
    }
  }

  while(urutan.length !== arrayPlaces.length){
    if(history.length!==0) {
      urutan.push(history.shift());
    }
    if(nature.length!==0){
      urutan.push(nature.shift());
    }
    if(shopping.length!==0){
      urutan.push(shopping.shift());
    }
    if(architecture.length!==0){
      urutan.push(architecture.shift());
    }
    if(art.length!==0){
      urutan.push(art.shift());
    }
  }
  return urutan;
}

const fetchPlacesSucces = (pref,data) => ({
  type: FETCH_PLACES,
  payload: mockingjayAlgorithm(pref,data)
})

export const fetchPlaces = (pref,city) => {
  return (
    dispatch => (
      axios.get('http://ec2-52-221-233-16.ap-southeast-1.compute.amazonaws.com/places/city/'+city)
      .then((res) => (dispatch(fetchPlacesSucces(pref,res.data))))
    )
  )
}
