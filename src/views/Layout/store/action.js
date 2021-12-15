import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setShowSideNav: ['payload'],
  setError: ['payload'],

  getMenu: ['payload'],
  getMenuStart: ['payload'],
  getMenuSuccess: ['payload'],
  getMenuFailure: ['payload'],

  setSubMenuOptions: ['payload'],
  setActiveMultiLevelMenu: ['payload'],
  toggleHeaderOption: ['payload'],
  settingsActiveMenu: ['payload'],
  setNotificationTabs: ['payload']
});
