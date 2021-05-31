import {
  LEVEL_ACTIVATOR_LIST_LOAD,
  LEVEL_ACTIVATOR_LIST_SUCCESS,
  LEVEL_ACTIVATOR_LIST_ERROR,
  LEVEL_ACTIVATOR_LIST_CLEAR_ERROR
} from "../types";

const initialState = {
  loading: true,
  activatorList: [],
  error: false,
  errorMessage: "",
};

export default function levelActivatorListReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case LEVEL_ACTIVATOR_LIST_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
    case LEVEL_ACTIVATOR_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        activatorList: action.payload,
      };
    case LEVEL_ACTIVATOR_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case LEVEL_ACTIVATOR_LIST_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        errorMessage: "",
      };
    default:
      return state;
  }
}
