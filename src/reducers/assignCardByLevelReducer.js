import {
    ASSIGN_CARD_BY_LEVEL_LOAD,
    ASSIGN_CARD_BY_LEVEL_SUCCESS,
    ASSIGN_CARD_BY_LEVEL_CLEAR_SUCCESS,
    ASSIGN_CARD_BY_LEVEL_ERROR,
    ASSIGN_CARD_BY_LEVEL_CLEAR_ERROR
  } from '../types';
  
  const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: '',
  };
  
  export default function assignCardByLevelReducer(state = initialState, action) {
    switch (action.type) {
      case ASSIGN_CARD_BY_LEVEL_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case ASSIGN_CARD_BY_LEVEL_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case ASSIGN_CARD_BY_LEVEL_CLEAR_SUCCESS:
        return {
          ...state,
          success: false,
        };
      case ASSIGN_CARD_BY_LEVEL_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case ASSIGN_CARD_BY_LEVEL_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  