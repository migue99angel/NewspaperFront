import { SET_SEARCH_RESULTS, CLEAR_ENTRIES } from './action';

const initialState = {
  entries: []
};

export const entries = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        entries: action.payload
      };

    case CLEAR_ENTRIES:
      return {
        ...state,
        entries: []
      };

    default:
      return state;
  }
};
