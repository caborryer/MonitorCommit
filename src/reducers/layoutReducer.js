import {
  LAYOUT_ITEM_MENU,
} from '../types';
import {ADMINISTRATOR} from '../shared/utils';

const initialState = {
  selectedItemMenu: ADMINISTRATOR,
};

export default function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case LAYOUT_ITEM_MENU:
      return {
        ...state,
        selectedItemMenu: action.payload,
      };
    default:
      return state;
  }
};
