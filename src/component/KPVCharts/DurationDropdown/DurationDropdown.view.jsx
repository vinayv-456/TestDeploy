/* eslint-disable max-len */
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForwardNavArrow } from '../../../assets/icons/KPV';
import Calendar from '../../Calendar/Calendar';
import { Creators as KPVChartsCreators } from '../Store';
import {
  OptIcon,
  //   DurationContainer,
  DurationDropdown,
  ItemText,
  Divider,
  RangeContainer,
  Input,
  Label,
  BtnWrapper,
  Button,
  WrapperDiv,
  CalenderDiv
} from './DurationDropdown.style';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const DurationDropdownComp = () => {
  const [rangeDropDown, setRangeDropDown] = useState(false);
  const [startDate, setStartDate] = useState();
  const [startDateDropDown, setStartDateDropDown] = useState(false);
  const [endDate, setEndDate] = useState();
  const [endDateDropDown, setEndDateDropDown] = useState(false);
  const { paneFullScreen } = useSelector((state) => state.KPVCharts);
  const panesData = useSelector((state) => state.KPVCharts.panesData);

  const menu = [
    { label: '5 minutes', value: 5 },
    { label: '15 minutes', value: 15 },
    { label: '30 minutes', value: 30 },
    { label: '1 hour', value: 60 },
    { label: '3 hours', value: 180 },
    { label: '6 hours', value: 360 },
    { label: '12 hours', value: 720 },
    { label: '24 hours', value: 1440 }
  ];
  const handleStartDate = (date) => {
    setStartDate(date.format('DD-MM-YYYY -HH:mm'));
    setStartDateDropDown(false);
  };
  const handleEndDate = (date) => {
    setEndDate(date.format('DD-MM-YYYY -HH:mm'));
    setEndDateDropDown(false);
  };
  const timeRange = [
    {
      label: 'From',
      name: 'from',
      value: startDate,
      placeholder: 'Start Date',
      dropDown: startDateDropDown,
      dropDownHandler: setStartDateDropDown,
      handler: handleStartDate
    },
    {
      label: 'To',
      name: 'to',
      value: endDate,
      placeholder: 'End Date',
      dropDown: endDateDropDown,
      dropDownHandler: setEndDateDropDown,
      handler: handleEndDate
    }
  ];
  const dispatch = useDispatch();
  const handleDurationSelect = (value) => {
    // it should be now
    // const xMaxDomain = Date.now();
    const dataPoints = panesData[0].data[0];
    const maxValue = dataPoints[dataPoints.length - 1].end || dataPoints[dataPoints.length - 1].time;
    if (!paneFullScreen) {
      const domainObj = {
        xMaxDomain: maxValue,
        xMinDomain: new Date(moment(maxValue).subtract(value, 'm'))
      };
      // console.log('do', domainObj, maxValue, dataPoints, dataPoints[dataPoints.length - 1]);
      dispatch(KPVChartsCreators.setDomainRange({ ...domainObj }));
    } else {
      const domainObj = {
        xMaxDomainFullScreen: maxValue,
        xMinDomainFullScreen: new Date(moment(maxValue).subtract(value, 'm'))
      };
      // console.log('do', domainObj, maxValue, dataPoints, dataPoints[dataPoints.length - 1]);
      dispatch(KPVChartsCreators.setDomainRangeInFullScreen({ ...domainObj }));
    }
  };

  return (
    <DurationDropdown>
      <div>Select time range</div>
      {menu.map((item) => (
        <ItemText key={item.value} onClick={() => handleDurationSelect(item.value)}>{`Last ${item.label}`}</ItemText>
      ))}
      <Divider />
      <div style={{ position: 'relative' }}>
        <ItemText onClick={() => setRangeDropDown(!rangeDropDown)}>
          Custom Time Range
          <OptIcon width={1.6} src={ForwardNavArrow}>
            <DynamicSVGIcon iconUrl={ForwardNavArrow} width='1.6rem' />
          </OptIcon>
        </ItemText>
        {rangeDropDown && (
          <RangeContainer>
            <div>Enter the Range</div>
            {timeRange.map((e) => (
              <WrapperDiv>
                <Label>{e.label}</Label>
                <Input
                  type='text'
                  readOnly
                  onClick={() => e.dropDownHandler(true)}
                  value={e.value}
                  name={e.name}
                  placeholder={e.placeholder}
                />
                {e.dropDown && (
                  <CalenderDiv>
                    <Calendar general={true} setDate={e.handler} />
                  </CalenderDiv>
                )}
              </WrapperDiv>
            ))}
            <BtnWrapper>
              <Button type='button'>cancel</Button>
              <Button type='submit' className='dark'>
                save
              </Button>
            </BtnWrapper>
          </RangeContainer>
        )}
      </div>
    </DurationDropdown>
  );
};

export default DurationDropdownComp;
