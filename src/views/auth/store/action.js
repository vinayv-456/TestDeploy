import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setShowNotification: ['payload'],
  login: ['loginDetails'],
  onLoginStart: [],
  onLoginSuccess: [],
  onLoginFail: ['payload'],

  onLogout: ['payload'],
  onLogoutSuccess: ['payload'],

  setUserDetails: ['payload'],
  // login contents
  carouselData: ['payload'],
  getCarouselDataStart: [],
  getCarouselDataSuccess: [],
  getCarouselDataFail: ['payload'],
  setCarouselData: ['payload'],

  notificationData: ['payload'],
  getNotificationDataStart: [],
  getNotificationDataSuccess: [],
  getNotificationDataFail: ['payload'],
  setNotificationData: ['payload'],

  resetAuthError: ['payload']
});

export { Types, Creators };
