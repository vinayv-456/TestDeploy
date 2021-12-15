/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { kpvData } from '../../../constants/sampleData';
import { CancelBlack, searchBlack } from '../../../assets/icons';
import KPVGroup from '../KPVGroupComponent/KPVGroupComponent.view';
import {
  Container,
  ContentContainer,
  HeaderContainer,
  MachineHeaderText,
  Row,
  TableContainer,
  Cell,
  CancelIcon,
  SearchIcon,
  SearchInput
} from './KPVListComponent.style';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import { Creators as KPVCreators } from '../Store';
import Loader from '../../Loader/Loader';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const KPVList = () => {
  const state = useSelector((state) => state.filterData);
  const { tags, selectedItem, filterData } = state;
  const { colPropsInGeneral, resultDetails: kpvData, loading } = useSelector((state) => state.filterResultData);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const [selectedMachines, setSelectedMachines] = useState({});
  const [activeTab, setActiveTab] = useState(Object.keys(selectedMachines)[0]);
  const [showSearchInp, setShowSearchInp] = useState(false);
  const [toggleSearchIcon, setToggleSearchIcon] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResultData, setFilteredResultData] = useState(null);

  const searchRef = useRef();
  const dispatch = useDispatch();

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    if (!toggleSearchIcon) {
      setToggleSearchIcon(true);
    }
  };

  const findSearchResults = (searchQuery) => {
    const tempKpvData = [...kpvData[activeTab]];
    kpvData[activeTab].forEach((group, index) => {
      let tempGroupValues = [];
      const tempGroupObj = { ...group };
      if (group.values.length > 0) {
        tempGroupValues = [...group.values].filter((row) => row.KPV.toLowerCase().includes(searchQuery.toLowerCase()));
        tempGroupObj.values = [...tempGroupValues];
        tempKpvData[index] = tempGroupObj;
      }
    });
    setFilteredResultData(tempKpvData);
  };

  const _handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setToggleSearchIcon(false);
      findSearchResults(searchQuery);
    }
  };

  const handleTitleSearch = () => {
    if (!toggleSearchIcon) {
      setShowSearchInp(!showSearchInp);
      setToggleSearchIcon(true);
      setSearchQuery('');
      setFilteredResultData(kpvData);
    } else {
      setShowSearchInp(true);
      if (searchQuery) setToggleSearchIcon(false);
      findSearchResults(searchQuery);
    }
  };

  const handleRemoveMachine = (selectedMachineId) => {
    const { group, id } = selectedMachineId;
    const tempSelectedObj = { ...state[group] };
    const tempTags = { ...tags };
    const lastLevelIndex = Object.keys(tags[group]).length;
    const lastLevelTags = tempTags[group][lastLevelIndex - 1];
    // delete

    if (lastLevelTags.length === 1) {
      const copiedSelectedArr = [...selectedItem];
      const newSelectedArr = copiedSelectedArr.filter((i) => i !== group);

      if (filterData.filter((item) => newSelectedArr.includes(item))) {
        dispatch(
          FilterCreators.universalFilterSetter({
            key: 'showFilterResult',
            value: false
          })
        );
      }
      dispatch(FilterCreators.setSelectedItem(newSelectedArr));
    }

    tempTags[group][lastLevelIndex - 1] = lastLevelTags.filter((tag) => tag.id !== id);
    delete tempSelectedObj[id];

    dispatch(FilterCreators.setTags(tempTags));
    dispatch(
      FilterCreators.universalFilterSetter({
        key: group,
        value: tempSelectedObj
      })
    );
  };

  useEffect(() => {
    if (showSearchInp) searchRef.current.focus();
  }, [showSearchInp]);

  useEffect(() => {
    const tempSelectedMachines = {};
    selectedItem.forEach((item) => {
      if (filterData.find((i) => i.groupTitle === item)) {
        const finalLength = Object.keys(tags[item]).length;
        const lastItem = tags[item][finalLength - 1];
        if (Array.isArray(lastItem)) {
          lastItem.forEach((obj) => {
            tempSelectedMachines[obj.id] = { ...obj, group: item };
          });
        } else {
          tempSelectedMachines[lastItem.id] = { ...lastItem, group: item };
        }
      }
    });

    setActiveTab(Object.keys(tempSelectedMachines)[0]);
    dispatch(KPVCreators.getKpvData(Object.keys(tempSelectedMachines)[0]));
    setSelectedMachines(tempSelectedMachines);
  }, [tags]);

  const handleMachineSelect = (machineId) => {
    if (activeTab === machineId) return;
    if (!kpvData[machineId]?.length) {
      dispatch(KPVCreators.getKpvData(machineId));
    }
    setActiveTab(machineId);
  };

  // useEffect(() => {
  //   const clearCount = setInterval(() => {
  //     dispatch(KPVCreators.getKpvData(activeTab));
  //   }, [15000]);

  //   return () => clearInterval(clearCount);
  // }, []);

  return (
    <Container>
      <HeaderContainer>
        {Object.keys(selectedMachines).map((machine) => (
          <MachineHeaderText
            onClick={() => handleMachineSelect(machine)}
            className={activeTab === machine ? 'active' : ''}
            key={machine}
          >
            {selectedMachines[machine].name}
            <CancelIcon onClick={() => handleRemoveMachine(selectedMachines[machine])}>
              <DynamicSVGIcon iconUrl={CancelBlack} width='1.5rem' />

              {/* <CancelBlack /> */}
            </CancelIcon>
          </MachineHeaderText>
        ))}
      </HeaderContainer>
      <ContentContainer>
        <TableContainer>
          <Row className='header'>
            {colPropsInGeneral.map(
              (col, key) =>
                col.isPresent && (
                  <Cell
                    key={key}
                    width={col.width}
                    order={col.order}
                    border={col.name !== 'Action'}
                    className='colHeading'
                  >
                    {showSearchInp && col.searchIcon ? (
                      <SearchInput
                        className='show'
                        ref={searchRef}
                        type='text'
                        placeholder='Search Title'
                        onChange={handleSearchQuery}
                        value={searchQuery}
                        onKeyUp={(e) => _handleKeyPress(e)}
                      />
                    ) : (
                      localeStrings[col.label] || col.label
                    )}
                    {col.searchIcon && (
                      <SearchIcon onClick={handleTitleSearch}>
                        {toggleSearchIcon ? (
                          <DynamicSVGIcon iconUrl={searchBlack} />
                        ) : (
                          <DynamicSVGIcon iconUrl={CancelBlack} />
                        )}
                      </SearchIcon>
                    )}
                  </Cell>
                )
            )}
          </Row>
          {showSearchInp && filteredResultData ? (
            filteredResultData.map((group) => (
              <KPVGroup
                key={group.id}
                group={group}
                machineId={activeTab}
                machineName={selectedMachines[activeTab]?.name}
                activeTab={activeTab}
              />
            ))
          ) : loading ? (
            <Loader />
          ) : (
            kpvData[activeTab] &&
            kpvData[activeTab].map((group) => (
              <KPVGroup
                key={group.id}
                group={group}
                machineId={activeTab}
                machineName={selectedMachines[activeTab]?.name}
                activeTab={activeTab}
              />
            ))
          )}
        </TableContainer>
      </ContentContainer>
    </Container>
  );
};

export default KPVList;
