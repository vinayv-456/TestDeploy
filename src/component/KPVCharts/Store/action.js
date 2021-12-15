import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setPaneType: ['payload'],
  operateDomainRange: ['payload'],
  setDomainRange: ['payload'],
  setDomainRangeInFullScreen: ['payload'],
  setPaneData: ['payload'],
  setPanesShortHandInfo: ['payload'],
  setMachinesShortlisted: ['payload'],
  editCompletePaneData: ['payload'],
  editPaneData: ['payload'],
  editPropertyofPanes: ['payload'],
  setPointInfoforPanes: ['payload'],
  removePane: ['payload'],
  setPaneFullScreen: ['payload'],
  exitPaneFullScreen: ['payload'],
  setSelectedPaneNo: ['payload'],
  toggleCompressedView: ['payload'],
  resetPanesData: ['payload'],

  getPlotData: ['payload'],
  getPlotDataStart: ['payload'],
  getPlotDataSuccess: ['payload'],
  getPlotDataFailure: ['payload'],
  setChartType: ['payload'],
  setPanePlotData: ['payload'],
  setColorCodes: ['payload'],
  setPaneOptions: ['payload'],
  setPaneOptionsStart: ['payload'],
  setPaneOptionsSuccess: ['payload'],
  setPaneOptionsFailure: ['payload']
});

export { Types, Creators };
