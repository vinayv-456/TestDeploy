/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ColOptions,
  ColumnText,
  DropdownIcon,
  ColDropdownContainer,
  ViewColoumnsContainer,
  ColoumnListText,
  CheckBoxIcon,
  ColItemContainer
} from '../KPVCustomComponent/KPVCustom.style';
import { Creators as FilterResultCreators } from '../Store/index';
import { DropDownArrow } from '../../../assets/icons';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import { ReactComponent as CheckMark } from '../../../assets/icons/KPV/checkmark.svg';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const ColItem = ({ name, label, type }) => {
  const { colPropsInGeneral, colPropsInShortlist } = useSelector((state) => state.filterResultData);
  const setCheckbox = () => {
    let check;
    if (type === 'general') {
      check = !colPropsInGeneral.filter((col) => col.name === name)[0].isPresent;
    } else if (type === 'shortlist') {
      check = !colPropsInShortlist.filter((col) => col.name === name)[0].isPresent;
    }
    return check;
  };

  const [removeCol, setRemoveCol] = useState(setCheckbox);
  const dispatch = useDispatch();
  const handleColToggle = () => {
    // checking if column is present or not.
    let tempObj;
    if (type === 'general') {
      tempObj = [...colPropsInGeneral];
    } else {
      tempObj = [...colPropsInShortlist];
    }

    let isColPresent = false;
    if (tempObj.filter((obj) => obj.name === name)[0].isPresent) {
      isColPresent = true;
    }

    if (isColPresent) {
      // column is present so remove it.
      setRemoveCol(true);
      const index = tempObj.findIndex((obj) => obj.name === name);
      tempObj[index].isPresent = false;
    } else {
      // column is not there so add it.
      setRemoveCol(false);
      const index = tempObj.findIndex((obj) => obj.name === name);
      tempObj[index].isPresent = true;
    }
    if (type === 'general') {
      dispatch(FilterResultCreators.setGeneralColProps(tempObj));
    } else {
      dispatch(FilterResultCreators.setShortlistColProps(tempObj));
    }
  };
  return (
    <ColItemContainer onClick={handleColToggle}>
      <CheckBoxIcon>{!removeCol && <CheckMark style={{ padding: '15%' }} />}</CheckBoxIcon>
      <ColoumnListText>{label}</ColoumnListText>
    </ColItemContainer>
  );
};

const ColumnFilter = ({ type }) => {
  const [showColDropdown, setShowColDropDown] = useState(false);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const removableGeneralColumns = [
    { label: 'L1 Limits', name: 'L1' },
    { label: 'L2 Limits', name: 'L2' }
  ];
  const colFilterRef = useRef();

  const handleColDropDownClose = () => {
    if (showColDropdown) setShowColDropDown(false);
  };

  useClickOutside(colFilterRef, handleColDropDownClose);

  return (
    <ViewColoumnsContainer ref={colFilterRef}>
      <ColOptions
        onClick={() => {
          setShowColDropDown(!showColDropdown);
        }}
      >
        <ColumnText>{localeStrings.viewColumns || 'View columns'}</ColumnText>
        <DropdownIcon className={showColDropdown ? 'active' : ''}>
          <DynamicSVGIcon iconUrl={DropDownArrow} />
        </DropdownIcon>
      </ColOptions>
      {showColDropdown && (
        <ColDropdownContainer>
          {removableGeneralColumns.map((col, index) => (
            <ColItem key={index} type={type} label={col.label} name={col.name} />
          ))}
        </ColDropdownContainer>
      )}
    </ViewColoumnsContainer>
  );
};

export default ColumnFilter;
