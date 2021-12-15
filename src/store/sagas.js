import { takeLatest, takeEvery } from 'redux-saga/effects';
import { Types } from './actions';

// imports
import { loginSaga, carouselDataSaga, notificationDataSaga, onLogoutSaga } from '../views/auth/store';
import { getMenuSaga } from '../views/Layout/store';
import { getLocaleStringsSaga } from '../localeStrings';
import { getFilterDataSaga, getIFrameDataSaga } from '../views/dashboard/FilterView/store/saga';
import { getKpvDataSaga, getKpvDetailsSaga } from '../component/ResultView/Store/saga';
import { getPlotDataSaga, getPaneOptionsSaga } from '../component/KPVCharts/Store';
import { setThemeColorsSaga } from '../config/saga';
import { getDashboardsSaga } from '../views/MyDashboards/store';
import { getAnalyticsSaga } from '../views/MyAnalytics/store';
import { setDetailedAlaramDataSaga } from '../component/Alarams/Store';

export function* watchAuth() {
  yield takeLatest(Types.LOGIN, loginSaga);
  yield takeLatest(Types.ON_LOGOUT, onLogoutSaga);
  yield takeLatest(Types.GET_MENU, getMenuSaga);
  yield takeLatest(Types.CAROUSEL_DATA, carouselDataSaga);
  yield takeLatest(Types.NOTIFICATION_DATA, notificationDataSaga);
  yield takeLatest(Types.GET_LOCALE_STRINGS, getLocaleStringsSaga);
  yield takeLatest(Types.GET_FILTER_DATA, getFilterDataSaga);
  yield takeLatest(Types.GET_I_FRAME_DATA, getIFrameDataSaga);
  yield takeLatest(Types.GET_KPV_DATA, getKpvDataSaga);
  yield takeLatest(Types.GET_KPV_DETAILS, getKpvDetailsSaga);
  yield takeLatest(Types.GET_PLOT_DATA, getPlotDataSaga);
  yield takeLatest(Types.SET_THEME_COLORS, setThemeColorsSaga);
  yield takeEvery(Types.SET_PANE_OPTIONS, getPaneOptionsSaga);
  yield takeLatest(Types.GET_DASHBOARDS, getDashboardsSaga);
  yield takeLatest(Types.GET_ANALYTICS, getAnalyticsSaga);
  yield takeLatest(Types.SET_DETAILED_ALARAM_DATA, setDetailedAlaramDataSaga);
}
