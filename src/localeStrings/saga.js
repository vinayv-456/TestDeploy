/* eslint-disable no-console */
import { put } from 'redux-saga/effects';
import { Creators } from './action';

import { WebService } from '../services/axios/webServices';
import { localString } from '../localization/localString';
import { apiEndPoints } from '../services/axios/endPoints';

export function* getLocaleStringsSaga({ payload }) {
  const { pageId, lang } = payload;

  try {
    yield put(Creators.getLocaleStringsStart());

    const response = yield WebService.get(apiEndPoints.localStringsData, {
      params: {
        lang,
        pageId
      }
    });

    if (response.status >= 200 && response.status < 300) {
      const localeStrings = response.data.data;
      // const localeStrings = localString.en;
      // const localeStrings = localString.Test;
      yield put(Creators.getLocaleStringsSuccess({ localeStrings }));
    } else {
      throw response;
    }
  } catch (error) {
    let payload;
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          payload = {
            error: error.response.data.message
          };
          yield put(Creators.getLocaleStringsFail(payload));
          break;
        case 401:
          payload = {
            error: 'unAuthorized'
          };
          yield put(Creators.getLocaleStringsFail(payload));
          break;
        case 500:
          payload = {
            error: 'Somthing went wrong try later'
          };
          yield put(Creators.getLocaleStringsFail(payload));
          break;
        default:
          payload = {
            error: 'Unable to update. Try again later'
          };
          yield put(Creators.getLocaleStringsFail(payload));
      }
    } else {
      payload = {
        error: error.message
      };

      yield put(Creators.getLocaleStringsFail(payload));
    }
  }
}
