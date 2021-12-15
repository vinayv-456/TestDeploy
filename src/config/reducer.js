import { createReducer } from 'reduxsauce';
import { Types } from './action';
import { LANGUAGES, THEMES } from '../constants';

const INITIAL_STATE = {
  error: null,
  loading: false,
  language: LANGUAGES.ENGLISH,
  theme: THEMES.LIGHT,
  colors: {
    primary: '#191919',
    secondary: '#191919',
    loginprimary: '#4F4ED0'
  }
};

const setLanguage = (state = INITIAL_STATE, action) => ({
  ...state,
  language: action.payload
});

const setTheme = (state = INITIAL_STATE, action) => ({
  ...state,
  theme: action.payload
});

const setThemeColorsStart = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const setThemeColorsSuccess = (state = INITIAL_STATE, action) => {
  const { primary, secondary, loginprimary } = action.payload;
  const colorsResp = { primary, secondary, loginprimary };
  return { ...state, colors: colorsResp, loading: false };
};

const setThemeColorsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true,
  error: action.payload.error
});

const HANDLERS = {
  // loading variables

  [Types.SET_LANGUAGE]: setLanguage,
  [Types.SET_THEME]: setTheme,
  [Types.SET_THEME_COLORS_START]: setThemeColorsStart,
  [Types.SET_THEME_COLORS_SUCCESS]: setThemeColorsSuccess,
  [Types.SET_THEME_COLORS_FAILURE]: setThemeColorsFailure
};

export const configReducer = createReducer(INITIAL_STATE, HANDLERS);
