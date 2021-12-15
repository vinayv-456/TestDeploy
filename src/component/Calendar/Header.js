/* eslint-disable max-len */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as FilterCreators } from '../../views/dashboard/FilterView/store';
import {
  CalendarHeaderContainer,
  CalendarNextButton,
  DateDisplayContainer,
  CalendarPreviousButton
} from './Calendar.style';

export default function CalendarHeader() {
  const { selectedDate } = useSelector((state) => state.filterData);
  const [value, setValue] = useState(moment(selectedDate));
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(moment(selectedDate));
  }, [selectedDate]);

  function currMonthName() {
    return value.format('MMMM');
  }

  function currYear() {
    return value.format('YYYY');
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }

  function nextMonth() {
    return value.clone().add(1, 'month');
  }

  function thisMonth() {
    return value.isSame(new Date(), 'month');
  }

  return (
    <CalendarHeaderContainer>
      <CalendarPreviousButton
        onClick={() => {
          dispatch(
            FilterCreators.universalFilterSetter({
              key: 'selectedDate',
              value: prevMonth()
            })
          );
        }}
      >
        <p style={{ fontSize: 14 }}>{String.fromCharCode(171)}</p>
      </CalendarPreviousButton>
      <DateDisplayContainer>
        <p style={{ fontSize: 14, color: '#4A4A4A' }}>{currMonthName()}</p>
        <p style={{ fontSize: 14, marginLeft: 5, color: '#4A4A4A' }}>{currYear()}</p>
      </DateDisplayContainer>
      <CalendarNextButton
        onClick={() => {
          dispatch(
            FilterCreators.universalFilterSetter({
              key: 'selectedDate',
              value: nextMonth()
            })
          );
        }}
      >
        <p style={{ fontSize: 16 }}>{String.fromCharCode(187)}</p>
      </CalendarNextButton>
    </CalendarHeaderContainer>
  );
}
