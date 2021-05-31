import {
    ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_LOAD,
    ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_SUCCESS,
    ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_CLEAR_SUCCESS,
    ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_ERROR,
    ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_CLEAR_ERROR
  } from '../types';
  
  const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: '',
  };
  
  export default function allKnowAssignQuestionByLevelReducer(state = initialState, action) {
    switch (action.type) {
      case ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_CLEAR_SUCCESS:
        return {
          ...state,
          success: false,
        };
      case ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case ALL_KNOW_ASSIGN_QUESTION_BY_LEVEL_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
  