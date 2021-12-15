/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalSearchComponent } from '..';
import {
  Image,
  ItemText,
  NoResultText,
  SearchContainer,
  SearchDropDown,
  SearchResultText,
  SearchTextContainer
} from './GlobalSearchContainer.style';
import NoResultSvg from '../../assets/icons/layout/No_results_on_Dashboard.svg';
import { Creators as GlobalCreators } from './store';
import { Creators as LayoutCreators } from '../../views/Layout/store';
import useClickOutside from '../../shared/hooks/useClickOutside';
import { populateNestedLink } from '../../constants/helper';
import DynamicSVGIcon from '../Common/DynamicSVGIcon';

function GlobalSearchContainer({ history, setShowSearchBarInMobile }) {
  const { showDropDown, searchResults, searchQuery } = useSelector((state) => state.globalSearchData);
  const { activeMultiLevelNav, menu: menuData } = useSelector((state) => state.home);

  const ref = useRef();
  const dispatch = useDispatch();

  const closeSearchDropDown = () => {
    if (showDropDown) {
      dispatch(GlobalCreators.setSearchMenuDropDown(false));
      dispatch(GlobalCreators.setSearchQueryHistory({ data: searchQuery }));
    }
  };

  useClickOutside(ref, closeSearchDropDown);

  const handleSearchResClick = (path) => {
    history.push(path);
    dispatch(GlobalCreators.setSearchMenuDropDown(false));
    const returnVal = populateNestedLink(menuData, path);
    if (returnVal.length > 0) {
      dispatch(LayoutCreators.setActiveMultiLevelMenu([...activeMultiLevelNav, ...returnVal]));
    }
  };

  const handleShowSearchBarInMobile = () => {
    setShowSearchBarInMobile(false);
  };

  return (
    <SearchContainer
      ref={ref}
      className={window.innerWidth < 769 ? 'showAnim' : ''}
      position={window.innerWidth > 768 ? 'relative' : 'static'}
    >
      <GlobalSearchComponent handleShowSearchBarInMobile={handleShowSearchBarInMobile} />
      {showDropDown && searchResults && (
        <SearchDropDown>
          {searchResults.length ? (
            searchResults.map((ele, i) => (
              <SearchTextContainer key={i} onClick={() => handleSearchResClick(ele.link)}>
                <SearchResultText>
                  {ele.link.split('/').slice(2).length
                    ? ele.link
                        .split('/')
                        .slice(2)
                        .map((e, key) => <ItemText key={key}>{e}</ItemText>)
                    : ele.link
                        .split('/')
                        .slice(1)
                        .map((e, key) => <ItemText key={key}>{e}</ItemText>)}
                </SearchResultText>
              </SearchTextContainer>
            ))
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image src={NoResultSvg}>
                <DynamicSVGIcon iconUrl={NoResultSvg} width='3rem' />
              </Image>

              <NoResultText>No Result</NoResultText>
            </div>
          )}
        </SearchDropDown>
      )}
    </SearchContainer>
  );
}

export default memo(GlobalSearchContainer);
