/* eslint-disable max-len */
import { createReducer } from 'reduxsauce';
import { CHART_TYPES } from '../../../constants';
import { Types } from './action';

const INITIAL_STATE = {
  paneTitle: '',
  chartType: CHART_TYPES.DATA_CHART,
  plotData: [],
  labelsData: [],
  machinesSelected: [],
  multiSelectKpv: false,
  showDetails: {
    'y-axis': true,
    'x-axis': true,
    legends: true,
    annotatedPts: false
  },
  multiAxis: false,
  singleGrid: true,
  scaleYaxis: 'auto',
  scaleYAxisRange: [],
  multiGrid: false
};

const setUpsertPaneData = (state = INITIAL_STATE, action) => ({
  ...state,
  [action.payload.key]: action.payload.value
});

const setCompleteUpsertPaneData = (state = INITIAL_STATE, action) => {
  const {
    paneTitle,
    plotData,
    labelsData,
    machinesSelected,
    multiSelectKpv,
    showDetails,
    multiAxis,
    scaleYaxis,
    scaleYAxisRange,
    multiGrid,
    chartType,
    transitionChartType
  } = action.payload;
  return {
    ...state,
    paneTitle,
    plotData,
    labelsData,
    machinesSelected,
    multiSelectKpv,
    showDetails,
    multiAxis,
    scaleYaxis,
    scaleYAxisRange,
    multiGrid,
    chartType,
    transitionChartType
  };
};

const setShowDetails = (state = INITIAL_STATE, action) => ({
  ...state,
  showDetails: { ...state.showDetails, [action.payload.key]: action.payload.value }
});

const resetUpsertPaneData = () => INITIAL_STATE;

const HANDLERS = {
  [Types.SET_UPSERT_PANE_DATA]: setUpsertPaneData,
  [Types.SET_SHOW_DETAILS]: setShowDetails,
  [Types.RESET_UPSERT_PANE_DATA]: resetUpsertPaneData,
  [Types.SET_COMPLETE_UPSERT_PANE_DATA]: setCompleteUpsertPaneData
};
export const UpsertPaneReducer = createReducer(INITIAL_STATE, HANDLERS);
