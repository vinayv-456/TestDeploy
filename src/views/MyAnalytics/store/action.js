import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getAnalytics: ['payload'],
  getAnalyticsStart: ['payload'],
  getAnalyticsSuccess: ['payload'],
  getAnalyticsFailure: ['payload'],
  setAnalyticsDetails: ['payload'],
  setAnalyticsItemEdit: ['payload'],
  resetAnalyticsData: ['payload']
});
