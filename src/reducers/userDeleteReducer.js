import {
  USER_DELETE_LOAD,
  USER_DELETE_SUCCESS,
  USER_DELETE_CLEAR_SUCCESS,
} from '../types';

const initialState = {
  loading: false,
  userDeleteSuccess: false,
  userDeleteMessage: '',
};

export default function userDeleteReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DELETE_LOAD:
      return {
        ...state,
        loading: true,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        userDeleteSuccess: true,
        userDeleteMessage: action.payload,
      };
    case USER_DELETE_CLEAR_SUCCESS:
      return {
        ...state,
        userDeleteSuccess: false,
        userDeleteMessage: '',
      };
    default:
      return state;
  }
};
