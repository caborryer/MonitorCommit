import {
    NEW_CARD_BANKS_LIST_LOAD,
    NEW_CARD_BANKS_LIST_SUCCESS,
    NEW_CARD_BANK_CLEAR_ERROR,
    NEW_CARD_BANK_ERROR,
  } from '../types';
  
  const initialState = {
    loading: true,
    newCardBanksList: {},
    error: false,
    errorMessage: '',
  };
  
  export default function newcardBanksListReducer(state = initialState, action) {
    switch (action.type) {
      case NEW_CARD_BANKS_LIST_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case NEW_CARD_BANKS_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          newCardBanksList: action.payload,
        };
      case NEW_CARD_BANK_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case NEW_CARD_BANK_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  