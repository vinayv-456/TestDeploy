/* eslint-disable function-paren-newline */
/* eslint-disable max-len */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import KPVList from './KPVListComponent/KPVListComponent.view';
import { Creators as FilterCreators } from '../../views/dashboard/FilterView/store';
import Loader from '../Common/Loader/Loader';
import { generateSelectedFilter } from './Iframe/generateSelectedFilter';
// import { generateSelectedFilter, linkNodes } from './Iframe/generateSelectedFilter';

function ShowAllTheFilter({ type, location }) {
  const switchComp = () => {
    switch (type) {
      default:
      case 'iframe':
        return <Iframe location={location} />;
      case 'kpv':
        return <KPVList />;
      // default:
      //   return <div style={{ fontSize: '30px', textAlign: 'center' }}>Invalid Result Type</div>;
    }
  };
  return <>{switchComp()}</>;
}

const Iframe = ({ location }) => {
  const { tags, menuIdofFilter, cumulativeTags, selectedParent, iframeRes, iframeLoading } = useSelector(
    (state) => state.filterData
  );

  // const [formatTags, setFormatTags] = useState('');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   setFormatTags(JSON.stringify(tags));
  // }, [tags]);

  useEffect(() => {
    const formatedTags = generateSelectedFilter(cumulativeTags);
    // Object.keys(tags).map((groupTitle) => ({
    //   [groupTitle]: Object.keys(cumulativeTags[groupTitle]).map((pathNo) =>
    //     Object.keys(cumulativeTags[groupTitle][pathNo]).map((level) => {
    //       if (Array.isArray(cumulativeTags[groupTitle][pathNo][level])) {
    //         return cumulativeTags[groupTitle][pathNo][level];
    //       }
    //       const { name, id, attribute } = cumulativeTags[groupTitle][pathNo][level];
    //       return { name, id, attribute };
    //     })
    //   )
    // }));

    // console.log('location', location);
    const payload = {
      menuid: menuIdofFilter,
      tab: selectedParent,
      data: formatedTags
    };

    console.log('iframe payload', payload);
    dispatch(FilterCreators.getIFrameData(payload));
  }, []);

  if (iframeRes) {
    return (
      <>
        {iframeLoading ? (
          <Loader />
        ) : (
          <IframeContainer src={iframeRes.uri} name='iframe' title='filter-iframe' style={{ border: '0px' }} />
        )}
      </>
    );
    // <div>{JSON.stringify(tags, false, 10)}</div>;
  }
  return null;
};

const IframeContainer = styled.iframe`
  width: 97%;
  margin: 2rem auto 0px;
  flex: 1;
  /* margin-top: 2rem; */
`;

export default ShowAllTheFilter;
