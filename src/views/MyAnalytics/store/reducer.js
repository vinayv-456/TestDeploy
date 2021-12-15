/* eslint-disable max-len */
import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  loading: false,
  error: null,
  myAnalytics: [],
  myAnalyticsItemId: '',
  myAnalyticsItemName: '',
  isEdit: false,
  menuId: ''
};

const setAnalyticsDetails = (state = INITIAL_STATE, action) => {
  const { id, name, menuId } = action.payload;

  return {
    ...state,
    myAnalyticsItemId: id,
    myAnalyticsItemName: name,
    menuId
  };
};

const setAnalyticsItemEdit = (state = INITIAL_STATE, action) => ({
  ...state,
  isEdit: action.payload
});

const getAnalyticsStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getAnalyticsSuccess = (state = INITIAL_STATE, action) => {
  const { myAnalytics } = action.payload;

  return {
    ...state,
    myAnalytics,
    loading: false
  };
};

const getAnalyticsFailure = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;

  return {
    ...state,
    error,
    loading: false
  };
};

const resetAnalyticsData = (state = INITIAL_STATE, action) => ({
  ...state,
  myAnalyticsItemId: '',
  myAnalyticsItemName: '',
  isEdit: false
  // menuId: ''
});

const HANDLERS = {
  [Types.GET_ANALYTICS_START]: getAnalyticsStart,
  [Types.GET_ANALYTICS_SUCCESS]: getAnalyticsSuccess,
  [Types.GET_ANALYTICS_FAILURE]: getAnalyticsFailure,
  [Types.SET_ANALYTICS_DETAILS]: setAnalyticsDetails,
  [Types.SET_ANALYTICS_ITEM_EDIT]: setAnalyticsItemEdit,
  [Types.RESET_ANALYTICS_DATA]: resetAnalyticsData
};

export const myAnalyticsReducer = createReducer(INITIAL_STATE, HANDLERS);
