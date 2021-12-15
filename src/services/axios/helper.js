import { WebService, WebServiceMultipart } from './webServices';

export const setAccessTokenToHeader = (token) => {
  if (token) {
    WebService.defaults.headers.Authorization = `${token}`;
    WebServiceMultipart.defaults.headers.Authorization = `${token}`;
  } else {
    delete WebService.defaults.headers.Authorization;
    delete WebServiceMultipart.defaults.headers.Authorization;
  }
};
