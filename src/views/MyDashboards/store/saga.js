/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { put } from 'redux-saga/effects';
import { myDashboardData } from '../../../constants/sampleData';
import { apiEndPoints } from '../../../services/axios/endPoints';
import { WebService } from '../../../services/axios/webServices';
import { Creators } from './action';

export function* getDashboardsSaga({ payload }) {
  try {
    yield put(Creators.getDashboardsStart());

    const fullURL = yield `${apiEndPoints.mydashboard}`;

    const response = yield WebService.get(fullURL);

    if (response.status >= 200 && response.status < 300) {
      const { data } = response.data;
      // const data = myDashboardData;
      yield put(Creators.getDashboardsSuccess({ myDashboards: data || [] }));
    } else {
      throw response;
    }
  } catch (error) {
    console.log({ error });

    let payload;
    if (error && error.response && error.response.status) {
      // add toast notification sysytem here
      switch (error.response.status) {
        case 400:
          payload = {
            error: error.response.data.message
          };
          yield put(Creators.setError(payload));
          break;
        case 401:
          payload = {
            error: 'unAuthorized'
          };
          yield put(Creators.setError(payload));
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          yield put(Creators.setError(payload));
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
          yield put(Creators.setError(payload));
      }
    } else {
      // for custom error
      payload = {
        error: error.message
      };

      yield put(Creators.setError(payload));
    }
  }
}
