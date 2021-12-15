import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getLocaleStrings: ['payload'],
  getLocaleStringsStart: ['payload'],
  getLocaleStringsSuccess: ['payload'],
  getLocaleStringsFail: ['payload']
});
