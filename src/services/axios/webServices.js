import axios from 'axios';

import { rootConfig } from './endPoints';
import { setAccessTokenToHeader } from './helper';

export const WebService = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const WebServiceMultipart = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    Accept: 'application/json'
  }
});

WebService.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      setAccessTokenToHeader();
    }
    return err;
  }
);

WebServiceMultipart.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      setAccessTokenToHeader();
    }
    return err;
  }
);
