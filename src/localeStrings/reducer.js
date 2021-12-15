import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  loading: false,
  error: null,
  localeStrings: []
};

const getLocaleStringsStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getLocaleStringsSuccess = (state = INITIAL_STATE, action) => {
  const { localeStrings } = action.payload;

  return {
    ...state,
    localeStrings,
    loading: false
  };
};

const getLocaleStringsFail = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;

  return {
    ...state,
    error,
    loading: false
  };
};

const HANDLERS = {
  [Types.GET_LOCALE_STRINGS_START]: getLocaleStringsStart,
  [Types.GET_LOCALE_STRINGS_SUCCESS]: getLocaleStringsSuccess,
  [Types.GET_LOCALE_STRINGS_FAIL]: getLocaleStringsFail
};

export const localeStringsReducer = createReducer(INITIAL_STATE, HANDLERS);
