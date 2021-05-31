import {
  COMPANY_LOAD,
  COMPANIES_LIST_SUCCESS,
  COMPANY_EDIT,
  COMPANY_DELETE,
  COMPANY_CLEAR_ERROR,
  COMPANY_ERROR,
} from '../types';

const initialState = {
  loading: false,
  companiesList: [],
  error: false,
  errorMessage: '',
};
export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case COMPANY_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case COMPANIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        companiesList: action.payload,
      };
    case COMPANY_EDIT:
      return {
        ...state,
        loading: false,
      };
    case COMPANY_DELETE:
      return {
        ...state,
        loading: false,
      };
    case COMPANY_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    case COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
