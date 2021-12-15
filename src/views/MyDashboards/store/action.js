import { createActions } from 'reduxsauce';

export const { Creators, Types } = createActions({
  getDashboards: ['payload'],
  getDashboardsStart: ['payload'],
  getDashboardsSuccess: ['payload'],
  getDashboardsFailure: ['payload'],
  setError: ['payload'],
  setDashboardDetails: ['payload'],
  resetDashboardsData: ['payload']
});
