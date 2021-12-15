/* eslint-disable no-console */
/* eslint-disable max-len */
import { put } from 'redux-saga/effects';
import { setAccessTokenToHeader } from '../../../services/axios/helper';
import { WebService } from '../../../services/axios/webServices';
import { Creators } from './action';
import { setUserDataToLocal } from '../../../shared/utility/helper';
import { apiEndPoints } from '../../../services/axios/endPoints';

export function* loginSaga({ loginDetails }) {
  try {
    yield put(Creators.onLoginStart());
    const loginResp = yield WebService.post(apiEndPoints.login, loginDetails);
    // console.log('res', loginResp);
    if (loginResp.status >= 200 && loginResp.status < 300) {
      const { token, userData } = loginResp?.data?.data;
      // set auth token to axios header
      yield setAccessTokenToHeader(token);

      // local storage of token
      setUserDataToLocal({ token, userData: { ...userData, email: loginDetails.email } });
      // set access toke to store
      yield put(Creators.setUserDetails({ token, userData: { ...userData, email: loginDetails.email } }));
      yield put(Creators.onLoginSuccess());
    } else {
      throw loginResp;
    }
  } catch (error) {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          // eslint-disable-next-line max-len
          yield put(Creators.onLoginFail({ error: error?.response?.data?.message }));
          break;
        case 500:
          yield put(Creators.onLoginFail({ error: 'Somthing went wrong try later' }));
          break;
        default:
          yield put(Creators.onLoginFail({ error: 'Unable to update. Try again later' }));
      }
    } else {
      yield put(Creators.onLoginFail({ error: 'No connection try again Later.' }));
    }
  }
}

export function* carouselDataSaga({ payload }) {
  try {
    yield put(Creators.getCarouselDataStart());
    // endpoint
    // params for Api request
    const params = { companyId: payload.companyId, lang: 'eng' };
    const carouselDataResp = yield WebService.get(apiEndPoints.CarouselData, { params });
    if (carouselDataResp.status >= 200 && carouselDataResp.status < 300) {
      // data keys
      const Data = carouselDataResp?.data?.data;

      // set access toke to store
      yield put(Creators.setCarouselData(Data));
      yield put(Creators.getCarouselDataSuccess());
    } else {
      throw carouselDataResp;
    }
  } catch (error) {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          // eslint-disable-next-line max-len
          yield put(Creators.getCarouselDataFail({ error: error?.response?.data?.message }));
          break;
        case 500:
          yield put(Creators.getCarouselDataFail({ error: 'Somthing went wrong try later' }));
          break;
        default:
          yield put(Creators.getCarouselDataFail({ error: 'Unable to update. Try again later' }));
      }
    } else {
      yield put(Creators.getCarouselDataFail({ error: 'No connection try again Later.' }));
    }
  }
}

export function* notificationDataSaga({ payload }) {
  try {
    yield put(Creators.getNotificationDataStart());
    // endpoint
    // params for Api request
    const params = { companyId: payload.companyId };
    const notificationDataResp = yield WebService.get(apiEndPoints.notifcationData, { params });
    if (notificationDataResp.status >= 200 && notificationDataResp.status < 300) {
      // data keys
      const Data = notificationDataResp?.data?.data;

      // set access toke to store
      yield put(Creators.setNotificationData(Data));
      yield put(Creators.getNotificationDataSuccess());
    } else {
      throw notificationDataResp;
    }
  } catch (error) {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          // eslint-disable-next-line max-len
          yield put(Creators.getNotificationDataFail({ error: error?.response?.data?.message }));
          break;
        case 500:
          yield put(Creators.getNotificationDataFail({ error: 'Somthing went wrong try later' }));
          break;
        default:
          yield put(Creators.getNotificationDataFail({ error: 'Unable to update. Try again later' }));
      }
    } else {
      yield put(Creators.getNotificationDataFail({ error: 'No connection try again Later.' }));
    }
  }
}

export function* onLogoutSaga() {
  try {
    setUserDataToLocal();
    yield put(Creators.onLogoutSuccess());
  } catch (error) {
    console.log(error);
  }
}
