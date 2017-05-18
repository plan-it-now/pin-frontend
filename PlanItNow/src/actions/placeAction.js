import axios from 'axios';

import { FETCH_PLACES, PROCESS_PLACES, PROCESS_STEP1, PROCESS_STEP2, SERVER_URL, DELETE_PLACE } from './constants';

const mockingjayAlgorithm = (pref,data) => {
  let arrayPlaces = data;

  let history = arrayPlaces.filter(place => place.tag.toLowerCase() === 'history');
  let nature = arrayPlaces.filter(place => place.tag.toLowerCase() === 'nature');
  let shopping = arrayPlaces.filter(place => place.tag.toLowerCase() === 'shopping');
  let architecture = arrayPlaces.filter(place => place.tag.toLowerCase() === 'architecture');
  let art = arrayPlaces.filter(place => place.tag.toLowerCase() === 'art');

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

export const processStep1 = (data) => ({
    type: PROCESS_STEP1,
    payload: data
})

export const processStep2 = (data) => ({
  type: PROCESS_STEP2,
  payload: data
})

const fetchPlacesSucces = (pref,data,days) => ({
  type: FETCH_PLACES,
  payload: {
    days: days,
    recomendationPlaces: mockingjayAlgorithm(pref,data)
  }
})

export const fetchPlaces = (pref,city,days,_token) => {
  return (
    dispatch => (
      axios.get(SERVER_URL+'places/city/'+city,{
        headers: {'token': _token}
      })
      .then((res) => (dispatch(fetchPlacesSucces(pref,res.data,days))))
    )
  )
}

export const deletePlace = (selectedPlace) => ({
  type: DELETE_PLACE,
  payload: selectedPlace
})

export const processPlaces = (rejectedList, approvedList) => {
  let approvedPlaces = approvedList.map(place => ({
    place,
    day: 1,
    orderIndex: 0,
    schedule: '00:00'
  }));
  return {
    type: PROCESS_PLACES,
    payload: {rejectedPlaces: rejectedList,
              approvedPlaces}
  }
}
