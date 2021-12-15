/* eslint-disable quotes */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataChart from '../Chart/DataChart.view';
import TransitionChart from '../Chart/TransitionChart.view';
import { Container, Graph, GraphContainer, Header } from './PaneCard.style';
import LegendComp from '../Legend/Legend.view';
import { CHART_TYPES } from '../../../constants';
import { Creators as kpvChartingCreators } from '../Store/action';

const FullScreenPane = () => {
  const {
    panesData: panesPlotData,
    panesShortHandInfo,
    selectedPaneNo,
    xMinDomain,
    xMaxDomain,
    colorCodes
  } = useSelector((state) => state.KPVCharts);
  const dispatch = useDispatch();
  const [panesData, setPanesData] = useState([]);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  useEffect(() => {
    setPanesData(
      panesShortHandInfo.map((e, index) => ({
        ...e,
        ...panesPlotData[index]
      }))
    );
  }, [panesPlotData, panesShortHandInfo]);

  useEffect(() => {
    dispatch(
      kpvChartingCreators.setDomainRangeInFullScreen({
        xMinDomainFullScreen: xMinDomain,
        xMaxDomainFullScreen: xMaxDomain
      })
    );
  }, []);

  const { data, labelsData, paneTitle, scaleYAxisRange, chartType } = panesData[selectedPaneNo] || [];
  return (
    <Container className='fullscreen'>
      {/* {console.log({ chartType })} */}
      {paneTitle ? (
        <Header>{paneTitle || 'Pane Title'}</Header>
      ) : (
        <Header>{`${localeStrings.Pane || 'Pane'} ${localeStrings.Title || 'Title'}`}</Header>
      )}
      <GraphContainer className='fullscreen'>
        {data?.map((ele, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
            <Graph width='100%' className='fullscreen'>
              {chartType === CHART_TYPES.DATA_CHART && (
                <DataChart
                  paneData={{
                    ...panesData[selectedPaneNo],
                    data: ele,
                    scaleYAxisRange: labelsData.length > 1 ? [scaleYAxisRange[index]] : scaleYAxisRange,
                    color: index > 0 ? colorCodes[index] : undefined
                  }}
                />
              )}
              {chartType === CHART_TYPES.TRANSITION_CHART && (
                <TransitionChart paneData={{ ...panesData[selectedPaneNo], data: [ele] }} />
              )}
            </Graph>
            <LegendComp
              data={labelsData[index]}
              position='bottom'
              color={index > 0 ? colorCodes[index] : undefined}
              noColor={chartType === CHART_TYPES.TRANSITION_CHART}
            />
          </div>
        ))}
      </GraphContainer>
    </Container>
  );
};
export default FullScreenPane;
