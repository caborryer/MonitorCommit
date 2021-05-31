import {
    GAME_TWO_LIST_LOAD,
    GAME_TWO_LIST_SUCCESS,
    GAME_TWO_LIST_ERROR,
    GAME_TWO_LIST_CLEAR_ERROR,
  } from '../types';
  
  const initialState = {
    loading: true,
    gameTwoList: {},
    error: false,
    errorMessage: '',
  };
  
  export default function gameTwoStructureReducer(state = initialState, action) {
    switch (action.type) {
      case GAME_TWO_LIST_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case GAME_TWO_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          gameTwoList: action.payload,
        };
      case GAME_TWO_LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case GAME_TWO_LIST_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
      