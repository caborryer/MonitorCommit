import {
  WE_ALL_CONCENTRATE_RANKINGS_LIST_LOAD,
  WE_ALL_CONCENTRATE_RANKINGS_LIST_SUCCESS, 
  WE_ALL_CONCENTRATE_RANKINGS_LIST_ERROR,
  WE_ALL_CONCENTRATE_RANKINGS_LIST_CLEAR_ERROR,
  } from '../types';
  
  const initialState = {
    loading: true,
    rankingsList: [],
    error: false,
    errorMessage: '',
  };
  
  export default function weAllConcentrateRankingsListReducer(state = initialState, action) {
    switch (action.type) {
      case WE_ALL_CONCENTRATE_RANKINGS_LIST_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case WE_ALL_CONCENTRATE_RANKINGS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          rankingsList: action.payload,
        };
      case  WE_ALL_CONCENTRATE_RANKINGS_LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case WE_ALL_CONCENTRATE_RANKINGS_LIST_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
    