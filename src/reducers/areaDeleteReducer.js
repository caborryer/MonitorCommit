import {
  AREA_EDIT_LOAD,
  AREA_EDIT_SUCCESS,
  AREA_DELETE_LOAD,
  AREA_DELETE_SUCCESS,
  AREA_DELETE_CLEAR_SUCCESS,
  AREA_DELETE_ERROR,
  AREA_DELETE_CLEAR_ERROR,
} from '../types';

const initialState = {
  loading: false,
  areaEditSuccess: false,
  areaDeleteSuccess: false,
  areaDeleteMessage: '',
  error: false,
  errorMessage: '',
};

export default function areaDeleteReducer(state = initialState, action) {
  switch (action.type) {
    case AREA_EDIT_LOAD:
        return {
          ...state,
          loading: true,
          error: false,
          errorMessage: '',
        };
        case AREA_EDIT_SUCCESS:
          return {
            ...state,
            loadingEdit: false,
            cityEditSuccess: true,
            cityEditMessage: action.payload,
          };
    case AREA_DELETE_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case AREA_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        areaDeleteSuccess: true,
        areaDeleteMessage: action.payload,
      };
    case AREA_DELETE_CLEAR_SUCCESS:
      return {
        ...state,
        areaDeleteSuccess: false,
        areaDeleteMessage: '',
      };
    case AREA_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case AREA_DELETE_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
