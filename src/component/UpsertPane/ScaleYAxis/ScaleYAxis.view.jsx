/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ItemContainer,
  Radio,
  RadioIcon,
  ScaleEntryDiv,
  ColorLabelBox,
  ColorLabelTxt,
  LegendItemContainer,
  RangeInpDiv,
  ScaleInp
} from './ScaleYAxis.style';
import CollapsableContainer from '../CollapsableContainer/CollapsableContainer.view';
import { Creators as UpsertPaneCreators } from '../Store';

export const ManualScale = ({ isModal }) => {
  const { scaleYaxis, multiAxis, labelsData, scaleYAxisRange } = useSelector((state) => state.upsertPaneData);
  const dispatch = useDispatch();
  const { colorCodes } = useSelector((state) => state.KPVCharts);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  useEffect(() => {
    const defaultObj = { from: '', to: '' };
    if (multiAxis) {
      let yAxisRanges;
      if (labelsData.length === 1) {
        yAxisRanges = new Array(Object.keys(labelsData[0]).length);
      } else {
        yAxisRanges = new Array(labelsData.length);
      }

      yAxisRanges.fill(defaultObj);
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'scaleYAxisRange',
          value: scaleYAxisRange.length > 1 ? scaleYAxisRange : yAxisRanges
        })
      );
    } else {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'scaleYAxisRange',
          value: scaleYAxisRange.length === 1 ? scaleYAxisRange : [defaultObj]
        })
      );
    }
  }, [labelsData, multiAxis, scaleYaxis]);

  const handleRangeInp = (e, index, key) => {
    const isNumber = !Number.isNaN(parseInt(e.target.value, 10));
    if (isNumber || e.target.value[0] === '-') {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'scaleYAxisRange',
          value: [
            ...scaleYAxisRange.slice(0, index),
            { ...scaleYAxisRange[index], [key]: isNumber ? parseInt(e.target.value, 10) : '-' },
            ...scaleYAxisRange.slice(index + 1)
          ]
        })
      );
    } else {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'scaleYAxisRange',
          value: [
            ...scaleYAxisRange.slice(0, index),
            { ...scaleYAxisRange[index], [key]: '' },
            ...scaleYAxisRange.slice(index + 1)
          ]
        })
      );
    }
  };

  const RangeInputs = ({ index }) => (
    <RangeInpDiv>
      <ScaleInp
        type='text'
        value={scaleYAxisRange[index]?.from}
        placeholder={isModal ? 'start value' : ''}
        onChange={(value) => handleRangeInp(value, index, 'from')}
      />
      {isModal && <span>to</span>}
      <ScaleInp
        type='text'
        value={scaleYAxisRange[index]?.to}
        placeholder={isModal ? 'end value' : ''}
        onChange={(value) => handleRangeInp(value, index, 'to')}
      />
    </RangeInpDiv>
  );

  return (
    <>
      {scaleYaxis === 'manual' &&
        (multiAxis ? (
          <ScaleEntryDiv>
            {labelsData.length === 1 ? (
              <>
                {Object.keys(labelsData[0]).length > 0 &&
                  Object.keys(labelsData[0]).map((item, index, arr) => (
                    <React.Fragment key={item}>
                      <LegendItemContainer>
                        <ColorLabelBox bgColor={colorCodes[index]} />
                        <ColorLabelTxt>{labelsData[0][item]}</ColorLabelTxt>
                      </LegendItemContainer>
                      {/* <RangeInputs index={index} /> */}
                      <RangeInpDiv>
                        <ScaleInp
                          type='text'
                          value={scaleYAxisRange[index]?.from}
                          placeholder={isModal ? 'start value' : ''}
                          onChange={(value) => handleRangeInp(value, index, 'from')}
                        />
                        {isModal && <span>{localeStrings.to || 'to'}</span>}
                        <ScaleInp
                          type='text'
                          value={scaleYAxisRange[index]?.to}
                          placeholder={isModal ? 'end value' : ''}
                          onChange={(value) => handleRangeInp(value, index, 'to')}
                        />
                      </RangeInpDiv>
                    </React.Fragment>
                  ))}
              </>
            ) : (
              <>
                {labelsData.map(
                  (item, index, arr) =>
                    Object.keys(item).map((label, index2) => (
                      <React.Fragment key={index2}>
                        <LegendItemContainer>
                          <ColorLabelBox bgColor={colorCodes[index]} />
                          <ColorLabelTxt>{item[label]}</ColorLabelTxt>
                        </LegendItemContainer>
                        {/* <RangeInputs index={index} /> */}
                        <RangeInpDiv>
                          <ScaleInp
                            type='text'
                            value={scaleYAxisRange[index]?.from}
                            placeholder={isModal ? 'start value' : ''}
                            onChange={(value) => handleRangeInp(value, index, 'from')}
                          />
                          {isModal && <span>{localeStrings.to || 'to'}</span>}
                          <ScaleInp
                            type='text'
                            value={scaleYAxisRange[index]?.to}
                            placeholder={isModal ? 'end value' : ''}
                            onChange={(value) => handleRangeInp(value, index, 'to')}
                          />
                        </RangeInpDiv>
                      </React.Fragment>
                    ))
                  // eslint-disable-next-line function-paren-newline
                )}
              </>
            )}
          </ScaleEntryDiv>
        ) : (
          <RangeInpDiv>
            <ScaleInp
              type='text'
              value={scaleYAxisRange[0]?.from}
              placeholder={isModal ? 'start value' : ''}
              onChange={(value) => handleRangeInp(value, 0, 'from')}
            />
            {!isModal && <span>{localeStrings.to || 'to'}</span>}
            <ScaleInp
              type='text'
              placeholder={isModal ? 'end value' : ''}
              value={scaleYAxisRange[0]?.to}
              onChange={(value) => handleRangeInp(value, 0, 'to')}
            />
          </RangeInpDiv>
        ))}
    </>
  );
};

const ScaleYAxis = () => {
  const { scaleYaxis } = useSelector((state) => state.upsertPaneData);
  const dispatch = useDispatch();
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleScaleType = (value) => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'scaleYaxis',
        value
      })
    );
    if (value !== 'manual') {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'scaleYAxisRange',
          value: []
        })
      );
    }
  };

  const scaleYaxisOpt = [
    { label: 'Auto', value: 'auto' },
    // { label: 'Process Window', value: 'processWindow' },
    { label: 'Manual', value: 'manual' }
  ];

  return (
    <CollapsableContainer header={localeStrings['Scale Y-Axis'] || 'Scale Y-Axis'}>
      <>
        {scaleYaxisOpt.map((ele, index) => {
          const { label, value } = ele;
          return (
            <ItemContainer key={index}>
              <Radio onClick={() => handleScaleType(value)}>{scaleYaxis === value && <RadioIcon />}</Radio>
              {localeStrings[label] || label}
            </ItemContainer>
          );
        })}
        <ManualScale />
      </>
    </CollapsableContainer>
  );
};

export default ScaleYAxis;
