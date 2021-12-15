/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
import moment from 'moment';
import { createReducer } from 'reduxsauce';
// import { headingTitle } from '../Filter.view';
import { Types } from './action';

const INITIAL_STATE = {
  error: null,
  loading: false,
  iframeLoading: false,
  tags: {},
  cumulativeTags: {},
  selectedTabs: {},
  deletingTag: null,
  selectedItem: [],
  selectedDate: moment(),
  isDropDownActive: false,
  searchResult: null,
  resultType: 'iframe',
  filterData: null,
  showFilterResult: false,
  iframeRes: null,
  showFilter: false,
  singleSelectionGroups: [],
  menuIdofFilter: '',
  activeTab: ''
};

const setMenuIdOfFilter = (state = INITIAL_STATE, action) => ({
  ...state,
  menuIdofFilter: action.payload
});

const setSingleSelectionGroups = (state = INITIAL_STATE, action) => ({
  ...state,
  singleSelectionGroups: action.payload
});

const setTags = (state = INITIAL_STATE, action) => ({
  ...state,
  tags: action.payload,
  deletingTags: null
});

const populateFilterTags = (state = INITIAL_STATE, action) => {
  const cummTags = action.payload;
  const groups = Object.keys(cummTags);
  const referenceObj = {};
  groups.forEach((group) => {
    referenceObj[group] = cummTags[group][0];
  });
  return {
    ...state,
    tags: { ...referenceObj },
    cumulativeTags: cummTags
  };
};

const populateFilterSelectedObjs = (state = INITIAL_STATE, action) => {
  const cummSelObjs = action.payload;
  const groups = Object.keys(cummSelObjs);
  const selectionObj = {};
  const cummlativeSelectionObj = {};
  groups.forEach((group) => {
    selectionObj[group] = cummSelObjs[group][0];
    cummlativeSelectionObj[`cumulative${group}`] = cummSelObjs[group];
  });
  return {
    ...state,
    ...selectionObj,
    ...cummlativeSelectionObj
  };
};

const setCummulativeTags = (state = INITIAL_STATE, action) => ({
  ...state,
  cumulativeTags: action.payload
});

const setSingleTag = (state = INITIAL_STATE, action) => {
  const { groupTitle } = action.payload;
  return {
    ...state,
    tags: { ...state.tags, [groupTitle]: action.payload[groupTitle] },
    cumulativeTags: {
      ...state.cumulativeTags,
      [groupTitle]: {
        // ...state.cumulativeTags[groupTitle],
        // Object.keys(state.cumulativeTags).length - 1
        0: {
          ...action.payload[groupTitle]
        }
      }
    },
    [groupTitle]: { ...action.payload.selectedObj },
    [`cumulative${groupTitle}`]: { 0: { ...action.payload.selectedObj } }
  };
};

const setSelectedTabs = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedTabs: action.payload
});

const deletingTags = (state = INITIAL_STATE, action) => ({
  ...state,
  deletingTag: action.payload
});

const setSelectedItem = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedItem: action.payload
});

const universalFilterSetter = (state = INITIAL_STATE, action) => ({
  ...state,
  [action.payload.key]: action.payload.value
});

const getFilterDataStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getFilterDataSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  filterData: action.payload.data,
  resultType: action.payload.resultType,
  selectedParent: action.payload.parent
});

const getFilterDataFail = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});
const getIFrameDataStart = (state = INITIAL_STATE) => ({
  ...state,
  iframeLoading: true
});

const getIFrameDataSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  iframeLoading: false,
  iframeRes: action.payload
});

const getIFrameDataFail = (state = INITIAL_STATE, action) => ({
  ...state,
  iframeLoading: false
});

const resetFilterState = () => INITIAL_STATE;

const clearSelectedFilter = (state = INITIAL_STATE) => ({
  ...INITIAL_STATE,
  filterData: state.filterData
});

const HANDLERS = {
  [Types.SET_TAGS]: setTags,
  [Types.SET_CUMMULATIVE_TAGS]: setCummulativeTags,
  [Types.SET_SELECTED_TABS]: setSelectedTabs,
  [Types.DELETING_TAGS]: deletingTags,
  [Types.SET_SELECTED_ITEM]: setSelectedItem,
  [Types.UNIVERSAL_FILTER_SETTER]: universalFilterSetter,
  [Types.SET_SINGLE_TAG]: setSingleTag,
  [Types.RESET_FILTER_STATE]: resetFilterState,
  [Types.GET_FILTER_DATA_START]: getFilterDataStart,
  [Types.GET_FILTER_DATA_SUCCESS]: getFilterDataSuccess,
  [Types.GET_FILTER_DATA_FAIL]: getFilterDataFail,
  [Types.CLEAR_SELECTED_FILTER]: clearSelectedFilter,
  [Types.GET_I_FRAME_DATA_START]: getIFrameDataStart,
  [Types.GET_I_FRAME_DATA_SUCCESS]: getIFrameDataSuccess,
  [Types.GET_I_FRAME_DATA_FAIL]: getIFrameDataFail,
  [Types.SET_SINGLE_SELECTION_GROUPS]: setSingleSelectionGroups,
  [Types.POPULATE_FILTER_TAGS]: populateFilterTags,
  [Types.POPULATE_FILTER_SELECTED_OBJS]: populateFilterSelectedObjs,
  [Types.SET_MENU_ID_OF_FILTER]: setMenuIdOfFilter
  // [Types.SET_RESULT_DETAILS]: setResultDetails,
  // [Types.SET_GENERAL_COL_PROPS]: setGeneralColProps,
  // [Types.SET_KPV_SHORTLIST]: setKpvShorlist,
  // [Types.SET_SHORTLIST_COL_PROPS]: setShortlistColProps
};

export const FilterReducer = createReducer(INITIAL_STATE, HANDLERS);
