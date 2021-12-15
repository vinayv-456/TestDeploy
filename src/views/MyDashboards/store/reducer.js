import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  loading: false,
  error: null,
  myDashboards: [],
  myDashboardItemId: '',
  myDashboardItemName: '',
  menuId: ''
};

const getDashboardsStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getDashboardsSuccess = (state = INITIAL_STATE, action) => {
  const { myDashboards } = action.payload;

  return {
    ...state,
    myDashboards,
    loading: false
  };
};

const getDashboardsFailure = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;

  return {
    ...state,
    error,
    loading: false
  };
};

const setDashboardDetails = (state = INITIAL_STATE, action) => {
  const { id, name, menuId } = action.payload;

  return {
    ...state,
    myDashboardItemId: id,
    myDashboardItemName: name,
    menuId
  };
};

const resetDashboardsData = (state = INITIAL_STATE, action) => ({
  ...state,
  myDashboardItemId: '',
  myDashboardItemName: ''
});

const HANDLERS = {
  [Types.GET_DASHBOARDS_START]: getDashboardsStart,
  [Types.GET_DASHBOARDS_SUCCESS]: getDashboardsSuccess,
  [Types.GET_DASHBOARDS_FAILURE]: getDashboardsFailure,
  [Types.SET_DASHBOARD_DETAILS]: setDashboardDetails,
  [Types.RESET_DASHBOARDS_DATA]: resetDashboardsData
};

export const dashboardReducer = createReducer(INITIAL_STATE, HANDLERS);
