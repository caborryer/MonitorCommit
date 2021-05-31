import {
  AUTH_LOAD,
  AUTH_USER_SUCCESS,
  AUTH_USER_DATA,
  AUTH_USER_CLEAR_DATA,
  AUTH_USER_ERROR,
  AUTH_CLEAR_USER_ERROR,
} from '../types';

const IS_SERVER = typeof window === 'undefined';
const isAuthenticated = !IS_SERVER && localStorage.getItem('token');

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  isAuthenticated,
  authData: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_USER_DATA:
      return {
        ...state,
        isAuthenticated: true,
        authData: action.payload,
      };
    case AUTH_USER_CLEAR_DATA:
      return {
        ...state,
        isAuthenticated: false,
        authData: {},
      };
    case AUTH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case AUTH_CLEAR_USER_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
