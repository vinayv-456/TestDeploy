/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BackBlack } from '../../../assets/icons';
import {
  Button,
  Cell,
  Container,
  HeaderText,
  HeadingBox,
  LeftArrow,
  Row,
  SaveICon,
  TableContainer,
  Wrapper
} from './KPVShortlist.style';
import DropArrow from '../../../assets/icons/layout/dropdownarrow.svg';
import { Creators as FilterResultCreators } from '../Store/index';
import { Creators as myAnalyticsCreators } from '../../../views/MyAnalytics/store';
import ColumnFilter from '../ColumnCustom/ColCustom.view';
import { ActionIcon } from '../KPVGroupComponent/KPVGroupComponent.style';
import SaveShortListModal from '../SaveShortlistModal/SaveShortlist.view';
import PlotOptionsModal from '../PlotOptionsModal/PlotOptionsModal.view';
import RemoveFromPane from '../../SvgIcons/KPVList/RemoveFromPane';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';
import ButtonComp from '../../Common/Button/Button.view';
import { Edit } from '../../../assets/icons/KPV';
import IconComp from '../../Common/IconContainer/Icon';

const KPVShortlistComp = () => {
  const { colPropsInShortlist, KPVShortlist } = useSelector((state) => state.filterResultData);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showPlotOptModal, setShowPlotOptModal] = useState(false);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const { myAnalyticsItemName, isEdit, menuId } = useSelector((state) => state.myAnalytics);
  const { filterPaths } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleShortList = (entry) => {
    const check = KPVShortlist.findIndex((ele) => ele.id === entry.id && ele.machineId === entry.machineId);
    if (check < 0) {
      dispatch(FilterResultCreators.setKpvShortlist([...KPVShortlist, entry]));
    } else {
      dispatch(
        FilterResultCreators.setKpvShortlist([...KPVShortlist.slice(0, check), ...KPVShortlist.slice(check + 1)])

        // FilterResultCreators.setKpvShortlist(KPVShortlist.filter((e) => e.id !== entry.id && e.machineId !== machineId))
      );
    }
  };

  const handleBack = () => {
    history.goBack();
    dispatch(FilterCreators.universalFilterSetter({ key: 'showFilter', value: true }));
    dispatch(FilterCreators.universalFilterSetter({ key: 'showFilterResult', value: true }));
  };

  const setEdit = () => {
    dispatch(myAnalyticsCreators.setAnalyticsItemEdit(true));
  };

  const handlePlot = () => {
    if (myAnalyticsItemName) {
      history.push('/home/kpv-charting');
    } else {
      setShowPlotOptModal(true);
    }
  };

  const handleDiscard = () => {
    dispatch(myAnalyticsCreators.setAnalyticsItemEdit(false));
  };

  const handleAddKpvs = () => {
    dispatch(FilterCreators.universalFilterSetter({ key: 'showFilter', value: true }));
    dispatch(FilterCreators.universalFilterSetter({ key: 'showFilterResult', value: true }));
    history.push(filterPaths[menuId]);
  };

  return (
    <Container>
      <HeadingBox>
        <Wrapper>
          <LeftArrow onClick={handleBack}>
            <DynamicSVGIcon iconUrl={DropArrow} width='2.4rem' />

            {/* <DynamicSVGIcon width='4.5rem' iconUrl={BackBlack} /> */}
          </LeftArrow>
          <HeaderText>{myAnalyticsItemName || localeStrings.kpvShortlist || 'KPV shortlist'}</HeaderText>
        </Wrapper>
        <Wrapper>
          <ColumnFilter type='shortlist' />
          {isEdit ? (
            <>
              <ButtonComp style={{ marginRight: '2.5rem' }} onClick={handleAddKpvs}>
                + Add KPVs
              </ButtonComp>
              <ButtonComp style={{ marginLeft: '2.5rem', marginRight: '1.5rem' }} onClick={handleDiscard}>
                Discard
              </ButtonComp>
              <ButtonComp onClick={handleDiscard} dark={true}>
                save
              </ButtonComp>
            </>
          ) : (
            <>
              <Button type='button' onClick={handlePlot}>
                {localeStrings.plot || 'Plot'}
              </Button>
              {/* <SaveICon onClick={() => setShowSaveModal(true)}>Save</SaveICon> */}
              {myAnalyticsItemName && (
                <IconComp onClick={setEdit}>
                  <DynamicSVGIcon iconUrl={Edit} width='2.2rem' />
                </IconComp>
              )}
            </>
          )}
        </Wrapper>
      </HeadingBox>
      <TableContainer>
        <Row className='header'>
          {colPropsInShortlist.map(
            (col, key) =>
              col.isPresent && (
                <Cell
                  key={key}
                  width={col.width}
                  order={col.order}
                  border={col.name !== 'Action'}
                  className='colHeading'
                >
                  {localeStrings[col.label] || col.label}
                </Cell>
              )
          )}
        </Row>
        {KPVShortlist.map((entry, key1) => (
          <Row key={key1}>
            {colPropsInShortlist.map(
              (col, key) =>
                col.isPresent && (
                  <Cell
                    key={key}
                    width={col.width}
                    order={col.order}
                    align={col.textAlign}
                    className={KPVShortlist.includes(entry) ? 'active' : ''}
                    border={col.name !== 'Action'}
                  >
                    {col.name !== 'Action' ? (
                      entry[col.name] || '-'
                    ) : (
                      <ActionIcon onClick={() => handleShortList(entry)}>
                        <RemoveFromPane />
                      </ActionIcon>
                    )}
                  </Cell>
                )
            )}
          </Row>
        ))}
      </TableContainer>
      {showSaveModal && <SaveShortListModal setShowSaveModal={setShowSaveModal} />}
      {showPlotOptModal && <PlotOptionsModal setShowPlotOptModal={setShowPlotOptModal} />}
    </Container>
  );
};

export default KPVShortlistComp;
