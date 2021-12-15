import { Types as ConfigTypes, Creators as ConfigCreators } from '../config/action';

import { Types as LoginTypes, Creators as LoginCreators } from '../views/auth/store/action';
import { Types as localStringsTypes, Creators as localStringsCreators } from '../localeStrings';
import { Types as FilterTypes, Creators as FilterCreators } from '../views/dashboard/FilterView/store';
import { Types as HomeTypes, Creators as HomeCreators } from '../views/Layout/store';
import { Types as FilterResultTypes, Creators as FilterResultCreators } from '../component/ResultView/Store';
import { Types as KPVChartsTypes, Creators as KPVChartsCreators } from '../component/KPVCharts/Store';
import { Types as UpsertPaneTypes, Creators as UpsertPaneCreators } from '../component/UpsertPane/Store';
import { Types as dashboardTypes, Creators as dashboardCreators } from '../views/MyDashboards/store';
import { Types as myAnalyticsTypes, Creators as myAnalyticsCreators } from '../views/MyAnalytics/store';
import { Types as alaramTypes, Creators as alaramCreators } from '../component/Alarams/Store';

const Types = {
  ...ConfigTypes,
  ...LoginTypes,
  ...FilterTypes,
  ...HomeTypes,
  ...localStringsTypes,
  ...FilterResultTypes,
  ...KPVChartsTypes,
  ...UpsertPaneTypes,
  ...dashboardTypes,
  ...myAnalyticsTypes,
  ...alaramTypes
};

const Creators = {
  ...ConfigCreators,
  ...LoginCreators,
  ...FilterCreators,
  ...HomeCreators,
  ...localStringsCreators,
  ...FilterResultCreators,
  ...KPVChartsCreators,
  ...UpsertPaneCreators,
  ...dashboardCreators,
  ...myAnalyticsCreators,
  ...alaramCreators
};

export { Types, Creators };
