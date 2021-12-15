import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setSearchMenuDropDown: ['isActiveDropDown'],
  setSearchQuery: ['data'],
  setSearchQueryHistory: ['payload'],
  setSearchResults: ['data']
});
