/* eslint-disable no-console */
/* eslint-disable max-len */

import { put } from 'redux-saga/effects';
import { Creators } from './action';

import { WebService } from '../../../services/axios/webServices';
import { CHART_TYPES } from '../../../constants';
import { apiEndPoints } from '../../../services/axios/endPoints';

export function* getPlotDataSaga({ payload }) {
  try {
    yield put(Creators.getPlotDataStart());
    // console.log({ payload });
    const fullURL = yield `${apiEndPoints.getPlotData}`;
    const response = yield WebService.post(fullURL, payload);
    const plotData = {};
    // console.log('res', response);
    if (response.status >= 200 && response.status < 300) {
      response.data.data.forEach((e) => {
        const { chartType, machineId, kpvId, category, machineName } = e;
        if (!plotData[chartType]) {
          plotData[chartType] = {};
        }
        switch (chartType) {
          case CHART_TYPES.DATA_CHART: {
            if (!plotData[chartType][machineId]) {
              plotData[chartType][machineId] = {};
            }
            const newValues = e.values.map((e) => ({
              ...e,
              time: new Date(e.time)
            }));
            plotData[chartType][machineId][kpvId] = newValues;
            break;
          }
          case CHART_TYPES.TRANSITION_CHART: {
            if (!plotData[chartType][category]) {
              plotData[chartType][category] = {};
            }
            const newValues = e.values.map((e) => ({
              ...e,
              start: new Date(e.start),
              end: new Date(e.end),
              machine: machineName
            }));
            plotData[chartType][category || 'lots'][machineId] = newValues;
            break;
          }
          default:
            break;
        }
      });
      // console.log({ plotData });
      yield put(Creators.getPlotDataSuccess({ plotData }));
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
          yield put(Creators.getPlotDataFailure(payload));
          break;
        case 401:
          payload = {
            error: 'unAuthorized'
          };
          yield put(Creators.getPlotDataFailure(payload));
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          yield put(Creators.getPlotDataFailure(payload));
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
          yield put(Creators.getPlotDataFailure(payload));
      }
    } else {
      // for custom error
      payload = {
        error: error.message
      };

      yield put(Creators.getPlotDataFailure(payload));
    }
  }
}

export function* getPaneOptionsSaga({ payload }) {
  try {
    const { key, chartType } = payload;
    yield put(Creators.setPaneOptionsStart());
    let finalUrl;
    if (key === 'upsertPaneOptions') {
      finalUrl = apiEndPoints.getInsertPaneOptions;
    } else {
      finalUrl = apiEndPoints.getEditPaneMenu;
    }
    const response = yield WebService.get(finalUrl, {
      params: {
        company: 'Panorbit',
        chartType
      }
    });

    if (response.status >= 200 && response.status < 300) {
      yield put(
        Creators.setPaneOptionsSuccess({
          key,
          value: response.data.data[chartType],
          chartType
        })
      );
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
          yield put(Creators.setPaneOptionsFailure(payload));
          break;
        case 401:
          payload = {
            error: 'unAuthorized'
          };
          yield put(Creators.setPaneOptionsFailure(payload));
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          yield put(Creators.setPaneOptionsFailure(payload));
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
          yield put(Creators.setPaneOptionsFailure(payload));
      }
    } else {
      // for custom error
      payload = {
        error: error.message
      };

      yield put(Creators.setPaneOptionsFailure(payload));
    }
  }
}
