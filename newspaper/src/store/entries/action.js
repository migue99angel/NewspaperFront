import { getSearchedEntries } from '../../services/entries.service';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const CLEAR_ENTRIES = 'CLEAR_ENTRIES';

export const getSearchResults = (terms) => {
  return async (dispatch) => {
    const res = await getSearchedEntries(terms);
    dispatch({
      type: SET_SEARCH_RESULTS,
      payload: res.data
    });
  };
};

export const clearTable = () => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_ENTRIES
    });
  };
};
