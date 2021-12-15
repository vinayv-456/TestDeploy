/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useBasePath } from '../../shared/hooks/useBasePath';
import { Creators as myDashboardsCreators } from './store';

import {
  ActiveDivider,
  Container,
  HeaderText,
  HeadingBox,
  HeadingContainer,
  LeftArrow,
  SearchContainer,
  SearchQueryText
} from './MyDashboards.style';

import BackArrow from '../../assets/icons/layout/BackArrow.svg';
import SearchInput from '../../component/Common/SearchBar/SearchBar';

import DashboardTable from './DashboardTable';

const MydashboardsView = () => {
  const [searchValue, setSearchValue] = useState('');
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const basePath = useBasePath();
  const dispatch = useDispatch();
  const { searchQuery: globalSearchQuery } = useSelector((state) => state.globalSearchData);
  const { myDashboards, myDashboardItemId } = useSelector((state) => state.myDashboards);

  useEffect(() => {
    if (!myDashboards.length) dispatch(myDashboardsCreators.getDashboards());
    if (myDashboardItemId) {
      dispatch(myDashboardsCreators.resetDashboardsData());
    }
  }, []);

  return (
    <Container>
      <HeadingContainer>
        <HeadingBox>
          {basePath === '/home/search' ? (
            <>
              <LeftArrow src={BackArrow} onClick={() => null} />
              <HeaderText>
                {localeStrings.searchResults || 'Search Results for'}
                &quot;
                <SearchQueryText>{globalSearchQuery}</SearchQueryText>
                &quot;
              </HeaderText>
            </>
          ) : (
            <>
              <HeaderText>{localeStrings['My Dashboards'] || 'My Dashboards'}</HeaderText>
              <ActiveDivider />
            </>
          )}
        </HeadingBox>
        <SearchContainer>
          <SearchInput placeholder='Search for Dashboard' searchValue={searchValue} onChange={setSearchValue} />
        </SearchContainer>
      </HeadingContainer>
      <DashboardTable data={myDashboards} />
    </Container>
  );
};

export default MydashboardsView;
