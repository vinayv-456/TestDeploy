/* eslint-disable max-len */
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles/globalStyles';
import { colors } from './constants/colors';
import Routes from './routes/Routes';
import { getUserDataFromLocal } from './shared/utility/helper';
import { Creators as loginCreators } from './views/auth/store';
import { Creators as localeStringsCreators } from './localeStrings/index';
import { Creators as configCreators } from './config/action';

function App() {
  const { theme, language, colors: customTheme } = useSelector((state) => state.configData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localeStringsCreators.getLocaleStrings({ pageId: '1023', lang: language }));
    const userData = getUserDataFromLocal();
    if (userData?.token) {
      dispatch(loginCreators.setUserDetails({ token: userData.token, userData: userData.userData }));
    }
  }, []);
  useEffect(() => {
    dispatch(configCreators.setThemeColors({ company: 'wd', theme }));
  }, [theme]);
  // console.log('theme', { ...colors[theme], customTheme });
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <ThemeProvider theme={{ ...colors[theme], customTheme }}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
