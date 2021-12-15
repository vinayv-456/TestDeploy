/* eslint-disable max-len */
import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  loading: false,
  error: null,
  showDropDown: false,
  searchQuery: '',
  searchQueryHistory: [],
  searchResults: null
};

const setSearchMenuDropDown = (state = INITIAL_STATE, action) => ({
  ...state,
  showDropDown: action.isActiveDropDown
});

const setSearchQuery = (state = INITIAL_STATE, action) => ({
  ...state,
  searchQuery: action.data
});

const setSearchQueryHistory = (state = INITIAL_STATE, action) => {
  const { searchQueryHistory } = state;
  const limitHistory = 10;
  const len = searchQueryHistory.length;
  if (action.payload?.data) {
    if (action.payload?.data !== searchQueryHistory[len - 1]) {
      if (len < limitHistory) {
        return {
          ...state,
          searchQueryHistory: [...searchQueryHistory, action.payload.data]
        };
      }
      return {
        ...state,
        searchQueryHistory: [...searchQueryHistory.slice(1), action.payload.data]
      };
    }
    return state;
  }

  return {
    ...state,
    searchQueryHistory: searchQueryHistory.slice(0, searchQueryHistory.length - 1)
  };
};

const setSearchResults = (state = INITIAL_STATE, action) => {
  const res = action.data ? [...action.data] : null;

  return {
    ...state,
    searchResults: res
  };
};

const HANDLERS = {
  [Types.SET_SEARCH_MENU_DROP_DOWN]: setSearchMenuDropDown,
  [Types.SET_SEARCH_QUERY]: setSearchQuery,
  [Types.SET_SEARCH_QUERY_HISTORY]: setSearchQueryHistory,
  [Types.SET_SEARCH_RESULTS]: setSearchResults
};

export const globalReducer = createReducer(INITIAL_STATE, HANDLERS);
