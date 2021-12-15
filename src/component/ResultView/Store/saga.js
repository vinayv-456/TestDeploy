/* eslint-disable max-len */
import { put, select } from 'redux-saga/effects';
import { apiEndPoints } from '../../../services/axios/endPoints';
import { WebService } from '../../../services/axios/webServices';
import { Creators } from './action';

export function* getKpvDataSaga(action) {
  const { resultDetails } = yield select((state) => state.filterResultData);

  try {
    yield put(Creators.getKpvDataStart());

    const url = `${apiEndPoints.getKpvData}`;

    const response = yield WebService.get(url);
    if (response.status >= 200 && response.status < 300) {
      const { data } = response.data;

      yield put(
        Creators.getKpvDataSuccess({
          data: {
            ...resultDetails,
            [action.payload]: data
          }
        })
      );
    } else {
      throw response;
    }
  } catch (error) {
    let payload;
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          payload = {
            error: error.response.data.message
          };
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
      }
    } else {
      payload = {
        error: 'No connection try again Later.'
      };
    }

    yield put(Creators.getKpvDataFail(payload));
  }
}

export function* getKpvDetailsSaga(action) {
  const { data, machineId } = action.payload;
  try {
    yield put(Creators.getKpvDetailsStart());
    const url = `${apiEndPoints.getKpvDetails}?machineId=${machineId}&kpv=${JSON.stringify(data)}`;

    const response = yield WebService.get(url);
    if (response.status >= 200 && response.status < 300) {
      const { data } = response.data;
      yield put(Creators.getKpvDetailsSuccess(data));
    } else {
      throw response;
    }
  } catch (error) {
    let payload;
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          payload = {
            error: error.response.data.message
          };
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
      }
    } else {
      payload = {
        error: 'No connection try again Later.'
      };
    }

    yield put(Creators.getKpvDetailsFail(payload));
  }
}
