import {
    CITY_LOAD,
    CITIES_LIST_SUCCESS,
    CITY_EDIT_LOAD,
    CITY_EDIT_SUCCESS,
    CITY_EDIT_CLEAR_SUCCESS,
    CITY_CLEAR_ERROR,
    CITY_ERROR,
  } from '../types';
  
  const initialState = {
    loading: false,
    error: false,
    citiesList: [],
    loadingEdit: false,
    cityEditSuccess: false,
    cityEditMessage: '',
    errorMessage: '',
  };
  
  export default function cityReducer(state = initialState, action) {
    switch (action.type) {
      case CITY_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case CITIES_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          citiesList: action.payload,
        };
      case CITY_EDIT_LOAD:
        return {
          ...state,
          loadingEdit: true,
          error: false,
          errorMessage: '',
        };
      case CITY_EDIT_SUCCESS:
        return {
          ...state,
          loadingEdit: false,
          cityEditSuccess: true,
          cityEditMessage: action.payload,
        };
      case CITY_EDIT_CLEAR_SUCCESS:
        return {
          ...state,
          cityEditSuccess: false,
          cityEditMessage: '',
        };
      case CITY_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case CITY_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  