import {
    CARD_BANK_DELETE_LOAD,
    CARD_BANK_DELETE_SUCCESS,
    CARD_BANK_DELETE_CLEAR_SUCCESS,
    CARD_BANK_DELETE_CLEAR_ERROR,
    CARD_BANK_DELETE_ERROR,
  } from '../types';
  
  const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: '',
  };
  
  export default function questionBankDeleteReducer(state = initialState, action) {
    switch (action.type) {
      case CARD_BANK_DELETE_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case CARD_BANK_DELETE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case CARD_BANK_DELETE_CLEAR_SUCCESS:
        return {
          ...state,
          success: false,
        };
      case CARD_BANK_DELETE_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case CARD_BANK_DELETE_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  