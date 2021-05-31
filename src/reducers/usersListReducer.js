import {
  USER_LOAD,
  USERS_LIST_SUCCESS,
  USER_CLEAR_ERROR,
  USER_ERROR,
} from '../types';

const initialState = {
  loading: false,
  usersList: [],
  error: false,
  errorMessage: '',
};

export default function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case USER_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
