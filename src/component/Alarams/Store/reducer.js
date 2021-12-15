/* eslint-disable max-len */
import { createReducer } from 'reduxsauce';
import { Types } from './action';

const INITIAL_STATE = {
  id: '',
  detailedAlaramData: {},
  showCommentsModal: false,
  commentsData: {},
  alaramPlotData: {},
  loading: false,
  error: '',
  alaramsData: []
};

const setCommentsData = (state = INITIAL_STATE, action) => ({
  ...state,
  commentsData: action.payload
});

const setDetailedAlaramDataStart = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const setDetailedAlaramDataSuccess = (state = INITIAL_STATE, action) => {
  const { id, detailedAlaramData, alaramPlotData } = action.payload;
  return {
    ...state,
    id,
    detailedAlaramData,
    alaramPlotData,
    loading: false
  };
};

const setDetailedAlaramDataFail = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});

const setShowCommentsModal = (state = INITIAL_STATE, action) => ({
  ...state,
  showCommentsModal: action.payload
});

const closeModal = (state = INITIAL_STATE, action) => ({
  ...state,
  id: '',
  showCommentsModal: false
});

const HANDLERS = {
  [Types.SET_DETAILED_ALARAM_DATA_START]: setDetailedAlaramDataStart,
  [Types.SET_DETAILED_ALARAM_DATA_SUCCESS]: setDetailedAlaramDataSuccess,
  [Types.SET_DETAILED_ALARAM_DATA_FAIL]: setDetailedAlaramDataFail,
  [Types.SET_SHOW_COMMENTS_MODAL]: setShowCommentsModal,
  [Types.CLOSE_MODAL]: closeModal,
  [Types.SET_COMMENTS_DATA]: setCommentsData
};
export const AlaramsReducer = createReducer(INITIAL_STATE, HANDLERS);
