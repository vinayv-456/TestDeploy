/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Header from './Header';
import { Creators as FilterCreators } from '../../views/dashboard/FilterView/store';
import './Calendar.css';
import buildCalendar from './Build';
import { CalendarContainer, CalendarWeekContainer } from './Calendar.style';
import { fontFamily } from '../../constants';

function Calendar({ groupTitle, values, handleChildrenClick, index, general = false, setDate }) {
  const [calendar, setCalendar] = useState([]);
  const { selectedDate, tags, selectedItem, [groupTitle]: selectedObj } = useSelector((state) => state.filterData);
  const [value, setValue] = useState(moment(selectedDate));

  useEffect(() => {
    setValue(moment(selectedDate));
  }, [selectedDate]);

  const dispatch = useDispatch();

  function isSelected(day) {
    return moment(selectedDate).isSame(day, 'day');
  }

  function beforeToday(day) {
    return moment(day).isAfter(new Date(), 'day');
  }

  function isToday(day) {
    return moment(new Date()).isSame(day, 'day');
  }

  function isSaturdayOrSunday(day) {
    const holiday = moment(day).day();
    return holiday === 6 || holiday === 0;
  }

  function dayStyles(day) {
    // console.log('value', value, day, value.isSame(day, 'day'));
    if (beforeToday(day)) return 'before';
    if (isSelected(day)) return 'selected';
    if (isSaturdayOrSunday(day)) return 'holiday';
    if (isToday(day)) return 'today';
    return '';
  }

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  // eslint-disable-next-line consistent-return
  const handleDayClick = (day) => {
    if (day > moment(new Date()).startOf('day')) return;
    if (general) {
      // console.log('day', day);
      setDate(day);
      return;
    }
    dispatch(
      FilterCreators.universalFilterSetter({
        key: 'selectedDate',
        value: day
      })
    );

    const tempSelectedObj = { ...selectedObj };
    const keys = Object.keys(tempSelectedObj);
    if (tempSelectedObj[keys[keys.length - 1]].attribute === null) delete tempSelectedObj[keys[keys.length - 1]];

    if (isToday(day)) {
      values.forEach((item) => {
        if (item.name.toLowerCase() === 'today') {
          // handleChildrenClick(item, index);
          dispatch(
            FilterCreators.setSingleTag({
              groupTitle,
              [groupTitle]: {
                ...tags[groupTitle],
                [index + 1]: {
                  name: item.name,
                  id: item.id,
                  type: 'date'
                }
              },
              selectedObj: { ...tempSelectedObj, [`_${item.id}`]: { name: item.name, attribute: null } }
            })
          );
        }
      });
    } else if (moment(day).isSame(moment().subtract(1, 'day'), 'day')) {
      values.forEach((item) => {
        if (item.name.toLowerCase() === 'yesterday') {
          // handleChildrenClick(item, groupTitle, index);
          dispatch(
            FilterCreators.setSingleTag({
              groupTitle,
              [groupTitle]: {
                ...tags[groupTitle],
                [index + 1]: {
                  name: item.name,
                  id: item.id,
                  type: 'date'
                }
              },
              selectedObj: { ...tempSelectedObj, [`_${item.id}`]: { name: item.name, attribute: null } }
            })
          );
        }
      });
    } else {
      // eslint-disable-next-line consistent-return
      const indexTemp = Object.values(tags[groupTitle]).findIndex(
        (date) => date.name.toLowerCase() === 'yesterday' || date.name.toLowerCase() === 'today' || date.type === 'date'
      );

      // console.log('tempSelectedObj', tempSelectedObj);
      const customDataItem = values.find((e) => e.name.toLowerCase() === 'custom');
      const customId = customDataItem ? `_${customDataItem?.id}` : '_customSelection';
      if (indexTemp !== -1) {
        dispatch(
          FilterCreators.setSingleTag({
            groupTitle,
            [groupTitle]: {
              ...tags[groupTitle],
              // [Object.keys(tags[groupTitle]).length]: tags[groupTitle][index],
              [index + 1]: {
                name: moment(day).format('DD/MM/YY'),
                id: customId,
                type: 'date'
              }
            },
            selectedObj: {
              ...tempSelectedObj,
              [customId]: { name: moment(day).format('DD/MM/YY'), attribute: null }
            }
          })
        );
        // dispatch(
        //   FilterCreators.deletingTags({
        //     title: groupTitle,
        //     i: index
        //   })
        // );
      } else {
        dispatch(
          FilterCreators.setSingleTag({
            groupTitle,
            [groupTitle]: {
              ...tags[groupTitle],
              [index + 1]: {
                name: moment(day).format('DD/MM/YY'),
                id: `_${customDataItem.id}`,
                type: 'date'
              }
            },
            selectedObj: {
              ...tempSelectedObj,
              [`_${customDataItem.id}`]: { name: moment(day).format('DD/MM/YY'), attribute: null }
            }
          })
        );
      }

      // if (selectedItem.findIndex((i) => i === groupTitle) === -1) {
      //   const copiedSelectedArr = [...selectedItem];
      //   copiedSelectedArr.push(groupTitle);
      //   dispatch(FilterCreators.setSelectedItem(copiedSelectedArr));
      // }
    }
  };

  return (
    <CalendarContainer className='calendar'>
      {value && <Header />}
      <div className='body'>
        <div className='day-names'>
          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d, i) => (
            <div
              style={{
                fontSize: 7,
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className='week'
            >
              {d}
            </div>
          ))}
        </div>
        {calendar.map((week, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>
            {week.map((day, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <CalendarWeekContainer className='day' key={i} onClick={() => handleDayClick(day)}>
                <div
                  style={{
                    fontSize: window.innerWidth < 768 ? 12 : 16,
                    border: '0.1px solid gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    fontFamily: `${fontFamily.circularBold}`
                  }}
                  className={dayStyles(day)}
                >
                  {day.format('D').toString()}
                </div>
              </CalendarWeekContainer>
            ))}
          </div>
        ))}
      </div>
    </CalendarContainer>
  );
}

export default Calendar;
