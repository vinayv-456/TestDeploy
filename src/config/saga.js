import { put } from 'redux-saga/effects';
import { Creators as configCreators } from './action';
import { apiEndPoints } from '../services/axios/endPoints';
import { WebService } from '../services/axios/webServices';

export function* setThemeColorsSaga({ payload }) {
  try {
    yield put(configCreators.setThemeColorsStart());
    // endpoint
    // params for Api request
    const params = { company: payload.company, theme: payload.theme };
    const themeResp = yield WebService.get(apiEndPoints.getTheme, { params });
    if (themeResp.status >= 200 && themeResp.status < 300) {
      // data keys
      const Data = themeResp?.data?.data;

      // set access toke to store
      yield put(configCreators.setThemeColorsSuccess(Data));
    } else {
      throw themeResp;
    }
  } catch (error) {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          // eslint-disable-next-line max-len
          yield put(configCreators.setThemeColorsFailure({ error: error?.response?.data?.message }));
          break;
        case 500:
          yield put(configCreators.setThemeColorsFailure({ error: 'Somthing went wrong try later' }));
          break;
        default:
          yield put(configCreators.setThemeColorsFailure({ error: 'Unable to update. Try again later' }));
      }
    } else {
      yield put(configCreators.setThemeColorsFailure({ error: 'No connection try again Later.' }));
    }
  }
}
