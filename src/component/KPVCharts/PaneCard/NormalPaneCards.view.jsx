/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHART_TYPES } from '../../../constants';
import EditOptionsContainer from '../EditOptions/EditOptions.view';
import { Creators as kpvChartingCreators } from '../Store/action';
import { Container, Graph, GraphContainer, Header } from './PaneCard.style';
import { DataGraphComponent, getPadding, TransitionGraphComponent } from './PaneCard.view';

const NormalPaneCards = () => {
  // const { panesData, panesShortHandInfo } = useSelector((state) => state.KPVCharts);
  const { panesData: panesPlotData, panesShortHandInfo } = useSelector((state) => state.KPVCharts);
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
  const [noOfAxis, setNoOfAxis] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    let maxNoofAxis = noOfAxis;
    dispatch(kpvChartingCreators.editPropertyofPanes({ key: 'pointInfoObj', value: [] }));
    panesData.forEach((paneData) => {
      if (paneData?.multiAxis && paneData.labelsData.length === 1) {
        const axisCount = paneData.scaleYAxisRange.length;
        maxNoofAxis = axisCount > maxNoofAxis ? axisCount : maxNoofAxis;
      }
    });
    setNoOfAxis(maxNoofAxis);
  }, []);

  return (
    <>
      {panesData.map((paneData, index) => {
        const { paneTitle } = paneData;
        return (
          <Container key={index}>
            <EditOptionsContainer paneData={{ ...paneData, paneNo: index }} />
            {paneTitle ? (
              <Header>{paneTitle}</Header>
            ) : (
              <Header>{`${localeStrings.Pane || 'Pane'} ${localeStrings.Title || 'Title'}`}</Header>
            )}
            {paneData.chartType === CHART_TYPES.DATA_CHART && (
              <DataGraphComponent padding={getPadding(paneData, noOfAxis)} paneData={{ ...paneData, index }} />
            )}
            {paneData.chartType === CHART_TYPES.TRANSITION_CHART && (
              <TransitionGraphComponent padding={getPadding(paneData, noOfAxis)} paneData={{ ...paneData, index }} />
            )}
          </Container>
        );
      })}
    </>
  );
};

export default NormalPaneCards;
