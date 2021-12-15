/* eslint-disable no-const-assign */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  Chart,
  CommonSeriesSettings,
  Legend,
  SeriesTemplate,
  Animation,
  ArgumentAxis,
  Tick,
  Title,
  Label,
  ValueAxis,
  Grid,
  Series,
  Point,
  Tooltip
} from 'devextreme-react/chart';
import { colors, fontFamily } from '../../../constants';
import useViewLabels from './hooks/useViewLabels';
import useContainerWidth from './hooks/useContainerWidth';
import { useWindowSize } from '../../../shared/hooks/useWindowResize';
import { Creators as kpvChartingCreators } from '../Store/action';

const TransitionChart = ({ paneData, isLastPane }) => {
  const { theme } = useSelector((state) => state.configData);
  const { index, data, showDetails, transitionChartType, pointInfoObj: pointData } = paneData;
  const { xMinDomain, xMaxDomain, xMinDomainFullScreen, xMaxDomainFullScreen, paneFullScreen, compressedView } =
    useSelector((state) => state.KPVCharts);
  const [viewXLabels, setViewXLabels] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const { showSideNav } = useSelector((state) => state.home);
  const [width] = useWindowSize();
  const dispatch = useDispatch();
  useViewLabels(setViewXLabels, compressedView);
  useContainerWidth(index, setContainerWidth, showSideNav, width, showDetails?.legends);

  const chartStyles = {
    height: '100%',
    padding: '0px 0px 10px 10px',
    width: '100%',
    minHeight: '20rem',
    position: 'relative'
  };

  const getPointInfo = (pointInfo) => {
    const pointInfoObj = { ...pointInfo.point.data };
    // console.log({ pointInfoObj });
    // if (!compressedView) {
    dispatch(kpvChartingCreators.editPaneData({ index, key: 'pointInfoObj', value: pointInfoObj }));
    // }
    return { text: '' };
  };

  // var data1;
  const customizeSeries = (seriesName) => ({ color: data[0].find((e) => e.label === seriesName).color });

  return (
    <Chart
      id={`chart${index}`}
      dataSource={data[0]}
      // style={{ height: '100%' }}
      style={chartStyles}
      size={{ width: containerWidth }}
      barGroupPadding={0.2}
      rotated={true}
    >
      {/* {console.log(paneData)} */}
      <ArgumentAxis
        // categories={['CPA004', 'CPA003', 'CPA001']}
        color={colors[theme].contrast.lightSecondary}
      >
        <Grid visible={true} width={1} color={colors[theme].contrast.lightSecondary} />
        <Label
          // visible={showDetails ? showDetails['y-axis'] : true}
          visible={false}
          font={{ family: fontFamily.circularBook, size: 14, color: colors[theme].contrast.primary }}
          rotationAngle={30}
        />
      </ArgumentAxis>
      <ValueAxis color={colors[theme].contrast.lightSecondary}>
        <Grid visible={true} width={1} color={colors[theme].contrast.lightSecondary} />
        <Label
          visible={showDetails ? (showDetails['x-axis'] && viewXLabels) || isLastPane === true : true}
          // visible={false}
          visualRange={!paneFullScreen ? [xMinDomain, xMaxDomain] : [xMinDomainFullScreen, xMaxDomainFullScreen]}
          // visualRange={[xMinDomain, xMaxDomain]}
          font={{ family: fontFamily.circularBook, size: 14, color: colors[theme].contrast.primary }}
          customizeText={(tick) => moment(tick.value).format('HH:mm')}
          // rotationAngle={45}
          rotationAngle={0}
          overlappingBehavior='rotate'
        />
      </ValueAxis>
      <CommonSeriesSettings
        type='rangeBar'
        argumentField='machine'
        rangeValue1Field='start'
        rangeValue2Field='end'
        barOverlapGroup='machine'
      >
        <Grid visible={true} width={1} />
      </CommonSeriesSettings>
      {index > -1 && <Tooltip enabled={true} customizeTooltip={getPointInfo} />}
      <Legend visible={false} verticalAlignment='bottom' horizontalAlignment='center' />
      {/* {console.log('seriesRef', seriesRef)} */}
      <SeriesTemplate nameField='label' customizeSeries={customizeSeries} />
      <Animation enabled={false} />
    </Chart>
  );
};

export default TransitionChart;
