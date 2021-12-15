/* eslint-disable no-empty */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { BtnWrapper, Button, Heading } from '../../Common/PopUpModal/Modal.style';
import PopUpModal from '../../Common/PopUpModal/Modal.view';
import { Creators as LayoutCreator } from '../../../views/Layout/store';
import {
  ChartOptContainer,
  ChartTypeText,
  DropDownButton,
  DropDownContainer,
  DropdownImage,
  ItemText,
  PaneButton,
  PaneOptContainer
} from './PlotOptionsModal.style';
import { DropDownArrow } from '../../../assets/icons';
import { Creators as kpvChartingCreators } from '../../KPVCharts/Store/action';
// import { Creators as UpsertPaneCreators } from '../../UpsertPane/Store';
// import { plotData } from '../../../constants/sampleData';
import { chartOptions } from '../../../constants/sampleData';
import { getSinglePaneChartData } from '../../KPVCharts/PaneCard/getPlotDataFunctionality';
import { CHART_TYPES } from '../../../constants';
import Loader from '../../Loader/Loader';
import { generateRandomColor } from '../../../shared/utility/generateRandomColor';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const PlotOptionsModal = (props) => {
  const { setShowPlotOptModal } = props;
  const dispatch = useDispatch();
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const paneOptions = [{ label: 'Single Pane' }, { label: 'Different Pane' }];
  const [selectedChart, SetSelectedChart] = useState(chartOptions[0]);
  const [showChartTypeDropdown, setShowChartTypeDropdown] = useState(false);
  const history = useHistory();
  const { KPVShortlist } = useSelector((state) => state.filterResultData);
  const { singlePane, paneData, machinesShortlisted, plotData, colorCodes } = useSelector((state) => state.KPVCharts);
  const [selectedPane, setSelectedPane] = useState(singlePane ? paneOptions[0].label : paneOptions[1].label);
  const upsertPaneData = useSelector((state) => state.upsertPaneData);
  const [updatePanesData, setUpdatePanesData] = useState(false);
  const [plotLoader, setPlotLoader] = useState(false);
  const closeModal = () => {
    setShowPlotOptModal(false);
  };

  useEffect(() => {
    const machines = [];
    KPVShortlist.forEach((e) => {
      if (!machines.includes(e.machineName)) {
        machines.push({
          kpvId: e.id,
          machineId: e.machineId,
          machineName: e.machineName,
          groupName: e.groupName,
          kpvName: e.KPV
        });
      }
    });
    dispatch(kpvChartingCreators.setMachinesShortlisted(machines));
  }, []);

  const getMultiPaneChartData = () => {
    const uniqueMachines = [];
    machinesShortlisted.forEach((e) => {
      if (!uniqueMachines.find((ele) => ele.machineId === e.machineId)) {
        uniqueMachines.push(e);
      }
    });
    (selectedChart.value === CHART_TYPES.DATA_CHART ? machinesShortlisted : uniqueMachines).forEach((machine) => {
      const paneDetailsObj = {};
      let transitionChartType;
      const { machineName, groupName, machineId, kpvId, kpvName } = machine;

      switch (selectedChart.value) {
        default:
        case CHART_TYPES.DATA_CHART: {
          paneDetailsObj.data = [plotData[selectedChart.value][machineId][kpvId]];
          paneDetailsObj.labelsData = [{ temp: `${machineName}: ${kpvName}` }];
          break;
        }

        case CHART_TYPES.TRANSITION_CHART: {
          paneDetailsObj.data = [plotData[selectedChart.value].lots[machineId]];
          paneDetailsObj.labelsData = [{ [`${machineId}`]: machineName }];

          transitionChartType = 'lots';
          break;
        }
      }
      dispatch(
        kpvChartingCreators.setPaneData([
          {
            ...upsertPaneData,
            ...paneDetailsObj,
            machinesSelected: [{ machineId, kpvId, machineName, groupName, kpvName }],
            chartType: selectedChart.value,
            transitionChartType
          }
        ])
      );
    });
  };

  const handlePane = (label) => {
    setSelectedPane(label);
    if (label === 'Single Pane') {
      dispatch(kpvChartingCreators.setPaneType(true));
    } else {
      dispatch(kpvChartingCreators.setPaneType(false));
    }
  };

  const getGraphData = () => {
    if (singlePane) {
      const [tempData, objLabel, machines] = getSinglePaneChartData(
        plotData[selectedChart.value],
        machinesShortlisted,
        selectedChart.value,
        'lots'
      );

      if (tempData.length > 0) {
        dispatch(
          kpvChartingCreators.setPaneData([
            {
              ...upsertPaneData,
              data: [tempData],
              labelsData: [objLabel],
              machinesSelected: machines,
              chartType: selectedChart.value,
              transitionChartType: selectedChart.value === CHART_TYPES.TRANSITION_CHART && 'lots'
            }
          ])
        );
      }
    } else {
      getMultiPaneChartData();
    }
    setUpdatePanesData(false);
    setPlotLoader(false);
    history.push('/home/kpv-charting');
  };

  useEffect(() => {
    if (updatePanesData && Object.keys(plotData).length) {
      getGraphData();
    }
  }, [plotData]);

  const handleCharts = () => {
    setPlotLoader(true);
    dispatch(LayoutCreator.setShowSideNav({ showSideNav: false }));
    dispatch(kpvChartingCreators.resetPanesData());
    const generatedColorCodes = [];
    let i = 0;
    while (i < machinesShortlisted.length - colorCodes.length) {
      generatedColorCodes.push(generateRandomColor());
      i += 1;
    }
    if (generatedColorCodes.length > 0) {
      dispatch(kpvChartingCreators.setColorCodes(generatedColorCodes));
    }
    const machineIds = machinesShortlisted.map((e) => ({
      machineId: e.machineId,
      kpvId: e.kpvId,
      machineName: e.machineName,
      chartType: selectedChart.value,
      category: 'lots'
    }));
    // dispatch(kpvChartingCreators.getPlotData({ machineIds, chartType: selectedChart.value, category: 'lots' }));
    dispatch(kpvChartingCreators.getPlotData({ kpvDetails: machineIds }));
    setUpdatePanesData(true);
  };

  return (
    <PopUpModal style={{ position: 'relative' }} closeModalHandler={setShowPlotOptModal}>
      {plotLoader && (
        <PopUpModal
          style={{ backgroundColor: 'transparent', width: '100%', height: '100%' }}
          closeModalHandler={setPlotLoader}
          preventClose={true}
        >
          <Loader />
        </PopUpModal>
      )}
      <Heading>{localeStrings.plotOptions || 'Plot Options'}</Heading>
      <PaneOptContainer>
        {paneOptions.map((opt, index) => (
          <PaneButton
            key={index}
            className={selectedPane === opt.label ? 'active' : ''}
            onClick={() => handlePane(opt.label)}
          >
            {opt.label}
          </PaneButton>
        ))}
      </PaneOptContainer>
      <ChartOptContainer
        onClick={() => {
          setShowChartTypeDropdown(!showChartTypeDropdown);
        }}
      >
        <ChartTypeText className={showChartTypeDropdown ? 'active' : ''}>{selectedChart.label}</ChartTypeText>
        <DropDownButton>
          <DropdownImage className={showChartTypeDropdown ? 'active' : ''}>
            <DynamicSVGIcon iconUrl={DropDownArrow} width='2.4rem' />
          </DropdownImage>
        </DropDownButton>
        {showChartTypeDropdown && (
          <DropDownContainer>
            {chartOptions.map((opt, index) => (
              <ItemText key={index} onClick={() => SetSelectedChart(opt)}>
                {opt.label}
              </ItemText>
            ))}
          </DropDownContainer>
        )}
      </ChartOptContainer>
      <BtnWrapper>
        <Button type='button' onClick={closeModal}>
          {localeStrings.cancel || 'Cancel'}
        </Button>
        <Button type='submit' className='dark' onClick={handleCharts}>
          {localeStrings.select || 'Select'}
        </Button>
      </BtnWrapper>
    </PopUpModal>
  );
};
export default PlotOptionsModal;
