import {
  QUESTION_BANK_SET_EMMA_HELP_LOAD,
  QUESTION_BANK_SET_EMMA_HELP_SUCCESS,
  QUESTION_BANK_SET_EMMA_HELP_CLEAR_SUCCESS,
  QUESTION_BANK_SET_EMMA_HELP_CLEAR_ERROR,
  QUESTION_BANK_SET_EMMA_HELP_ERROR,
} from '../types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: '',
};

export default function questionBankSetEmmaHelpReducer(state = initialState, action) {
  switch (action.type) {
    case QUESTION_BANK_SET_EMMA_HELP_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case QUESTION_BANK_SET_EMMA_HELP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case QUESTION_BANK_SET_EMMA_HELP_CLEAR_SUCCESS:
      return {
        ...state,
        success: false,
      };
    case QUESTION_BANK_SET_EMMA_HELP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case QUESTION_BANK_SET_EMMA_HELP_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
