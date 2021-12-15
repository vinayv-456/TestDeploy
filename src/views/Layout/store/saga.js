/* eslint-disable no-console */
/* eslint-disable max-len */

import { put } from 'redux-saga/effects';
import { Creators } from './action';

import { WebService } from '../../../services/axios/webServices';
import { apiEndPoints } from '../../../services/axios/endPoints';
import { filteredMenu } from '../../../constants/routeConfig';
import { data } from '../menus';
// import  { menuData } from '../../../constants/sampleData';

export function* getMenuSaga({ payload }) {
  const { company } = payload;

  try {
    yield put(Creators.getMenuStart());

    const fullURL = yield `${apiEndPoints.getMenu}`;
    const response = yield WebService.get(fullURL, {
      params: {
        company
      }
    });

    if (response.status >= 200 && response.status < 300) {
      const menuData = response.data.data[0];
      // const menuData = data;

      // const { menu, subMenuOptions } = menuData;
      const menu = menuData.filter((menu) => menu.PId === 0);

      const { finalRoutes, filterPaths } = filteredMenu(menuData);
      // console.log('finalRoutes', finalRoutes, 'filterPaths', filterPaths);
      const subMenuOptions = finalRoutes
        .filter((item) => !!item.subMenuOptions)
        .map((item) => ({
          path: item.path,
          subMenuOptions: item.subMenuOptions.split(',')
        }));
      yield put(Creators.getMenuSuccess({ menu: menu || [], finalMenu: finalRoutes, subMenuOptions, filterPaths }));
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
