import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setLanguage: ['payload'],
  setTheme: ['payload'],
  setThemeColors: ['payload'],
  setThemeColorsStart: ['payload'],
  setThemeColorsSuccess: ['payload'],
  setThemeColorsFailure: ['payload']
});

export { Types, Creators };
