/* eslint-disable max-len */

import React from 'react';
import { useSelector } from 'react-redux';
import FilterResultCardMobile from '../FilterResultCard/FilterResultCard.mobile';
import {
  FilterResultHeader,
  FilterResultHeaderText,
  FilterResultCardMainContainer
} from '../FilterResultCard/FilterResultCard.mobile.style';

function FilterMobileContainer({
  activeFilterCard,
  setActiveFilterCard,
  handleParentClick,
  handleChildrenClick,
  handleMultiSelectClick
}) {
  const { filterData } = useSelector((state) => state.filterData);

  return (
    <FilterResultCardMainContainer style={{ minHeight: window.innerHeight - 180 }}>
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div
          style={{
            width: '40%',
            height: '100%',
            boxShadow: '0px 2px 3px 0px #000029',
            zIndex: 1
          }}
        >
          {filterData.map((item, i) => (
            <FilterResultHeader active={activeFilterCard === i} key={item.id} onClick={() => setActiveFilterCard(i)}>
              <FilterResultHeaderText active={activeFilterCard === i}>{item.groupTitle}</FilterResultHeaderText>
            </FilterResultHeader>
          ))}
        </div>
        <div style={{ width: '60%', backgroundColor: '#F1F2F8', height: '100%' }}>
          {filterData.map(
            (item, i) =>
              activeFilterCard === i && (
                <FilterResultCardMobile
                  key={item.id}
                  item={item}
                  index={i}
                  handleParentClick={handleParentClick}
                  handleChildrenClick={handleChildrenClick}
                  handleMultiSelectClick={handleMultiSelectClick}
                />
              )
          )}
        </div>
      </div>
    </FilterResultCardMainContainer>
  );
}

export default FilterMobileContainer;
