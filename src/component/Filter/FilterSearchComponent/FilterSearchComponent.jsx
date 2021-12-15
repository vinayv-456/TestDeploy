/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchContainer,
  CommonButtonContainer,
  SearchButton,
  FilterButtom,
  SearchDropDown,
  SearchResultText,
  SearchTextContainer,
  Image,
  SearchMainContainer
} from './FilterSearchComponent.style';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import FilterSearchInput from './FilterSearchInput';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import { ReactComponent as FilterIcon } from '../../../assets/icons/Filter/Filters.svg';
import { ReactComponent as SearchIconSvg } from '../../../assets/icons/Filter/Search Black.svg';
import NoResultSvg from '../../../assets/icons/Filter/No results on filter.svg';
import { filterData } from '../../../constants/sampleData';
import { localString } from '../../../localization/localString';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';
import { NoResultText } from '../../GlobalSearch/GlobalSearchContainer.style';

function FilterSearchComponent({ showFilter, setShowFilter, setActiveTab }) {
  const [searchValue, setSearchValue] = useState('');
  const { isDropDownActive, searchResult, tags, selectedItem, cumulativeTags } = useSelector(
    (state) => state.filterData
  );
  const filterData = useSelector((state) => state.filterData);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const dispatch = useDispatch();

  const addTabToObj = useCallback((payload) => dispatch(FilterCreators.universalFilterSetter(payload)), [dispatch]);
  const addTags = useCallback((payload) => dispatch(FilterCreators.setTags(payload)), [dispatch]);
  const addCummulativeTags = useCallback((payload) => dispatch(FilterCreators.setCummulativeTags(payload)), [dispatch]);

  const closeSearchDropDown = () => {
    if (isDropDownActive) {
      dispatch(
        FilterCreators.universalFilterSetter({
          key: 'isDropDownActive',
          value: false
        })
      );
    }
  };

  const handleClick = (i, parent) => {
    const cummSelectedObj = filterData[`cumulative${parent}`];
    let pathInsertIndex = 0;
    // console.log('cummSelectedObj', cummSelectedObj);
    if (cummSelectedObj) {
      const check = Object.keys(cummSelectedObj).findIndex((pathNum) =>
        Object.keys(cummSelectedObj[pathNum]).every((key) =>
          Object.keys(searchResult.searchedObjectPath[i]).includes(key)
        )
      );
      pathInsertIndex = check > -1 ? check : Object.keys(cummSelectedObj).length;
    }
    // console.log('pathInsertIndex', pathInsertIndex);
    addTabToObj({
      key: parent,
      value: searchResult.searchedObjectPath[i]
    });
    addTags({
      ...tags,
      [parent]: searchResult.referencePath[i]
    });
    addTabToObj({
      key: `cumulative${parent}`,
      value: {
        ...cummSelectedObj,
        [pathInsertIndex]: searchResult.searchedObjectPath[i]
      }
    });
    addCummulativeTags({
      ...cumulativeTags,
      [parent]: {
        ...cumulativeTags[parent],
        [pathInsertIndex]: searchResult.referencePath[i]
      }
    });
    // }

    if (searchResult.searchedObjectPath[i]) {
      const lastIndex = Object.keys(searchResult.searchedObjectPath[i])[
        Object.keys(searchResult.searchedObjectPath[i]).length - 1
      ];
      if (!searchResult.searchedObjectPath[i][lastIndex].values) {
        const index = selectedItem.findIndex((item) => item === parent);
        if (index === -1) {
          addTabToObj({
            key: 'selectedItem',
            value: [...selectedItem, parent]
          });
        }
      }
    }

    closeSearchDropDown();
    if (!showFilter) {
      setShowFilter(true);
    }
    if (window.innerWidth < 767) {
      const index = filterData.findIndex((item) => item.groupTitle === parent);
      setActiveTab(index);
    }

    setSearchValue('');
    addTabToObj({
      key: 'searchResult',
      value: null
    });
  };

  const handleFilterClick = () => {
    setShowFilter(true);
    addTabToObj({
      key: 'showFilterResult',
      value: false
    });
  };

  const ref = useRef();

  useClickOutside(ref, closeSearchDropDown);

  return (
    (showFilter || window.innerWidth > 768) && (
      <SearchMainContainer>
        <SearchContainer ref={ref}>
          <FilterSearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
          <CommonButtonContainer>
            <SearchButton>
              <SearchIconSvg />
            </SearchButton>
            <FilterButtom onClick={handleFilterClick}>
              <FilterIcon />
            </FilterButtom>
          </CommonButtonContainer>
          {isDropDownActive && searchValue !== '' && (
            <SearchDropDown>
              <div style={{ marginTop: 5 }}>
                {searchResult &&
                  (searchResult.pathVal.length > 0 ? (
                    searchResult.pathVal.map((path, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <SearchTextContainer key={i} onClick={() => handleClick(i, path.parent)}>
                        <SearchResultText>{`${path.parent} / ${path.path}`}</SearchResultText>
                      </SearchTextContainer>
                    ))
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: 100,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {/* <Image src={NoResultSvg} width={3} height={3} /> */}
                      <Image src={NoResultSvg}>
                        <DynamicSVGIcon iconUrl={NoResultSvg} width='3rem' />
                      </Image>
                      <NoResultText>{localeStrings.noResult || 'No Result'}</NoResultText>
                    </div>
                  ))}
              </div>
            </SearchDropDown>
          )}
        </SearchContainer>
      </SearchMainContainer>
    )
  );
}

export default FilterSearchComponent;
