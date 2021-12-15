/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import lodash from 'lodash';
// import { plotData } from '../../../constants/sampleData';
import DataChart from '../Chart/DataChart.view';
// import { Creators as kpvChartingCreators } from '../Store/action';
import { Graph, GraphContainer } from './PaneCard.style';
import LegendComp from '../Legend/Legend.view';
// import EditOptionsContainer from '../EditOptions/EditOptions.view';
import TransitionChart from '../Chart/TransitionChart.view';
import NormalPaneCards from './NormalPaneCards.view';
import CompressedPaneCard from './CompressedPaneCard.view';
import FullScreenPane from './FullScreen.view';
import { Creators as kpvChartingCreators } from '../Store/action';
import { getMultiGridChartData, getSinglePaneChartData } from './getPlotDataFunctionality';
import { Creators as KPVChartsCreators } from '../Store';
import useGetMachinesShortlisted from '../../../shared/hooks/useGetMachinesShortlisted';
import { CHART_TYPES } from '../../../constants';
import Loader from '../../Loader/Loader';

export const DataGraphComponent = ({ paneData, isLastPane, padding }) => {
  const { showDetails, labelsData, pointInfoObj, xMinDomainProp, xMaxDomainProp } = paneData;
  const { colorCodes } = useSelector((state) => state.KPVCharts);
  return (
    <GraphContainer style={{ flexDirection: 'column' }}>
      {!paneData?.data && <Loader />}
      {paneData?.data?.map((ele, index) => (
        <div key={index} style={{ display: 'flex', width: '100%' }}>
          <Graph
            className='singlePane'
            height={25}
            width={(showDetails ? showDetails?.legends : true) ? '75%' : '100%'}
            paddingLeft={padding}
          >
            <DataChart
              paneData={{
                ...paneData,
                data: ele,
                paneDataPoints: paneData.data,
                pointInfoObj: pointInfoObj?.length > 0 && pointInfoObj[index],
                scaleYAxisRange: labelsData.length > 1 ? [paneData.scaleYAxisRange[index]] : paneData.scaleYAxisRange,
                color: index > 0 ? colorCodes[index] : undefined,
                xMinDomainProp,
                xMaxDomainProp
              }}
              isLastPane={paneData?.data.length - 1 === index ? isLastPane : false}
            />
          </Graph>
          {/* {console.log('pointInfoObj[index]', pointInfoObj[index])} */}
          {(showDetails ? showDetails?.legends : true) && (
            <LegendComp
              data={labelsData[index]}
              pointData={pointInfoObj?.length > 0 && pointInfoObj[index]}
              color={index > 0 ? colorCodes[index] : undefined}
            />
          )}
        </div>
      ))}
    </GraphContainer>
  );
};

export const TransitionGraphComponent = ({ paneData, isLastPane, padding }) => {
  const { showDetails, labelsData, pointInfoObj, chartType, data } = paneData;
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      {!data && <Loader />}
      {data?.length && (
        <Graph
          className='singlePane'
          height={25}
          paddingLeft={padding}
          width={(showDetails ? showDetails?.legends : true) ? '75%' : '100%'}
        >
          <TransitionChart paneData={paneData} />
        </Graph>
      )}
      {(showDetails ? showDetails?.legends : true) && labelsData?.length && (
        <LegendComp
          chartType={chartType}
          data={labelsData[0]}
          pointData={pointInfoObj}
          noColor={true}
          isLastPane={isLastPane}
        />
      )}
    </div>
  );
};

export const getPadding = (paneData, noOfAxis) => {
  if (paneData?.labelsData?.length === 1) {
    let axisCount;
    if (paneData.multiAxis) {
      axisCount = paneData.scaleYAxisRange.length;
    } else {
      return (noOfAxis - 1) * 17;
    }
    return (noOfAxis - axisCount) * 17;
  }
  return (noOfAxis - 1) * 17;
};

const PaneCard = () => {
  const {
    paneFullScreen,
    chartType,
    selectedPaneNo,
    compressedView,
    machinesShortlisted,
    plotData,
    singlePane,
    isFirstPane,
    panesShortHandInfo,
    panesData,
    loading,
    xMinDomain
  } = useSelector((state) => state.KPVCharts);
  const { KPVShortlist } = useSelector((state) => state.filterResultData);

  const upsertPaneData = useSelector((state) => state.upsertPaneData);
  const [updatePanesData, setUpdatePanesData] = useState(false);
  const dispatch = useDispatch();
  const [plotDataAvailablity, setPlotDataAvailablity] = useState(false);
  useGetMachinesShortlisted();

  useEffect(() => {
    if (!loading && plotDataAvailablity && plotData[chartType]) {
      panesShortHandInfo.forEach((pane, paneIndex) => {
        const { machinesSelected, transitionChartType, multiAxis, multiGrid, chartType } = pane;
        let tempPlotData;
        let tempObjLabel;
        if (!multiAxis || !multiGrid) {
          const [tempData, objLabel] = getSinglePaneChartData(
            plotData[chartType],
            machinesSelected,
            chartType,
            transitionChartType
          );
          tempPlotData = [tempData];
          tempObjLabel = [objLabel];
        } else {
          const obj = getMultiGridChartData(plotData[chartType], machinesSelected);
          tempPlotData = obj.tempData;
          tempObjLabel = obj.objLabel;
        }
        dispatch(
          KPVChartsCreators.setPanePlotData({
            index: paneIndex,
            data: tempPlotData,
            labelsData: tempObjLabel
          })
        );
      });
      setPlotDataAvailablity(false);
      // panesShortHandInfo[0];
    }
  }, [plotDataAvailablity, plotData]);

  useEffect(() => {
    if (panesData?.length > 0 && panesData[0].data?.length > 0) {
      if (
        !xMinDomain ||
        (panesData[0].data[0][0]?.start?.getTime() || panesData[0].data[0][0]?.time?.getTime()) !==
          new Date(xMinDomain).getTime()
      ) {
        console.log('updating domain');
        const domainObj = {
          xMinDomain: panesData[0].data[0][0]?.start || panesData[0].data[0][0]?.time,
          xMaxDomain: new Date(moment(panesData[0].data[0][0]?.start || panesData[0].data[0][0]?.time).add(30, 'm'))
        };
        // const domainObj = {
        //   xMinDomain: new Date('2021-09-30T08:00:30'),
        //   xMaxDomain: new Date(moment(new Date('2021-09-30T08:00:30')).add(30, 'm'))
        // };
        // console.log(domainObj);
        dispatch(
          kpvChartingCreators.setDomainRange({
            ...domainObj
          })
        );
      }
    }
  }, [panesData]);

  useEffect(() => {
    if (panesShortHandInfo?.length !== panesData.length) {
      console.log('getplotdata');
      const machinesWithNoPlotData = [];
      panesShortHandInfo.forEach((pane, paneIndex) => {
        const { machinesSelected, transitionChartType, chartType } = pane;
        machinesSelected.forEach((value, index) => {
          const { machineId, kpvId } = value;
          const check =
            (chartType !== CHART_TYPES.TRANSITION_CHART &&
              lodash.get(plotData, `[${chartType}][${machineId}][${kpvId}]`, []).length === 0) ||
            (chartType === CHART_TYPES.TRANSITION_CHART &&
              lodash.get(plotData, `[${chartType}][${transitionChartType}||'lots'][${machineId}]`, []).length === 0);
          if (check) {
            machinesWithNoPlotData.push({ ...value, chartType, category: transitionChartType || 'lots' });
            // machinesWithNoPlotData.push(value);
          }
        });
        if (machinesWithNoPlotData.length > 0) {
          dispatch(KPVChartsCreators.getPlotData({ kpvDetails: machinesWithNoPlotData }));
          // console.log('api call');
        }
      });
    }
    if (!plotDataAvailablity) setPlotDataAvailablity(true);
  }, []);

  return (
    <>
      {paneFullScreen && selectedPaneNo > -1 ? (
        <FullScreenPane />
      ) : (
        <>{compressedView ? <CompressedPaneCard /> : <NormalPaneCards />}</>
      )}
    </>
  );
};

export default memo(PaneCard);
