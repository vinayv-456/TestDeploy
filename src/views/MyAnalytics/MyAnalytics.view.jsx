/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../../component/Common/SearchBar/SearchBar';
import AnalyticsTable from '../../component/MyAnalytics/AnalyticsTable';
import { ActiveDivider, Container, HeaderText, HeadingBox, HeadingContainer } from './MyAnalytics.style';

const MyAnalytics = () => {
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const [searchValue, setSearchValue] = useState(null);

  return (
    <Container>
      <HeadingContainer>
        <HeadingBox>
          <HeaderText>{`My ${localeStrings.Analytics}` || 'My Analytics'}</HeaderText>
          <ActiveDivider />
        </HeadingBox>
        <SearchBar placeholder='Search Analytics' value={searchValue} onChange={setSearchValue} width='36' />
      </HeadingContainer>
      <AnalyticsTable />
    </Container>
  );
};

export default MyAnalytics;
