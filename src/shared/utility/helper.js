import { cookie } from './cookieService';

export const setUserDataToLocal = (userDetails) => {
  if (userDetails) {
    cookie.set('userDetails', userDetails, {
      path: '/',
      maxAge: 31536000,
      sameSite: true
    });
  } else {
    cookie.remove('userDetails', { path: '/' });
  }
};

export const getUserDataFromLocal = () => cookie.get('userDetails');
