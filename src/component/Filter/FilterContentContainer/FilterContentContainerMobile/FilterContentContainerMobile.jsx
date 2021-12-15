/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  FilterResultContentText,
  FilterResultContentTextContainer,
  FilterMultiSelectIcon,
  FilterActiveImage,
  FilterSingleSelectIcon,
  ActiveSingleSelectIcon
} from './FilterContentContainerMobile.style';
import { Creators as FilterCreators } from '../../../../views/dashboard/FilterView/store';
import ActiveFilterSvg from '../../../../assets/icons/Filter/data verifier active.svg';
import RectangularAdd from '../../../Common/Icons/RectangularAdd';

function FilterContentContainerMobile({
  selectedTabKey,
  innerItem,
  selectionType,
  handleClick,
  index,
  multiSelect,
  className,
  parent
}) {
  const {
    [selectedTabKey]: resultVal,
    cumulativeTags,
    [`cumulative${selectedTabKey}`]: cummResultVal
  } = useSelector((state) => state.filterData);

  const dispatch = useDispatch();

  const handleInnerClick = () => {
    handleClick(innerItem, index);
    if (className === 'typeDate') {
      // const index = Object.values(tags[selectedTabKey]).findIndex((date) => date.type === 'date');

      // console.log(tags[selectedTabKey]);

      let day = moment();

      if (innerItem.name.toLowerCase() === 'yesterday') {
        day = moment().subtract(1, 'days');
      }
      dispatch(
        FilterCreators.universalFilterSetter({
          key: 'selectedDate',
          value: day
        })
      );
    }
  };

  return (
    <FilterResultContentTextContainer
      className={className}
      active={resultVal && resultVal[innerItem.id]}
      onClick={handleInnerClick}
      parent={parent}
      cummSelect={
        cummResultVal &&
        Object.keys(cummResultVal).some((e) => Object.keys(cummResultVal[e]).includes(`${innerItem.id}`))
      }
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {selectionType !== 'singleselect' && <RectangularAdd active={resultVal && resultVal[innerItem.id]} />}
        <FilterResultContentText className='cummlativeSelect' active={resultVal && resultVal[innerItem.id]}>
          {innerItem.name}
        </FilterResultContentText>
      </div>
      {/* {multiSelect ? (
        resultVal && resultVal[innerItem.id] ? (
          <FilterActiveImage src={ActiveFilterSvg} />
        ) : (
          <FilterMultiSelectIcon />
        )
      ) : (
        <FilterSingleSelectIcon>
          {resultVal && resultVal[innerItem.id] && <ActiveSingleSelectIcon />}
        </FilterSingleSelectIcon>
      )} */}

      {/* <FilterResultContentText active={resultVal && resultVal[innerItem.id]}>{innerItem.name}</FilterResultContentText> */}
    </FilterResultContentTextContainer>
  );
}

export default memo(FilterContentContainerMobile);
