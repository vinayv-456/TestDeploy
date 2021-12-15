/* eslint-disable max-len */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  FilterResultContentText,
  FilterResultContentTextContainer,
  FilterMultiSelectIcon
} from './FilterContentContainer.style';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import DataFilterActive from '../../SvgIcons/Filter/DataFilterActive';
import { getPathNo, isChildReferencePresent, isParentSelected } from '../isItemSelected';
import RectangularAdd from '../../Common/Icons/RectangularAdd';

function FilterContentContainer({
  selectedTabKey,
  innerItem,
  selectionType,
  handleClick,
  index,
  multiSelect,
  className
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
  // console.log('aa', cummResultVal && Object.keys(cummResultVal[0]), innerItem.id);
  return (
    <FilterResultContentTextContainer
      className={className}
      active={resultVal && resultVal[innerItem.id]}
      cummSelect={
        cummResultVal &&
        Object.keys(cummResultVal).some((e) => Object.keys(cummResultVal[e]).includes(`${innerItem.id}`))
      }
      onClick={handleInnerClick}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {selectionType !== 'singleselect' && <RectangularAdd active={resultVal && resultVal[innerItem.id]} />}
        <FilterResultContentText className='cummlativeSelect' active={resultVal && resultVal[innerItem.id]}>
          {innerItem.name}
        </FilterResultContentText>
      </div>
      {multiSelect && (
        <FilterMultiSelectIcon active={resultVal && resultVal[innerItem.id]}>
          {resultVal[innerItem.id] && <DataFilterActive />}
        </FilterMultiSelectIcon>
      )}
      {multiSelect && resultVal && resultVal[innerItem.id] && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 1,
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.4)'
          }}
        />
      )}
    </FilterResultContentTextContainer>
  );
}

export default memo(FilterContentContainer);
