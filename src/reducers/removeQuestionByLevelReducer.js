import {
  REMOVE_QUESTION_BY_LEVEL_LOAD,
  REMOVE_QUESTION_BY_LEVEL_SUCCESS,
  REMOVE_QUESTION_BY_LEVEL_CLEAR_SUCCESS,
  REMOVE_QUESTION_BY_LEVEL_ERROR,
  REMOVE_QUESTION_BY_LEVEL_CLEAR_ERROR
} from '../types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: '',
};

export default function removeQuestionByLevelReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_QUESTION_BY_LEVEL_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case REMOVE_QUESTION_BY_LEVEL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case REMOVE_QUESTION_BY_LEVEL_CLEAR_SUCCESS:
      return {
        ...state,
        success: false,
      };
    case REMOVE_QUESTION_BY_LEVEL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case REMOVE_QUESTION_BY_LEVEL_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
