import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setDetailedAlaramData: ['payload'],
  setDetailedAlaramDataStart: ['payload'],
  setDetailedAlaramDataSuccess: ['payload'],
  setDetailedAlaramDataFail: ['payload'],
  setShowCommentsModal: ['payload'],
  closeModal: ['payload'],
  setCommentsData: ['payload']
});

export { Types, Creators };
