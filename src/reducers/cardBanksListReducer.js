import {
    CARD_BANKS_LIST_LOAD,
    CARD_BANKS_LIST_SUCCESS,
    CARD_BANK_DETAILS,
    CARD_BANK_CLEAR_ERROR,
    CARD_BANK_ERROR,
  } from '../types';
  
  const initialState = {
    loading: true,
    cardBanksList: {},
    cardBankDetails: {},
    error: false,
    errorMessage: '',
  };
  
  export default function cardBanksListReducer(state = initialState, action) {
    switch (action.type) {
      case CARD_BANKS_LIST_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case CARD_BANKS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          cardBanksList: action.payload,
        };
      case CARD_BANK_DETAILS:
        return {
          ...state,
          cardBankDetails: action.payload,
        };
      case CARD_BANK_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case CARD_BANK_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  