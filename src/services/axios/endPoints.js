export const rootConfig = {
  apiRoot: 'http://35.161.23.251/flapi/api',
  baseUrl: 'http://vistrian2.panorbitprojects.com/api'
  // baseUrl: 'http://localhost:8080/api'
};

export const apiEndPoints = {
  login: `${rootConfig.baseUrl}/login/`,
  forgotPassword: `${rootConfig.baseUrl}/forgetPassword/`,
  ValidateCode: `${rootConfig.baseUrl}/ValidateCode/`,
  ResetPassword: `${rootConfig.baseUrl}/ResetPassword/`,
  getMenu: `${rootConfig.baseUrl}/getMenuHeading/`,
  CarouselData: `${rootConfig.apiRoot}/getCarouselData`,
  notifcationData: `${rootConfig.apiRoot}/getBannerNotifications`,
  localStringsData: `${rootConfig.apiRoot}/getLocaleString`,
  getFilterCategory: `${rootConfig.baseUrl}/getFilterCategory/`,
  getPlotData: `${rootConfig.baseUrl}/getGraphData/`,
  getDataView: `${rootConfig.baseUrl}/getDataView/`,
  getKpvDetails: `${rootConfig.baseUrl}/getKpvDetails/`,
  getKpvData: `${rootConfig.baseUrl}/getKpvData/`,
  getGraphURI: `${rootConfig.baseUrl}/getGraphURI/`,
  getTheme: `${rootConfig.baseUrl}/getTheme/`,
  getInsertPaneOptions: `${rootConfig.baseUrl}/getInsertPaneOptions/`,
  getEditPaneMenu: `${rootConfig.baseUrl}/getEditPaneMenu/`,
  mydashboard: `${rootConfig.baseUrl}/mydashboard/`,
  myAnalytics: `${rootConfig.baseUrl}/myanalytics/`
};
