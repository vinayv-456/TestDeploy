import { createReducer } from 'reduxsauce';
import { tempColPropsInGeneral, tempColPropsInShortlist } from '../../../constants/sampleData';
import { Types } from './action';

const INITIAL_STATE = {
  // resultType: 'kpv',
  resultDetails: {},
  colPropsInGeneral: tempColPropsInGeneral,
  KPVShortlist: [],
  colPropsInShortlist: tempColPropsInShortlist,
  singlePane: true,
  loading: false,
  detailsLoading: false,
  kpvDetails: null
};

const setResultDetails = (state = INITIAL_STATE, action) => ({
  ...state,
  resultDetails: action.payload
});

const setGeneralColProps = (state = INITIAL_STATE, action) => ({
  ...state,
  colPropsInGeneral: action.payload
});

const setKpvShortlist = (state = INITIAL_STATE, action) => ({
  ...state,
  KPVShortlist: action.payload
});

const setShortlistColProps = (state = INITIAL_STATE, action) => ({
  ...state,
  colPropsInShortlist: action.payload
});

const getKpvDataStart = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});

const getKpvDataSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  resultDetails: action.payload.data
});

const getKpvDataFail = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false
});

const getKpvDetailsStart = (state = INITIAL_STATE, action) => ({
  ...state,
  detailsLoading: true
});

const getKpvDetailsSuccess = (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  return {
    ...state,
    detailsLoading: false,
    kpvDetails: action.payload
  };
};

const getKpvDetailsFail = (state = INITIAL_STATE, action) => ({
  ...state,
  detailsLoading: false
});

const resetKpvDetails = () => INITIAL_STATE;

const HANDLERS = {
  [Types.SET_RESULT_DETAILS]: setResultDetails,
  [Types.SET_GENERAL_COL_PROPS]: setGeneralColProps,
  [Types.SET_KPV_SHORTLIST]: setKpvShortlist,
  [Types.SET_SHORTLIST_COL_PROPS]: setShortlistColProps,
  [Types.GET_KPV_DATA_START]: getKpvDataStart,
  [Types.GET_KPV_DATA_SUCCESS]: getKpvDataSuccess,
  [Types.GET_KPV_DATA_FAIL]: getKpvDataFail,
  [Types.GET_KPV_DETAILS_START]: getKpvDetailsStart,
  [Types.GET_KPV_DETAILS_SUCCESS]: getKpvDetailsSuccess,
  [Types.GET_KPV_DETAILS_FAIL]: getKpvDetailsFail,
  [Types.RESET_KPV_DETAILS]: resetKpvDetails
};

export const FilterResultReducer = createReducer(INITIAL_STATE, HANDLERS);
