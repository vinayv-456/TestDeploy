/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { CHART_TYPES } from '../../../constants';
// import { colorCodes } from '../Chart/DataChart.view';

import {
  ColorLabel,
  ColorLabelText,
  LegendContainer,
  LegendContainerBtm,
  LegendItemContainer,
  LegendItemContainerBtm
} from './Legend.style';

const LegendComp = ({ data, pointData, color, position = 'right', noColor = false, chartType }) => {
  const { colorCodes } = useSelector((state) => state.KPVCharts);
  return (
    <>
      {/* {console.log({ chartType })} */}
      {position === 'right' ? (
        <LegendContainer>
          {/* <LegendItem /> */}
          {data &&
            Object.keys(data).length > 0 &&
            Object.keys(data).map((item, index) => (
              <LegendItemContainer key={item}>
                {!noColor && <ColorLabel bgColor={color || colorCodes[index]} />}
                {chartType === CHART_TYPES.TRANSITION_CHART ? (
                  <div>
                    {/* <ColorLabelText>{pointData ? `${data[item]} (${pointData[item]})` : `${data[item]}`}</ColorLabelText> */}
                    <ColorLabelText>
                      {`${data[item]} `} {pointData?.machine === data[item] ? `(${pointData?.label})` : '(N/A)'}
                    </ColorLabelText>
                    {/* <ColorLabelText>
                    {pointData?.machine === data[item] ? `(${pointData?.label})` : '(N/A)'}
                  </ColorLabelText> */}
                  </div>
                ) : (
                  <div>
                    {/* <ColorLabelText>{pointData ? `${data[item]} (${pointData[item]})` : `${data[item]}`}</ColorLabelText> */}
                    <ColorLabelText>{`${data[item]}`}</ColorLabelText>
                    <ColorLabelText>
                      {pointData &&
                        (pointData[item] !== undefined
                          ? `(${pointData[item]})`
                          : pointData?.value !== undefined
                          ? `(${pointData.value})`
                          : '(N/A)')}
                    </ColorLabelText>
                  </div>
                )}
              </LegendItemContainer>
            ))}
        </LegendContainer>
      ) : (
        <LegendContainerBtm>
          {Object.keys(data).length > 0 &&
            Object.keys(data).map((item, index) => (
              <LegendItemContainerBtm key={item}>
                {!noColor && <ColorLabel bgColor={color || colorCodes[index]} />}
                <ColorLabelText>{data[item]}</ColorLabelText>
              </LegendItemContainerBtm>
            ))}
        </LegendContainerBtm>
      )}
    </>
  );
};

export default memo(LegendComp);
