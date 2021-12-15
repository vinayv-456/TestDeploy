/* eslint-disable max-len */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Calendar from './Calendar';

function CalendarComponent({ groupTitle, values, handleChildrenClick, index }) {
  const { selectedDate } = useSelector((state) => state.filterData);

  return (
    <Calendar
      value={selectedDate}
      groupTitle={groupTitle}
      values={values}
      handleChildrenClick={handleChildrenClick}
      index={index}
    />
  );
}

export default memo(CalendarComponent);
