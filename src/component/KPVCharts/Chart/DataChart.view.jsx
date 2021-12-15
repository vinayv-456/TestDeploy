/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Chart, {
  AdaptiveLayout,
  ArgumentAxis,
  CommonSeriesSettings,
  ConstantLine,
  Grid,
  Label,
  Legend,
  Point,
  Series,
  Tick,
  Tooltip,
  ValueAxis,
  ZoomAndPan
} from 'devextreme-react/chart';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { colors, fontFamily } from '../../../constants';
import { useWindowSize } from '../../../shared/hooks/useWindowResize';
import useViewLabels from './hooks/useViewLabels';
import useContainerWidth from './hooks/useContainerWidth';
import { Creators as kpvChartingCreators } from '../Store/action';

// export const colorCodes = ['#6900FF', '#F200BA', '#398BFF', '#A000E4', 'red', 'yellow', 'green', 'orange'];

const chartStyles = {
  height: '100%',
  padding: '0px 0px 10px 10px',
  width: '100%',
  minHeight: '20rem'
};

const DataChart = ({ paneData, isLastPane }) => {
  const {
    index,
    data,
    paneDataPoints,
    labelsData: labels,
    showDetails,
    multiAxis,
    scaleYaxis,
    scaleYAxisRange,
    color,
    pointInfoObj: pointData,
    xMinDomainProp,
    xMaxDomainProp
  } = paneData;
  // const { 'y-axis': yAxis, 'x-axis': xAxis, legends } = showDetails;
  const {
    xMinDomain,
    xMaxDomain,
    paneFullScreen,
    compressedView,
    xMinDomainFullScreen,
    xMaxDomainFullScreen,
    colorCodes
  } = useSelector((state) => state.KPVCharts);
  const { theme } = useSelector((state) => state.configData);
  const { showSideNav } = useSelector((state) => state.home);
  const [containerWidth, setContainerWidth] = useState(0);
  const [width] = useWindowSize();
  const [viewXLabels, setViewXLabels] = useState(true);
  useViewLabels(setViewXLabels, compressedView);
  const location = useLocation();
  useContainerWidth(index, setContainerWidth, showSideNav, width, showDetails?.legends);
  const dispatch = useDispatch();
  // const getVisualRange = () => {
  //   if (scaleYaxis === 'manual' && scaleYAxisRange[0]?.from !== '') {
  //     return {
  //       visualRange: [scaleYAxisRange[0]?.from, scaleYAxisRange[0]?.to]
  //     };
  //   }
  //   return {};
  // };
  const getPointInfo = (pointInfo) => {
    const pointInfoObj = { ...pointInfo.point.data };

    if (!compressedView && pointInfoObj.time !== pointData?.time) {
      if (paneDataPoints?.length > 1) {
        // eslint-disable-next-line arrow-body-style
        const obj = paneDataPoints.map((dataEle, i) => {
          // dataEle.find((e) => e.time.getTime() === pointInfoObj.time.getTime())
          // console.log('a', moment(e.time).diff(moment(pointInfoObj.time), 'seconds'));
          return dataEle.find(
            (e) =>
              // console.log(i, Math.floor(e.time.getTime() / 1000), Math.floor(pointInfoObj.time.getTime() / 1000));
              Math.floor(e.time.getTime() / 1000) === Math.floor(pointInfoObj.time.getTime() / 1000)
          );
          // return dataEle.find((e) => moment(e.time).diff(moment(pointInfoObj.time), 'seconds' === 0));
        });
        // console.log('obj', obj);
        dispatch(kpvChartingCreators.editPaneData({ index, key: 'pointInfoObj', value: obj }));
      } else {
        dispatch(kpvChartingCreators.editPaneData({ index, key: 'pointInfoObj', value: [pointInfoObj] }));
      }
    } else if (compressedView) {
      dispatch(kpvChartingCreators.setPointInfoforPanes({ time: pointInfoObj.time }));
    }
    return { text: '' };
  };

  const getYAxisLabel = () => (
    <Label
      visible={showDetails ? showDetails['y-axis'] : true}
      font={{ family: fontFamily.circularBook, size: 14, color: colors[theme].contrast.primary }}
    />
  );
  return (
    <Chart
      id={`chart${index}`}
      dataSource={data}
      // style={!paneFullScreen ? { maxHeight: '50rem', ...chartStyles } : { ...chartStyles }}
      style={chartStyles}
      size={{ width: containerWidth }}
      rotated={null}
    >
      {console.log(xMaxDomainProp, xMinDomainProp)}
      {/* {console.log('location', location.pathname === '/home/kpv-charting/edit-pane')} */}
      {/* <AdaptiveLayout /> */}
      {/* <ZoomAndPan argumentAxis='both' valueAxis='both' /> */}
      <ArgumentAxis
        // tickInterval={300000}
        // visualRange={
        //   location.pathname === '/home/kpv-charting/edit-pane' || location.pathname === '/home/kpv-charting/add-pane'
        //     ? [null, null]
        //     : [xMinDomain, xMaxDomain]
        // }
        visualRange={
          !paneFullScreen
            ? [xMinDomainProp || xMinDomain, xMaxDomainProp || xMaxDomain]
            : [xMinDomainFullScreen, xMaxDomainFullScreen]
        }
        color={colors[theme].contrast.lightSecondary}
      >
        {pointData?.time && (
          <ConstantLine
            width={1}
            value={pointData.time}
            color={colors[theme].contrast.lightSecondary}
            dashStyle='solid'
          >
            <Label text={moment(pointData.time).format('HH:mm')} position='outside' />
          </ConstantLine>
        )}
        <Grid visible={true} width={1} color={colors[theme].contrast.lightSecondary} />
        <Label
          visible={showDetails ? (showDetails['x-axis'] && viewXLabels) || isLastPane === true : true}
          font={{ family: fontFamily.circularBook, size: 14, color: colors[theme].contrast.primary }}
          customizeText={(tick) => moment(tick.value).format('HH:mm')}
          // rotationAngle={45}
          rotationAngle={0}
          overlappingBehavior='rotate'
        />
      </ArgumentAxis>
      {!multiAxis && (
        <ValueAxis
          // visualRange={[0, null]}
          // tickInterval={2}
          allowDecimals={true}
          visualRange={
            scaleYaxis === 'manual' &&
            scaleYAxisRange[0] !== undefined &&
            scaleYAxisRange[0]?.from !== '' &&
            scaleYAxisRange[0]?.to !== ''
              ? [scaleYAxisRange[0]?.from, scaleYAxisRange[0]?.to]
              : [null, null]
          }
          color={colors[theme].contrast.lightSecondary}
        >
          <Grid visible={true} width={1} color={colors[theme].contrast.lightSecondary} />
          {getYAxisLabel()}
          {/* <Label visible={false} /> */}
        </ValueAxis>
      )}
      {multiAxis && data?.length > 0 && scaleYAxisRange?.length > 0
        ? // need to have atleast one valueAxis so add it until data is ready
          Object.keys(data[1]).map(
            (key, index) =>
              key !== 'time' && (
                <ValueAxis
                  allowDecimals={true}
                  key={index}
                  name={key}
                  multipleAxesSpacing={10}
                  // tickInterval={2}
                  // {...getVisualRange(index)}
                  visualRange={
                    scaleYaxis === 'manual' &&
                    scaleYAxisRange[0] !== undefined &&
                    scaleYAxisRange[index - 1]?.from !== '' &&
                    scaleYAxisRange[index - 1]?.to !== ''
                      ? [scaleYAxisRange[index - 1]?.from, scaleYAxisRange[index - 1]?.to]
                      : [null, null]
                  }
                  color={color || colorCodes[index - 1]}
                >
                  {getYAxisLabel()}
                  {/* <Label visible={false} /> */}
                </ValueAxis>
              )
          )
        : multiAxis && <ValueAxis name='value' color='red' />}
      {/* <ValueAxis name='value999' /> */}
      <Legend visible={false} customizeText={(item) => labels[item.seriesName]} font={{ size: 60 }} />
      <CommonSeriesSettings argumentField='time' type='spline' allowDecimals={true}>
        <Tick visible={true} />
        <Grid visible={true} width={1} />
        {/* <Label font={{ family: fontFamily.circularBook, size: 14 }} /> */}
        {/* <MinorTick visible={true} /> */}
        {/* <Label visible={true}>
        <Connector visible={true} />
      </Label> */}

        <Point size={0} />
      </CommonSeriesSettings>
      {index > -1 && <Tooltip enabled={true} customizeTooltip={getPointInfo} />}
      {data?.length > 0 &&
        Object.keys(data[1]).map(
          (key, index) =>
            key !== 'time' && (
              <Series
                key={index}
                valueField={key}
                name={key}
                axis={!multiAxis ? null : key}
                color={color || colorCodes[index - 1]}
              />
            )
        )}
    </Chart>
  );
};

export default DataChart;
