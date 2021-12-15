/* eslint-disable max-len */
import lodash from 'lodash';
import moment from 'moment';
import { createReducer } from 'reduxsauce';
import { CHART_TYPES } from '../../../constants';
import { Types } from './action';

const INITIAL_STATE = {
  singlePane: true,
  xMinDomain: null,
  xMaxDomain: null,
  panesShortHandInfo: [],
  panesData: [],
  machinesShortlisted: [],
  paneFullScreen: false,
  xMinDomainFullScreen: null,
  xMaxDomainFullScreen: null,
  selectedPaneNo: '',
  compressedView: false,
  plotData: {},
  loading: false,
  error: '',
  chartType: CHART_TYPES.DATA_CHART,
  colorCodes: ['#1846ed', '#892dcf', '#cfa725', '#d40f1f', '#ba0fb2', '#76a31c', '#18a89c', '#cf7508'],
  optionsLoading: false,
  upsertPaneOptions: {},
  editPaneMenu: {}
};

const setPaneType = (state = INITIAL_STATE, action) => ({
  ...state,
  singlePane: action.payload
});

const operateDomainRange = (state = INITIAL_STATE, action) => {
  if (action.payload.operation === '-') {
    return {
      ...state,
      [action.payload.key]: new Date(moment(state[action.payload.key]).subtract(action.payload.value, 'm'))
    };
  }
  return {
    ...state,
    [action.payload.key]: new Date(moment(state[action.payload.key]).add(action.payload.value, 'm'))
  };
};

const setDomainRange = (state = INITIAL_STATE, action) => ({
  ...state,
  xMinDomain: action.payload.xMinDomain,
  xMaxDomain: action.payload.xMaxDomain
});

const setDomainRangeInFullScreen = (state = INITIAL_STATE, action) => ({
  ...state,
  xMinDomainFullScreen: action.payload.xMinDomainFullScreen,
  xMaxDomainFullScreen: action.payload.xMaxDomainFullScreen
});

const setPaneData = (state = INITIAL_STATE, action) => {
  const { plotData, labelsData, data, ...shortHandInfoObj } = action.payload[0];
  return {
    ...state,
    panesData: [...state.panesData, { plotData, labelsData, data }],
    panesShortHandInfo: [...state.panesShortHandInfo, { ...shortHandInfoObj }]
  };
};

const setPanesShortHandInfo = (state = INITIAL_STATE, action) => ({
  ...state,
  panesShortHandInfo: [...action.payload]
});

const setPanePlotData = (state = INITIAL_STATE, action) => {
  const { plotData, labelsData, data, index } = action.payload;
  return {
    ...state,
    panesData: [...state.panesData.slice(0, index), { plotData, labelsData, data }, ...state.panesData.slice(index + 1)]
  };
};

const editCompletePaneData = (state = INITIAL_STATE, action) => {
  const { index, paneInfo } = action.payload;
  const { plotData, labelsData, data, ...shortHandInfoObj } = paneInfo;
  return {
    ...state,
    panesShortHandInfo: [
      ...state.panesShortHandInfo.slice(0, index),
      { ...shortHandInfoObj },
      ...state.panesShortHandInfo.slice(index + 1)
    ],
    panesData: [...state.panesData.slice(0, index), { plotData, labelsData, data }, ...state.panesData.slice(index + 1)]
  };
};

const editPaneData = (state = INITIAL_STATE, action) => {
  const { index, key, value } = action.payload;
  if (key === 'labelsData' || key === 'data' || key === 'plotData') {
    return {
      ...state,
      panesData: [
        ...state.panesData.slice(0, index),
        { ...state.panesData[index], [key]: value },
        ...state.panesData.slice(index + 1)
      ]
    };
  }

  return {
    ...state,
    panesShortHandInfo: [
      ...state.panesShortHandInfo.slice(0, index),
      { ...state.panesShortHandInfo[index], [key]: value },
      ...state.panesShortHandInfo.slice(index + 1)
    ]
  };
};

const editPropertyofPanes = (state = INITIAL_STATE, action) => {
  const { key, value } = action.payload;
  return {
    ...state,
    panesShortHandInfo: state.panesShortHandInfo.map((pane) => ({ ...pane, [key]: value }))
  };
};

const setPointInfoforPanes = (state = INITIAL_STATE, action) => {
  const { time } = action.payload;
  const modPanesData = state.panesData?.map((pane, index) => {
    const obj = pane?.data?.map((paneData) => paneData.find((e) => e.time && e.time.getTime() === time.getTime()));
    return { ...state.panesShortHandInfo[index], pointInfoObj: obj };
  });
  return {
    ...state,
    panesShortHandInfo: modPanesData
  };
};

const removePane = (state = INITIAL_STATE, action) => {
  const index = action.payload;
  return {
    ...state,
    panesData: [...state.panesData.slice(0, index), ...state.panesData.slice(index + 1)],
    panesShortHandInfo: [...state.panesShortHandInfo.slice(0, index), ...state.panesShortHandInfo.slice(index + 1)]
  };
};

const setMachinesShortlisted = (state = INITIAL_STATE, action) => ({
  ...state,
  machinesShortlisted: action.payload
});

const setPaneFullScreen = (state = INITIAL_STATE, action) => ({
  ...state,
  paneFullScreen: true
});

const exitPaneFullScreen = (state = INITIAL_STATE, action) => ({
  ...state,
  paneFullScreen: false,
  // xMinDomain: INITIAL_STATE.xMinDomain,
  // xMaxDomain: INITIAL_STATE.xMaxDomain,
  selectedPaneNo: INITIAL_STATE.selectedPaneNo
});

const setSelectedPaneNo = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedPaneNo: action.payload
});

const toggleCompressedView = (state = INITIAL_STATE, action) => ({
  ...state,
  compressedView: !state.compressedView
});

const getPlotDataStart = (state = INITIAL_STATE) => ({
  ...state,
  loading: true
});

const getPlotDataSuccess = (state = INITIAL_STATE, action) => {
  const { plotData } = action.payload;
  // console.log('plotData in reducer', plotData, { ...lodash.merge({ ...state.plotData }, { ...plotData }) });
  return {
    ...state,
    plotData: { ...lodash.merge(lodash.cloneDeep(state.plotData), plotData) },
    loading: false
  };
};

const getPlotDataFailure = (state = INITIAL_STATE, action) => {
  const { error } = action.payload;

  return {
    ...state,
    error,
    loading: false
  };
};

const resetPanesData = (state = INITIAL_STATE, action) => ({
  ...state,
  panesData: [],
  panesShortHandInfo: []
});

const setChartType = (state = INITIAL_STATE, action) => ({
  ...state,
  chartType: action.payload
});

const setColorCodes = (state = INITIAL_STATE, action) => ({
  ...state,
  colorCodes: [...state.colorCodes, ...action.payload]
});

const setPaneOptionsStart = (state = INITIAL_STATE, action) => ({ ...state, optionsLoading: true });

const setPaneOptionsSuccess = (state = INITIAL_STATE, action) => {
  const { key, value, chartType } = action.payload;
  return { ...state, [key]: { ...state[key], [chartType]: value } };
};

const setPaneOptionsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  optionsLoading: false,
  error: action.payload
});

const HANDLERS = {
  [Types.SET_PANE_TYPE]: setPaneType,
  [Types.OPERATE_DOMAIN_RANGE]: operateDomainRange,
  [Types.SET_DOMAIN_RANGE]: setDomainRange,
  [Types.SET_DOMAIN_RANGE_IN_FULL_SCREEN]: setDomainRangeInFullScreen,
  [Types.SET_PANE_DATA]: setPaneData,
  [Types.SET_PANES_SHORT_HAND_INFO]: setPanesShortHandInfo,
  [Types.SET_MACHINES_SHORTLISTED]: setMachinesShortlisted,
  [Types.EDIT_COMPLETE_PANE_DATA]: editCompletePaneData,
  [Types.EDIT_PANE_DATA]: editPaneData,
  [Types.EDIT_PROPERTYOF_PANES]: editPropertyofPanes,
  [Types.SET_POINT_INFOFOR_PANES]: setPointInfoforPanes,
  [Types.REMOVE_PANE]: removePane,
  [Types.SET_PANE_FULL_SCREEN]: setPaneFullScreen,
  [Types.EXIT_PANE_FULL_SCREEN]: exitPaneFullScreen,
  [Types.SET_SELECTED_PANE_NO]: setSelectedPaneNo,
  [Types.TOGGLE_COMPRESSED_VIEW]: toggleCompressedView,
  [Types.RESET_PANES_DATA]: resetPanesData,

  [Types.GET_PLOT_DATA_START]: getPlotDataStart,
  [Types.GET_PLOT_DATA_SUCCESS]: getPlotDataSuccess,
  [Types.GET_PLOT_DATA_FAILURE]: getPlotDataFailure,
  [Types.SET_CHART_TYPE]: setChartType,
  [Types.SET_PANE_PLOT_DATA]: setPanePlotData,
  [Types.SET_COLOR_CODES]: setColorCodes,
  [Types.SET_PANE_OPTIONS_START]: setPaneOptionsStart,
  [Types.SET_PANE_OPTIONS_SUCCESS]: setPaneOptionsSuccess,
  [Types.SET_PANE_OPTIONS_FAILURE]: setPaneOptionsFailure
};
export const KPVChartsReducer = createReducer(INITIAL_STATE, HANDLERS);
