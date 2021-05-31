import {
  QUESTION_BANKS_LIST_LOAD,
  QUESTION_BANKS_LIST_SUCCESS,
  QUESTION_BANK_DETAILS,
  QUESTION_BANK_CLEAR_ERROR,
  QUESTION_BANK_ERROR,
} from '../types';

const initialState = {
  loading: true,
  questionBanksList: {},
  questionBankDetails: {},
  error: false,
  errorMessage: '',
};

export default function questionBanksListReducer(state = initialState, action) {
  switch (action.type) {
    case QUESTION_BANKS_LIST_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case QUESTION_BANKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        questionBanksList: action.payload,
      };
    case QUESTION_BANK_DETAILS:
      return {
        ...state,
        questionBankDetails: action.payload,
      };
    case QUESTION_BANK_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case QUESTION_BANK_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
