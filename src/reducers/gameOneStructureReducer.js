import {
  GAME_ONE_LIST_LOAD,
  GAME_ONE_LIST_SUCCESS,
  GAME_ONE_LIST_ERROR,
  GAME_ONE_LIST_CLEAR_ERROR,
} from '../types';

const initialState = {
  loading: true,
  gameOneList: {},
  error: false,
  errorMessage: '',
};

export default function gameOneStructureReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_ONE_LIST_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case GAME_ONE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        gameOneList: action.payload,
      };
    case GAME_ONE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case GAME_ONE_LIST_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
    