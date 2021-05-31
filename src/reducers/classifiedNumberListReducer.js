import {
    CLASSIFIED_NUMBER_LIST_LOAD,
    CLASSIFIED_NUMBER_LIST_SUCCESS,
    CLASSIFIED_NUMBER_LIST_ERROR,
    CLASSIFIED_NUMBER_LIST_CLEAR_ERROR,
    CLASSIFIED_NUMBER_EDIT_LOAD,
    CLASSIFIED_NUMBER_EDIT_SUCCESS,
    CLASSIFIED_NUMBER_EDIT_CLEAR_SUCCESS
  } from "../types";
  
  const initialState = {
    loading: true,
    classifiedNumberList: {},
    error: false,
    classifiedNumberEditSuccess: false,
    classifiedNumberEditMessage: '',
    errorMessage: "",
  };
  
  export default function classifiedNumberListReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case CLASSIFIED_NUMBER_LIST_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: "",
        };
      case CLASSIFIED_NUMBER_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          activatorList: action.payload,
        };
      case CLASSIFIED_NUMBER_EDIT_LOAD:
        return {
          ...state,
          loadingEdit: true,
          error: false,
          errorMessage: '',
        };
      case CLASSIFIED_NUMBER_EDIT_SUCCESS:
        return {
          ...state,
          loadingEdit: false,
          classifiedNumberEditSuccess: true,
          classifiedNumberEditMessage: action.payload,
        };
      case CLASSIFIED_NUMBER_EDIT_CLEAR_SUCCESS:
        return {
          ...state,
          classifiedNumberEditSuccess: false,
          classifiedNumberEditMessage: '',
        };
      case CLASSIFIED_NUMBER_LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case CLASSIFIED_NUMBER_LIST_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: "",
        };
      default:
        return state;
    }
  }
  