import {
    GAME_THREE_LIST_LOAD,
    GAME_THREE_LIST_SUCCESS,
    GAME_THREE_LIST_ERROR,
    GAME_THREE_LIST_CLEAR_ERROR,
  } from '../types';
  
  const initialState = {
    loading: true,
    gameThreeList: {},
    error: false,
    errorMessage: '',
  };
  
  export default function gameThreeStructureReducer(state = initialState, action) {
    switch (action.type) {
      case GAME_THREE_LIST_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
      case GAME_THREE_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          gameThreeList: action.payload,
        };
      case GAME_THREE_LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload,
        };
      case GAME_THREE_LIST_CLEAR_ERROR:
        return {
          ...state,
          error: false,
          errorMessage: '',
        };
      default:
        return state;
    }
  };
      