/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHART_TYPES } from '../../../constants';
import { Creators as kpvChartingCreators } from '../Store/action';
import { Container, Graph, GraphContainer, Header } from './PaneCard.style';
import { DataGraphComponent, getPadding, TransitionGraphComponent } from './PaneCard.view';

const CompressedPaneCard = () => {
  const { panesData: panesPlotData, panesShortHandInfo } = useSelector((state) => state.KPVCharts);
  const [panesData, setPanesData] = useState([]);
  useEffect(() => {
    setPanesData(
      panesShortHandInfo.map((e, index) => ({
        ...e,
        ...panesPlotData[index]
      }))
    );
  }, [panesPlotData, panesShortHandInfo]);
  const dispatch = useDispatch();
  const [noOfAxis, setNoOfAxis] = useState(1);
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
    <Container>
      {panesData.map((paneData, index) => (
        <React.Fragment key={index}>
          {paneData.chartType === CHART_TYPES.DATA_CHART && (
            <DataGraphComponent
              key={index}
              paneData={{ ...paneData, index }}
              isLastPane={index === panesData.length - 1}
              padding={getPadding(paneData, noOfAxis)}
            />
          )}
          {paneData.chartType === CHART_TYPES.TRANSITION_CHART && (
            <TransitionGraphComponent
              padding={getPadding(paneData, noOfAxis)}
              paneData={{ ...paneData, index }}
              isLastPane={index === panesData.length - 1}
            />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default CompressedPaneCard;
