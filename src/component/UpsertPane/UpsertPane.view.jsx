/* eslint-disable quotes */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import lodash from 'lodash';
import { ForwardNavArrow } from '../../assets/icons/KPV';
import { Creators as LayoutCreator } from '../../views/Layout/store';
import { Creators as KPVChartsCreators } from '../KPVCharts/Store';
import { Creators as UpsertPaneCreators } from './Store';
import Chart from '../KPVCharts/Chart/DataChart.view';
import {
  Button,
  ChartContainer,
  Container,
  ContentContainer,
  Graph,
  Header,
  NavigationDiv,
  OptIcon
} from './UpsertPane.style';
import SidePanel from './SidePanel.view';
import LegendComp from '../KPVCharts/Legend/Legend.view';
import { getMultiGridChartData, getSinglePaneChartData } from '../KPVCharts/PaneCard/getPlotDataFunctionality';
import TransitionChart from '../KPVCharts/Chart/TransitionChart.view';
import { chartOptions } from '../../constants/sampleData';
import useGetMachinesShortlisted from '../../shared/hooks/useGetMachinesShortlisted';
import { CHART_TYPES } from '../../constants';
import DynamicSVGIcon from '../Common/DynamicSVGIcon';

const UpsertPane = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    plotData,
    labelsData,
    machinesSelected,
    paneTitle,
    showDetails,
    multiAxis,
    scaleYaxis,
    scaleYAxisRange,
    multiGrid,
    chartType,
    transitionChartType: transChartType
  } = useSelector((state) => state.upsertPaneData);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const { plotData: graphData, loading, colorCodes } = useSelector((state) => state.KPVCharts);
  const [plotDataAvailablity, setPlotDataAvailablity] = useState(false);
  const { selectedPaneNo } = useSelector((state) => state.KPVCharts);
  const [transitionChartType, setTransitionChartType] = useState(transChartType);
  useEffect(() => {
    setTransitionChartType(transChartType || 'lots');
  }, [transChartType]);
  useGetMachinesShortlisted();
  useEffect(() => {
    // default range
    dispatch(LayoutCreator.setShowSideNav({ showSideNav: false }));
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'multiSelectKpv',
        value: machinesSelected.length > 1
      })
    );
    return () => {
      dispatch(LayoutCreator.setShowSideNav({ showSideNav: true }));
      dispatch(KPVChartsCreators.setSelectedPaneNo(''));
    };
  }, []);

  useEffect(() => {
    if (!loading && plotDataAvailablity) {
      let tempPlotData;
      let tempObjLabel;
      if (!multiAxis || !multiGrid) {
        const [tempData, objLabel] = getSinglePaneChartData(
          graphData[chartType],
          machinesSelected,
          chartType,
          transitionChartType
        );
        tempPlotData = [tempData];
        tempObjLabel = [objLabel];
      } else {
        const obj = getMultiGridChartData(graphData[chartType], machinesSelected);
        tempPlotData = obj.tempData;
        tempObjLabel = obj.objLabel;
      }
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'plotData',
          value: tempPlotData
        })
      );
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'labelsData',
          value: tempObjLabel
        })
      );
      setPlotDataAvailablity(false);
    }
  }, [plotDataAvailablity, graphData]);

  useEffect(() => {
    const machinesWithNoPlotData = [];
    machinesSelected.forEach((value, index) => {
      const { machineId, kpvId } = value;
      const check =
        (chartType !== CHART_TYPES.TRANSITION_CHART &&
          lodash.get(graphData, `[${chartType}][${machineId}][${kpvId}]`, []).length === 0) ||
        (chartType === CHART_TYPES.TRANSITION_CHART &&
          lodash.get(graphData, `[${chartType}][${transitionChartType}][${machineId}]`, []).length === 0);
      if (check) {
        machinesWithNoPlotData.push({ ...value, chartType, category: transitionChartType || 'lots' });
        // machinesWithNoPlotData.push(value);
      }
    });
    if (machinesWithNoPlotData.length > 0) {
      dispatch(KPVChartsCreators.getPlotData({ kpvDetails: machinesWithNoPlotData }));
      // console.log('api call');
    }
    if (!plotDataAvailablity) setPlotDataAvailablity(true);
  }, [machinesSelected, multiAxis, multiGrid, transitionChartType]);

  const handleAddPane = () => {
    const paneInfoObj = {
      data: plotData,
      labelsData,
      paneTitle,
      showDetails,
      multiAxis,
      scaleYaxis,
      scaleYAxisRange,
      machinesSelected,
      chartType,
      transitionChartType,
      multiGrid
    };
    if (!selectedPaneNo && selectedPaneNo !== 0) {
      dispatch(KPVChartsCreators.setPaneData([paneInfoObj]));
    } else {
      dispatch(
        KPVChartsCreators.editCompletePaneData({
          index: selectedPaneNo,
          paneInfo: paneInfoObj
        })
      );
    }
    dispatch(UpsertPaneCreators.resetUpsertPaneData());
    history.push('/home/kpv-charting');
  };

  const handleDiscard = () => {
    dispatch(UpsertPaneCreators.resetUpsertPaneData());
    history.push('/home/kpv-charting');
  };

  const handleBack = () => {
    dispatch(UpsertPaneCreators.resetUpsertPaneData());
    history.goBack();
  };

  return (
    <Container>
      <Header>
        <NavigationDiv>
          <OptIcon rotate={180} onClick={handleBack}>
            <DynamicSVGIcon iconUrl={ForwardNavArrow} width='2.5rem' />
          </OptIcon>

          {!selectedPaneNo && selectedPaneNo !== 0 ? (
            <span>{localeStrings.Charts || 'Charts'}</span>
          ) : (
            <span>
              {chartOptions.find((ele) => ele.value === chartType).label}
              {`-${localeStrings.Edit || 'Edit'} ${localeStrings.Pane || 'Pane'}`}
            </span>
          )}
        </NavigationDiv>
        <div>
          <Button onClick={handleDiscard}>{localeStrings.Discard || 'Discard'}</Button>
          <Button className='dark' onClick={handleAddPane}>
            {!selectedPaneNo && selectedPaneNo !== 0 ? localeStrings.Add || 'Add' : localeStrings.apply || 'Apply'}
          </Button>
        </div>
      </Header>
      <ContentContainer>
        <ChartContainer>
          {plotData?.map((plotDataEle, index) => (
            // div style={{ display: 'flex', flex: 1, height: '100%', width: '100%' }}
            <Graph key={index} length={plotData?.length}>
              {chartType === CHART_TYPES.DATA_CHART && (
                <Chart
                  paneData={{
                    data: plotDataEle,
                    labelsData: labelsData[index],
                    paneTitle,
                    showDetails,
                    multiAxis,
                    scaleYaxis,
                    scaleYAxisRange: labelsData.length > 1 ? [scaleYAxisRange[index]] : scaleYAxisRange,
                    color: index > 0 ? colorCodes[index] : undefined
                  }}
                />
              )}
              {chartType === CHART_TYPES.TRANSITION_CHART && (
                <TransitionChart
                  paneData={{
                    data: [plotDataEle],
                    labelsData: labelsData[index],
                    paneTitle,
                    showDetails,
                    transitionChartType
                    // multiAxis,
                    // scaleYaxis,
                    // scaleYAxisRange: labelsData.length > 1 ? [scaleYAxisRange[index]] : scaleYAxisRange,
                  }}
                />
              )}
            </Graph>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {showDetails?.legends &&
              labelsData
                .flat()
                ?.map((labelEle, index) => (
                  <LegendComp
                    key={index}
                    data={labelEle}
                    position='bottom'
                    color={index > 0 ? colorCodes[index] : undefined}
                    noColor={chartType === CHART_TYPES.TRANSITION_CHART}
                  />
                ))}
          </div>
        </ChartContainer>
        <SidePanel />
      </ContentContainer>
    </Container>
  );
};

export default UpsertPane;
