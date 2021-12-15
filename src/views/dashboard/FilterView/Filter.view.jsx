/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint no-else-return: "error" */
/* eslint-disable no-nested-ternary */

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FilterTagArea } from '../../../component';
import FilterSearchComponent from '../../../component/Filter/FilterSearchComponent/FilterSearchComponent';
import Toast from '../../../component/Common/Toast';
import DropDownModal from '../../../component/Common/DropDownModal/DropDownModal';
import ShowAllTheFilter from '../../../component/ResultView/ShowAllTheFilter';
import {
  FilterViewContainer,
  FilterHeadingContainer,
  FilterHeadingText,
  FilterTabContainer,
  Divider,
  ActiveDivider,
  FilterHeadingBox,
  MobileFilterButton,
  KababIcon,
  FilterSelectImage,
  FilterSelectText,
  FilterNoDataContainer,
  FilterDataContainer,
  KababIconContainer,
  HeaderText
} from './Filter.style';
import { Image } from '../../../component/Filter/FilterSearchComponent/FilterSearchComponent.style';
import kababSvg from '../../../assets/icons/Filter/kabab.svg';
import FilterSelectPng from '../../../assets/Images/Filter/Use Filter @3x.png';
import FilterContainer from '../../../component/Filter/FilterContainer/FilterContainer';
import FilterMobileIcon from '../../../assets/icons/Filter/Filters white.svg';
import { filterMenuData } from '../../../constants/sampleData';
import { Creators as FilterCreators } from './store';
// import { localString } from '../../../localization/localString';
import { camelCase } from '../../../shared/utility/camelCase';
import KPVCustomComponent from '../../../component/ResultView/KPVCustomComponent/KPVCustom.view';
// import { applyTypeMapping } from '../../../constants/mapping';
import Loader from '../../../component/Loader/Loader';
import DynamicSVGIcon from '../../../component/Common/DynamicSVGIcon';
import { usePrevious } from '../../../shared/hooks/usePrevious';
import { LeftArrow } from '../../../component/ResultView/KPVShortlist/KPVShortlist.style';
import DropArrow from '../../../assets/icons/layout/dropdownarrow.svg';

// export const headingTitle = ['Summary', 'Trend', 'Comparison', 'Details'];

function FilterView({ location, menuId }) {
  // const [activeTab, setActiveTab] = useState(0);
  // const [showFilter, setShowFilter] = useState(false);
  const [activeFilterCard, setActiveFilterCard] = useState(0);
  const [modalIsVisibal, setModalIsVisibal] = useState(false);
  // const [formatTags, setFormatTags] = useState('');
  const history = useHistory();
  const {
    activeTab,
    selectedParent,
    filterData,
    resultType,
    showFilterResult,
    error,
    tags,
    showFilter,
    loading,
    menuIdofFilter
  } = useSelector((state) => state.filterData);
  // const { resultType } = useSelector((state) => state.filterResultData);
  const { subMenuOptions } = useSelector((state) => state.home);
  const prevResultType = usePrevious(resultType);
  const dispatch = useDispatch();
  // const string = localString.English;
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const { isEdit, myAnalyticsItemName } = useSelector((state) => state.myAnalytics);
  const { myDashboardItemId } = useSelector((state) => state.myDashboards);
  const findPathObject = (path) => !!subMenuOptions.find((item) => item.path === path);

  const getTabNames = (path) => {
    const data = subMenuOptions.find((item) => item.path === path);
    return data?.subMenuOptions;
  };

  const setActiveTab = (value) => {
    dispatch(FilterCreators.universalFilterSetter({ key: 'activeTab', value }));
  };

  // useEffect(() => {
  //   setFormatTags(JSON.stringify(tags));
  // }, [tags]);

  useEffect(() => {
    const res = getTabNames(location.pathname);
    setActiveTab(res && res[0]);
  }, []);

  useEffect(() => {
    const singleSelectgrpNames = [];
    filterData?.forEach((grp) => {
      if (grp.selectionType === 'singleselect') {
        singleSelectgrpNames.push(grp.groupTitle);
      }
    });
    dispatch(FilterCreators.setSingleSelectionGroups(singleSelectgrpNames));
  }, [filterData]);

  useEffect(() => {
    // if (!isEdit && !myDashboardItemId) {
    if (menuIdofFilter !== menuId || activeTab !== selectedParent) {
      dispatch(FilterCreators.setMenuIdOfFilter(menuId));
      // if (subMenuOptions && findPathObject(location.pathname)) {
      dispatch(FilterCreators.getFilterData({ type: 'tab', menuId, tab: activeTab }));
      // } else {
      //   dispatch(FilterCreators.getFilterData({ type: 'page', menuId }));
      // }
    }
  }, [activeTab]);

  const setShowFilter = (value) => {
    dispatch(FilterCreators.universalFilterSetter({ key: 'showFilter', value }));
  };

  const handleTabChange = (i, item) => {
    if (activeTab !== item) {
      // dispatch(FilterCreators.resetFilterState());
      setShowFilter(false);
      setActiveTab(item);
      // dispatch(FilterCreators.getFilterData(item));
    }
  };

  const clearFilterToastMessage = () => {
    dispatch(FilterCreators.universalFilterSetter({ key: 'error', value: null }));
  };

  const kababIconRef = useRef();

  const hanldeModalItemClick = (role) => {
    if (role === 'clear') {
      setShowFilter(false);
      dispatch(FilterCreators.clearSelectedFilter());
    }
    setModalIsVisibal(false);
  };

  useEffect(() => {
    if (prevResultType !== undefined && resultType !== prevResultType) {
      // console.log("don't show result", prevResultType, resultType);
      setShowFilter(false);
      dispatch(
        FilterCreators.universalFilterSetter({
          key: 'showFilterResult',
          value: false
        })
      );
    }
    // dispatch(
    //   FilterCreators.universalFilterSetter({
    //     key: 'resultType',
    //     value: applyTypeMapping[location.pathname]
    //   })
    // );
    // }
  }, [resultType]);

  return (
    <>
      {!filterData || loading ? (
        <Loader />
      ) : (
        <FilterViewContainer minusHeight={Object.keys(tags).length > 0 ? 119 : 60}>
          {subMenuOptions && findPathObject(location.pathname) && (
            <FilterTabContainer showFilter={showFilter}>
              <FilterHeadingContainer>
                {subMenuOptions &&
                  getTabNames(location.pathname).map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <FilterHeadingBox key={i} onClick={() => handleTabChange(i, item)}>
                      <FilterHeadingText active={activeTab === item}>{item}</FilterHeadingText>
                      {activeTab === item && <ActiveDivider />}
                    </FilterHeadingBox>
                  ))}
              </FilterHeadingContainer>
              <div>
                <KababIconContainer ref={kababIconRef} onClick={() => setModalIsVisibal(!modalIsVisibal)}>
                  <KababIcon>
                    <DynamicSVGIcon iconUrl={kababSvg} width='3rem' />
                  </KababIcon>
                </KababIconContainer>

                {modalIsVisibal && (
                  <DropDownModal
                    kababIconRef={kababIconRef}
                    setModalIsVisibal={setModalIsVisibal}
                    data={filterMenuData}
                    style={{ top: 45, right: 0 }}
                    handleClick={hanldeModalItemClick}
                  />
                )}
              </div>
              <Divider />
            </FilterTabContainer>
          )}
          <div style={{ display: 'flex', width: '97%', alignItems: 'center' }}>
            {isEdit && (
              <>
                <LeftArrow onClick={() => history.goBack()}>
                  <DynamicSVGIcon iconUrl={DropArrow} width='2.4rem' />
                </LeftArrow>
                <HeaderText>{`Edit ${myAnalyticsItemName}`}</HeaderText>
              </>
            )}

            <FilterSearchComponent
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              setActiveTab={setActiveFilterCard}
            />
            {showFilter && showFilterResult && resultType === 'kpv' && <KPVCustomComponent />}
          </div>
          {showFilter ? (
            showFilterResult ? (
              <ShowAllTheFilter type={resultType} location={location.pathname} />
            ) : (
              <FilterDataContainer>
                <FilterTagArea setShowFilter={setShowFilter} location={location} />
                <FilterContainer activeFilterCard={activeFilterCard} setActiveFilterCard={setActiveFilterCard} />
              </FilterDataContainer>
            )
          ) : (
            <FilterNoDataContainer>
              <FilterSelectImage src={FilterSelectPng} />
              <FilterSelectText>
                {localeStrings.chooseFromFilter || 'Choose From Filters To See Dashboard'}
              </FilterSelectText>
            </FilterNoDataContainer>
          )}

          {!showFilter && (
            <MobileFilterButton onClick={() => setShowFilter(true)}>
              <Image src={FilterMobileIcon} width={2} height={2} />
            </MobileFilterButton>
          )}
          {error && <Toast style={{ right: 20 }} fn={clearFilterToastMessage} header='Error' message={error} />}
        </FilterViewContainer>
      )}
    </>
  );
}

export default FilterView;
