/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import { put } from 'redux-saga/effects';
// import { dummyFilterData } from '../../../../constants/sampleData';
// import { dummyFilterData } from '../../../../constants/sampleData';
import { apiEndPoints } from '../../../../services/axios/endPoints';
import { WebService } from '../../../../services/axios/webServices';
import { Creators } from './action';
// import { dummyFilterData } from './filterData';

export function* getFilterDataSaga({ payload }) {
  const { tab, type, menuId } = payload;
  // console.log('payload', payload);
  console.log(tab);

  try {
    yield put(Creators.getFilterDataStart());
    const URL = `${apiEndPoints.getFilterCategory}`;

    // if (type === 'page') {
    //   URL = `${apiEndPoints.getDataView}`;
    // }

    const fullURL = yield URL;

    const response = yield WebService.get(fullURL, { params: { lang: 'eng', tab: tab || 'Summary', menuId } });
    if (response.status >= 200 && response.status < 300) {
      const { data, resultType } = response.data;
      // const { data, resultType } = dummyFilterData[menuId];
      // console.log('data', data, response.data);
      const formatedData = [];
      for (const key in data) {
        formatedData.push(data[key][0]);
      }
      // console.log('formatedData', data, formatedData);
      // const { filterData, resultType, dataView } = dummyFilterData;
      // console.log('formatedData', formatedData);
      yield put(Creators.getFilterDataSuccess({ data: formatedData, resultType, parent: tab || '' }));
    } else {
      throw response;
    }
  } catch (error) {
    console.log(error);
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

    yield put(Creators.getFilterDataFail(payload));
  }
}

export function* getIFrameDataSaga(action) {
  try {
    yield put(Creators.getIFrameDataStart());

    const url = `${apiEndPoints.getGraphURI}`;

    // console.log(action.payload);

    const response = yield WebService.post(url, JSON.stringify(action.payload));
    if (response.status >= 200 && response.status < 300) {
      const { data } = response.data;
      // console.log('iframe-data', data);
      yield put(Creators.getIFrameDataSuccess(data));
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

    yield put(Creators.getIFrameDataFail(payload));
  }
}
