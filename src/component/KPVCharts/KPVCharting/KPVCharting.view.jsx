/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Duration, TopFullScreen, ZoomIn, ZoomOut } from '../../../assets/icons';
import Compress from '../../../assets/icons/KPV/CombineCharts.svg';
import { BackArrow, ForwardNavArrow, ForwardNavArrowBlack, Kabab, Zoom } from '../../../assets/icons/KPV';
import { Creators as LayoutCreator } from '../../../views/Layout/store';
import DurationDropdownComp from '../DurationDropdown/DurationDropdown.view';
import FullScreenKpvCharting from '../FullScreenKpvCharting/FullScreenKpvCharting.view';
import PaneCard from '../PaneCard/PaneCard.view';
import { Creators as KPVChartsCreators } from '../Store';
import { Creators as FilterCreators } from '../../../views/dashboard/FilterView/store';
import {
  Header,
  AddPaneBtn,
  Container,
  NavigationDiv,
  ChartOptionsDiv,
  OptBtn,
  OptIcon,
  DurationContainer,
  UpperLayer
} from './KPVCharting.style';
import ChartOptions from '../ChartOptions/ChartOptions.view';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const KPVCharting = () => {
  const dispatch = useDispatch();
  const [durationModal, setDurationModal] = useState(false);
  const history = useHistory();
  const { paneFullScreen, compressedView } = useSelector((state) => state.KPVCharts);
  const [fullScreen, setFullScreen] = useState(false);
  const [showChartOpts, setShowChartOpts] = useState(false);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  useEffect(() => {
    dispatch(LayoutCreator.setShowSideNav({ showSideNav: false }));
    return () => {
      dispatch(LayoutCreator.setShowSideNav({ showSideNav: true }));
    };
  }, []);
  const maxKey = paneFullScreen ? 'xMaxDomainFullScreen' : 'xMaxDomain';
  const minKey = paneFullScreen ? 'xMinDomainFullScreen' : 'xMinDomain';
  const handleZoomIn = () => {
    dispatch(KPVChartsCreators.operateDomainRange({ key: maxKey, value: 5, operation: '-' }));
  };
  const handleZoomOut = () => {
    dispatch(KPVChartsCreators.operateDomainRange({ key: maxKey, value: 5, operation: '+' }));
  };

  const handleMoveForward = () => {
    dispatch(KPVChartsCreators.operateDomainRange({ key: minKey, value: 5, operation: '+' }));
    dispatch(KPVChartsCreators.operateDomainRange({ key: maxKey, value: 5, operation: '+' }));
  };

  const handleMoveBack = () => {
    dispatch(KPVChartsCreators.operateDomainRange({ key: minKey, value: 5, operation: '-' }));
    dispatch(KPVChartsCreators.operateDomainRange({ key: maxKey, value: 5, operation: '-' }));
  };

  const handleBackNav = () => {
    if (!paneFullScreen) {
      // history.push('/home/analytics/data-view');
      history.goBack();
      dispatch(FilterCreators.universalFilterSetter({ key: 'showFilter', value: true }));
      dispatch(FilterCreators.universalFilterSetter({ key: 'showFilterResult', value: true }));
    } else {
      dispatch(KPVChartsCreators.exitPaneFullScreen());
    }
  };

  const handlePopOut = () => {
    setFullScreen(true);
  };
  const handleCompress = () => {
    dispatch(KPVChartsCreators.toggleCompressedView());
  };

  const handleAddPane = () => {
    if (!compressedView) {
      setShowChartOpts(true);
      // history.push('kpv-charting/add-pane');
    }
  };

  const durationRef = useRef();
  useClickOutside(durationRef, () => setDurationModal(false));
  return (
    <Container>
      <Header>
        <NavigationDiv>
          <OptIcon rotate={180} onClick={handleBackNav}>
            <DynamicSVGIcon iconUrl={ForwardNavArrow} width='2.5rem' />
          </OptIcon>
          <span>{localeStrings.Charting || 'Charting'}</span>
        </NavigationDiv>
        <ChartOptionsDiv>
          {!paneFullScreen && (
            <OptBtn className={compressedView ? 'disable' : ''} onClick={handleAddPane}>
              {`+ ${localeStrings.Add || 'Add'} ${localeStrings.Pane || 'Pane'}`}
            </OptBtn>
          )}
          <DurationContainer ref={durationRef}>
            <OptBtn onClick={() => setDurationModal(!durationModal)}>
              <OptIcon>
                <DynamicSVGIcon iconUrl={Duration} width='2.5rem' />
              </OptIcon>
              <span>{localeStrings.Duration || 'Duration'}</span>
              <OptIcon rotate={90} width={1.5}>
                <DynamicSVGIcon iconUrl={ForwardNavArrowBlack} />
              </OptIcon>
            </OptBtn>
            {durationModal && <DurationDropdownComp />}
          </DurationContainer>
          <OptBtn onClick={handleZoomOut}>
            <OptIcon disable={true}>
              <DynamicSVGIcon iconUrl={ZoomOut} width='2.5rem' />
            </OptIcon>
          </OptBtn>
          <OptBtn onClick={handleZoomIn}>
            <OptIcon>
              <DynamicSVGIcon iconUrl={ZoomIn} width='2.5rem' />
            </OptIcon>
          </OptBtn>
          <OptBtn onClick={handleMoveBack}>
            <OptIcon>
              <DynamicSVGIcon iconUrl={BackArrow} width='2.5rem' />
            </OptIcon>
          </OptBtn>
          <OptBtn onClick={handleMoveForward}>
            <OptIcon rotate={180}>
              <DynamicSVGIcon iconUrl={BackArrow} width='2.5rem' />
            </OptIcon>
          </OptBtn>
          {!paneFullScreen && (
            <>
              <OptBtn className={compressedView ? 'active' : ''} onClick={handleCompress}>
                <OptIcon>
                  <DynamicSVGIcon iconUrl={Compress} width='2.5rem' />
                </OptIcon>
              </OptBtn>
              <OptBtn onClick={handlePopOut}>
                <OptIcon>
                  <DynamicSVGIcon iconUrl={TopFullScreen} width='2.5rem' />
                </OptIcon>
              </OptBtn>

              <OptIcon src={Kabab} />
            </>
          )}
        </ChartOptionsDiv>
      </Header>
      <PaneCard />

      {!paneFullScreen && !compressedView && (
        <AddPaneBtn onClick={handleAddPane}>
          {`+ ${localeStrings.Add || 'Add'} ${localeStrings.Pane || 'Pane'}`}
        </AddPaneBtn>
      )}
      {showChartOpts && <ChartOptions setShowChartOpts={setShowChartOpts} />}
      {fullScreen && (
        <UpperLayer>
          <FullScreenKpvCharting setFullScreen={setFullScreen} />
        </UpperLayer>
      )}
    </Container>
  );
};

export default KPVCharting;
