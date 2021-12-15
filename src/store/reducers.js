/* eslint-disable max-len */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { configReducer } from '../config/reducer';
import { loginReducer } from '../views/auth/store/reducer';
import { FilterReducer } from '../views/dashboard/FilterView/store';
import { homeReducer } from '../views/Layout/store';
import { localeStringsReducer } from '../localeStrings';
import { globalReducer } from '../component/GlobalSearch/store';
import { FilterResultReducer } from '../component/ResultView/Store';
import { KPVChartsReducer } from '../component/KPVCharts/Store';
import { UpsertPaneReducer } from '../component/UpsertPane/Store';
import { dashboardReducer } from '../views/MyDashboards/store';
import { myAnalyticsReducer } from '../views/MyAnalytics/store';
import { AlaramsReducer } from '../component/Alarams/Store';
//

const kpvChartsPersistConfig = {
  key: 'KPVCharts',
  storage,
  blacklist: ['panesData'],
  whitelist: ['panesShortHandInfo', 'xMinDomain', 'xMaxDomain', 'colorCodes', 'selectedPaneNo']
};

const filterResultPersistConfig = {
  key: 'filterResultData',
  storage,
  whitelist: ['KPVShortlist']
};

const upsertPaneDataPersistConfig = {
  key: 'upsertPaneData',
  storage,
  blacklist: ['plotData', 'labelsData']
};

const configDataPersistConfig = {
  key: 'configData',
  storage
};

const filtersDataPersistConfig = {
  key: 'filtersData',
  storage,
  blacklist: ['filterData', 'menuIdofFilter']
};

const rootReducer = combineReducers({
  configData: persistReducer(configDataPersistConfig, configReducer),
  loginData: loginReducer,
  filterData: persistReducer(filtersDataPersistConfig, FilterReducer),
  filterResultData: persistReducer(filterResultPersistConfig, FilterResultReducer),
  home: homeReducer,
  localeStrings: localeStringsReducer,
  globalSearchData: globalReducer,
  KPVCharts: persistReducer(kpvChartsPersistConfig, KPVChartsReducer),
  upsertPaneData: persistReducer(upsertPaneDataPersistConfig, UpsertPaneReducer),
  myDashboards: dashboardReducer,
  myAnalytics: myAnalyticsReducer,
  alarams: AlaramsReducer
});

export default rootReducer;
