/* eslint-disable no-console */
/* eslint-disable max-len */

import moment from 'moment';
import { put } from 'redux-saga/effects';
import { Creators } from './action';

import { WebService } from '../../../services/axios/webServices';
import { CHART_TYPES } from '../../../constants';
import { apiEndPoints } from '../../../services/axios/endPoints';
import { detailedAlaramData } from '../../../constants/sampleData';

export function* setDetailedAlaramDataSaga({ payload }) {
  try {
    yield put(Creators.setDetailedAlaramDataStart());
    // console.log({ payload });
    const fullURL = yield `${apiEndPoints.getPlotData}`;

    const response = yield WebService.post(fullURL, payload);
    const { machineId } = payload.kpvDetails[0];
    let newValues;
    let xMinDomain;
    let xMaxDomain;
    // console.log('res', response);
    if (response.status >= 200 && response.status < 300) {
      response.data.data.forEach((e) => {
        const { chartType, machineName } = e;
        switch (chartType) {
          case CHART_TYPES.DATA_CHART: {
            xMinDomain = new Date(e.values[0].time);
            xMaxDomain = new Date(moment(xMinDomain).add(30, 'm'));
            newValues = e.values.map((e) => ({
              ...e,
              time: new Date(e.time)
            }));
            break;
          }
          case CHART_TYPES.TRANSITION_CHART: {
            newValues = e.values.map((e) => ({
              ...e,
              start: new Date(e.start),
              end: new Date(e.end),
              machine: machineName
            }));
            break;
          }
          default:
            break;
        }
      });
      console.log('detailedAlaramData[machineId]', xMinDomain, xMaxDomain, machineId, detailedAlaramData[machineId]);
      yield put(
        Creators.setDetailedAlaramDataSuccess({
          id: machineId,
          alaramPlotData: { data: newValues, xMinDomain, xMaxDomain },
          detailedAlaramData: detailedAlaramData[machineId]
        })
      );
    } else {
      throw response;
    }
  } catch (error) {
    console.log({ error });

    let payload;
    if (error && error.response && error.response.status) {
      // add toast notification sysytem here
      console.log(error);
      switch (error.response.status) {
        case 400:
          payload = {
            error: error.response.data.message
          };
          yield put(Creators.setDetailedAlaramDataFail(payload));
          break;
        case 401:
          payload = {
            error: 'unAuthorized'
          };
          yield put(Creators.setDetailedAlaramDataFail(payload));
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          yield put(Creators.setDetailedAlaramDataFail(payload));
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
          yield put(Creators.setDetailedAlaramDataFail(payload));
      }
    } else {
      // for custom error
      payload = {
        error: error.message
      };

      yield put(Creators.setDetailedAlaramDataFail(payload));
    }
  }
}
