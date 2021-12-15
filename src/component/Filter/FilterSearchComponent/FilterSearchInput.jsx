/* eslint-disable max-len */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterSearch } from './FilterSearchComponent.style';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import { loopIntoParent } from './SearchFunctionality';
import { localString } from '../../../localization/localString';

export const findTheValue = (filterData, val, searchBy = 'name') => {
  let searchedObjectPath = [];
  let referencePath = [];
  let pathVal = [];
  let leafNodes = [];
  if (filterData) {
    filterData.forEach((item) => {
      const value = loopIntoParent(item, val, searchBy);

      if (value.selectedPath.length > 0) {
        pathVal = [...pathVal, ...value.selectedPath];
        searchedObjectPath = [...searchedObjectPath, ...value.selectedObj];
        referencePath = [...referencePath, ...value.refrenceObj];
        leafNodes = [...leafNodes, ...value.leafNodes];
      }
    });
  }
  return { searchedObjectPath, referencePath, pathVal, leafNodes };
};

function FilterSearchInput({ searchValue, setSearchValue }) {
  const { filterData } = useSelector((state) => state.filterData);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const dispatch = useDispatch();

  const toggleDropDown = (value) => {
    dispatch(
      FilterCreators.universalFilterSetter({
        key: 'isDropDownActive',
        value
      })
    );
  };

  const handleChange = (e) => {
    const value = findTheValue(filterData, e.target.value);

    dispatch(
      FilterCreators.universalFilterSetter({
        key: 'searchResult',
        value
      })
    );

    setSearchValue(e.target.value);
  };

  return (
    <FilterSearch
      placeholder={localeStrings.searchFilters || 'Search For Filters'}
      value={searchValue}
      onChange={handleChange}
      onFocus={() => toggleDropDown(true)}
    />
  );
}

export default memo(FilterSearchInput);
