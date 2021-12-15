import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setResultDetails: ['payload'],
  setGeneralColProps: ['payload'],
  setKpvShortlist: ['payload'],
  setShortlistColProps: ['payload'],
  getKpvData: ['payload'],
  getKpvDataStart: ['payload'],
  getKpvDataSuccess: ['payload'],
  getKpvDataFail: ['payload'],
  getKpvDetails: ['payload'],
  getKpvDetailsStart: ['payload'],
  getKpvDetailsSuccess: ['payload'],
  getKpvDetailsFail: ['payload'],
  resetKpvDetails: ['payload']
});

export { Types, Creators };
