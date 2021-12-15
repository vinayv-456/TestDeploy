/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  BreadCrumbText,
  Container,
  DropdownImage,
  PlotBtn,
  PlotContainer,
  PlotOptions,
  WrapperDiv,
  ItemsNo,
  PlotDropDownContainer,
  PlotOptionText
} from './KPVCustom.style';
import { DropDownArrowWhite } from '../../../assets/icons';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import ColumnFilter from '../ColumnCustom/ColCustom.view';
import PlotOptionsModal from '../PlotOptionsModal/PlotOptionsModal.view';

const KPVCustomComponent = () => {
  const { filterData, [filterData[0].groupTitle]: selectedObj } = useSelector((state) => state.filterData);
  const { isEdit } = useSelector((state) => state.myAnalytics);
  const [breadCrumb, setBreadCrumb] = useState('');
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const [showColDropdown, setShowColDropDown] = useState(false);
  const [showPlotDropdown, setShowPlotDropDown] = useState(false);
  const { KPVShortlist } = useSelector((state) => state.filterResultData);
  const [showPlotOptModal, setShowPlotOptModal] = useState(false);
  const history = useHistory();
  const colFilterRef = useRef();
  const plotRef = useRef();

  const handleColDropDownClose = () => {
    if (showColDropdown) setShowColDropDown(false);
  };

  const handlePlotOptDropDownClose = () => {
    if (showPlotDropdown) setShowPlotDropDown(false);
  };

  useClickOutside(colFilterRef, handleColDropDownClose);
  useClickOutside(plotRef, handlePlotOptDropDownClose);

  const getBreadCrumb = (obj) => {
    let tempBreadCrumb = '';
    Object.keys(obj).forEach((ele, index) => {
      if (obj[ele].values) tempBreadCrumb += `${obj[ele].name} > `;
      else if (index !== Object.keys(obj).length - 1) {
        tempBreadCrumb += `${obj[ele].name}, `;
      } else {
        tempBreadCrumb += `${obj[ele].name}`;
      }
    });
    setBreadCrumb(tempBreadCrumb);
  };

  useEffect(() => {
    getBreadCrumb(selectedObj);
  }, [selectedObj]);

  return (
    <Container style={{ marginTop: '1.5rem' }}>
      {!isEdit ? <BreadCrumbText>{breadCrumb}</BreadCrumbText> : <div />}
      <WrapperDiv>
        <ColumnFilter type='general' />
        <PlotContainer className='content' ref={plotRef}>
          <PlotBtn onClick={() => setShowPlotOptModal(true)}>
            {localeStrings.plot || 'Plot'}
            {KPVShortlist.length > 0 && <ItemsNo>{KPVShortlist.length}</ItemsNo>}
          </PlotBtn>
          <PlotOptions
            onClick={() => {
              setShowPlotDropDown(!showPlotDropdown);
            }}
          >
            <DropdownImage className={showPlotDropdown ? 'active' : ''} src={DropDownArrowWhite} />
          </PlotOptions>
          {showPlotDropdown && (
            <PlotDropDownContainer>
              <PlotOptionText onClick={() => setShowPlotOptModal(true)}>{localeStrings.plot || 'Plot'}</PlotOptionText>
              <PlotOptionText onClick={() => history.push('/home/kpv-shortlist')}>
                {localeStrings.viewShortlist || 'View Shortlist'}
              </PlotOptionText>
            </PlotDropDownContainer>
          )}
        </PlotContainer>
      </WrapperDiv>
      {showPlotOptModal && <PlotOptionsModal setShowPlotOptModal={setShowPlotOptModal} />}
    </Container>
  );
};

export default KPVCustomComponent;
