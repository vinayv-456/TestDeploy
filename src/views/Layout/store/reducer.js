/* eslint-disable max-len */
import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  showSideNav: false,
  loading: false,
  error: null,
  menu: [],
  subMenuOptions: null,
  activeMultiLevelNav: [],
  finalMenu: null,
  filterPaths: {},
  notificationsModal: false,
  settingsModalActiveTab: '',
  changePwd: false,
  helpDropdown: false,
  settingsDropdown: false,
  profileSettingsDropdown: false,
  showNotificationTabs: ['Alarms', 'Approvals', 'PI', 'Schedule', 'CBM alerts']
};

const setShowSideNav = (state = INITIAL_STATE, action) => {
  const { showSideNav } = action.payload;

  return {
    ...state,
    showSideNav
  };
};

const getMenuStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getMenuSuccess = (state = INITIAL_STATE, action) => {
  const { menu, subMenuOptions, finalMenu, filterPaths } = action.payload;

  return {
    ...state,
    menu,
    subMenuOptions,
    finalMenu,
    filterPaths,
    loading: false
  };
};

const getMenuFailure = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;

  return {
    ...state,
    error,
    loading: false
  };
};

const setActiveMultiLevelMenu = (state = INITIAL_STATE, action) => ({
  ...state,
  activeMultiLevelNav: action.payload
});

const setError = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;

  return {
    ...state,
    error,
    loading: false
  };
};

const setSubMenuOptions = (state = INITIAL_STATE, action) => {
  const { subMenuOptions } = action.payload;
  return {
    ...state,
    subMenuOptions
  };
};

const toggleHeaderOption = (state = INITIAL_STATE, action) => ({
  ...state,
  [action.payload]: !state[action.payload]
});

const settingsActiveMenu = (state = INITIAL_STATE, action) => ({
  ...state,
  settingsModalActiveTab: action.payload
});

const setNotificationTabs = (state = INITIAL_STATE, action) => ({
  ...state,
  showNotificationTabs: action.payload
});

const HANDLERS = {
  [Types.SET_SHOW_SIDE_NAV]: setShowSideNav,

  [Types.GET_MENU_START]: getMenuStart,
  [Types.GET_MENU_SUCCESS]: getMenuSuccess,
  [Types.GET_MENU_FAILURE]: getMenuFailure,

  [Types.SET_ERROR]: setError,
  [Types.SET_ACTIVE_MULTI_LEVEL_MENU]: setActiveMultiLevelMenu,
  [Types.SET_SUB_MENU_OPTIONS]: setSubMenuOptions,

  [Types.TOGGLE_HEADER_OPTION]: toggleHeaderOption,
  [Types.SETTINGS_ACTIVE_MENU]: settingsActiveMenu,
  [Types.SET_NOTIFICATION_TABS]: setNotificationTabs
};

export const homeReducer = createReducer(INITIAL_STATE, HANDLERS);
