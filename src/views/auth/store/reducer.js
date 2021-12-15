import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  showNotification: false,
  error: null,
  loading: false,
  token: null,
  authenticated: false,
  userData: {
    profilePicture: 'https://res.cloudinary.com/dbklykign/image/upload/v1627551091/Vistrian/Icons/man_ttt8jc_tp0xc0.svg'
  },
  carouselData: [],
  carouselDataLoading: false,
  carouselDataErr: null,
  notificationMsg: null,
  notificationMsgLoading: false,
  notificationMsgErr: null
};

const setShowNotification = (state = INITIAL_STATE, action) => {
  const { showNotification } = action.payload;

  return {
    ...state,
    showNotification
  };
};

const onLoginStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const onLoginSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  authenticated: true
});

const setUserDetails = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.payload.token,
  userData: action.payload.userData,
  authenticated: true
});

const onLoginFail = (state = INITIAL_STATE, action) => ({
  ...state,
  token: null,
  error: action.payload.error,
  loading: false
});

// login carouselData reducers
const getCarouselDataStart = (state = INITIAL_STATE) => ({
  ...state,
  carouselDataLoading: true
});

const getCarouselDataSuccess = (state = INITIAL_STATE) => ({
  ...state,
  carouselDataLoading: false,
  carouselDataErr: null
});

const getCarouselDataFail = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.payload.error,
  carouselDataLoading: false
});

const setCarouselData = (state = INITIAL_STATE, action) => ({
  ...state,
  carouselData: action.payload
});

// login maintance notification
const getNotficationDataStart = (state = INITIAL_STATE) => ({
  ...state,
  notificationMsgLoading: true
});

const getNotficationDataSuccess = (state = INITIAL_STATE) => ({
  ...state,
  notificationMsgLoading: false,
  notificationMsgErr: null
});

const getNotficationDataFail = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.payload.error,
  notificationMsgLoading: false
});

const setNotificationData = (state = INITIAL_STATE, action) => ({
  ...state,
  notificationMsg: action.payload
});

const onLogoutSuccess = (state = INITIAL_STATE) => ({
  ...state,
  authenticated: false
});

const resetAuthError = (state = INITIAL_STATE) => ({
  ...state,
  error: null
});

const HANDLERS = {
  // loading variables

  [Types.ON_LOGIN_START]: onLoginStart,
  [Types.ON_LOGIN_SUCCESS]: onLoginSuccess,
  [Types.ON_LOGIN_FAIL]: onLoginFail,
  [Types.ON_LOGOUT_SUCCESS]: onLogoutSuccess,
  [Types.SET_USER_DETAILS]: setUserDetails,
  [Types.SET_SHOW_NOTIFICATION]: setShowNotification,
  [Types.GET_CAROUSEL_DATA_START]: getCarouselDataStart,
  [Types.GET_CAROUSEL_DATA_SUCCESS]: getCarouselDataSuccess,
  [Types.GET_CAROUSEL_DATA_FAIL]: getCarouselDataFail,
  [Types.SET_CAROUSEL_DATA]: setCarouselData,
  [Types.GET_NOTIFICATION_DATA_START]: getNotficationDataStart,
  [Types.GET_NOTIFICATION_DATA_SUCCESS]: getNotficationDataSuccess,
  [Types.GET_NOTIFICATION_DATA_FAIL]: getNotficationDataFail,
  [Types.SET_NOTIFICATION_DATA]: setNotificationData,
  [Types.RESET_AUTH_ERROR]: resetAuthError
};

export const loginReducer = createReducer(INITIAL_STATE, HANDLERS);
