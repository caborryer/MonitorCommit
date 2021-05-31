import {
  OPEN_DELETE_DIALOG,
  CLOSE_DELETE_DIALOG,
} from '../types';

const initialState = {
  open: false,
};

export default function deleteDialogReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DELETE_DIALOG:
      return {
        ...state,
        open: true,
      };
    case CLOSE_DELETE_DIALOG:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
