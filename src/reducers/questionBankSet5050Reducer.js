import {
  QUESTION_BANK_SET_5050_LOAD,
  QUESTION_BANK_SET_5050_SUCCESS,
  QUESTION_BANK_SET_5050_CLEAR_SUCCESS,
  QUESTION_BANK_SET_5050_CLEAR_ERROR,
  QUESTION_BANK_SET_5050_ERROR,
} from '../types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: '',
};

export default function questionBankSet5050Reducer(state = initialState, action) {
  switch (action.type) {
    case QUESTION_BANK_SET_5050_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case QUESTION_BANK_SET_5050_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case QUESTION_BANK_SET_5050_CLEAR_SUCCESS:
      return {
        ...state,
        success: false,
      };
    case QUESTION_BANK_SET_5050_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case QUESTION_BANK_SET_5050_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
