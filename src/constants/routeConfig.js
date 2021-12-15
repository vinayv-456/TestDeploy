/* eslint-disable max-len */
import Card from '../component/Card';
import FilterView from '../views/dashboard/FilterView/Filter.view';
import MyPages from '../views/MyPages/MyPages.view';
import MydashboardsView from '../views/MyDashboards/MyDashBoards.view';
import MyAnalyticsView from '../views/MyAnalytics/MyAnalytics.view';

const mappingComponent = {
  Card,
  Filter: FilterView,
  'My Page': MyPages,
  myDashboards: MydashboardsView,
  myAnalytics: MyAnalyticsView
};

export const filteredMenu = (data) => {
  const routesInfo = {
    finalRoutes: [],
    filterPaths: {}
  };
  // let finalRoutes = [];
  data.forEach((item) => {
    if (item.IsLeaf === '0') {
      const returnMenu = filteredMenu(item.SubMenu);
      if (returnMenu) {
        routesInfo.finalRoutes = [...routesInfo.finalRoutes, ...returnMenu.finalRoutes];
        routesInfo.filterPaths = { ...routesInfo.filterPaths, ...returnMenu.filterPaths };
      }
    } else {
      if (item.PageType === 'Filter') {
        routesInfo.filterPaths = {
          ...routesInfo.filterPaths,
          [item.Id]: item.Permalink
        };
      }
      routesInfo.finalRoutes = [
        ...routesInfo.finalRoutes,
        {
          exact: true,
          path: item.Permalink,
          name: item.Name,
          menuId: item.Id,
          subMenuOptions: item.SubMenuLabelOptions,
          description: item['[Description]'],
          Component: mappingComponent[item.PageType]
        }
      ];
    }
  });
  return routesInfo;
};
