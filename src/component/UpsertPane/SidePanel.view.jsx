/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckBox,
  GridButton,
  GridOptContainer,
  Input,
  ItemContainer,
  Radio,
  RadioIcon,
  SidePanelContainer,
  SubItemContainer
} from './UpsertPane.style';
import { ReactComponent as CheckMark } from '../../assets/icons/KPV/checkmark.svg';
import CollapsableContainer from './CollapsableContainer/CollapsableContainer.view';
import { Creators as UpsertPaneCreators } from './Store';
import { Creators as kpvChartingCreators } from '../KPVCharts/Store/action';
import CustomiseKpv from './CustomiseKpv/CustomiseKpv.view';
import ScaleYAxis from './ScaleYAxis/ScaleYAxis.view';
// import { upsertOptions } from '../../constants/sampleData';
import TransitionChartType from './TransitionChartType/TransitionChartType.view';
import { CHART_TYPES } from '../../constants';
import Loader from '../Loader/Loader';

const SidePanel = () => {
  const { paneTitle, showDetails, multiAxis, multiGrid, labelsData, chartType } = useSelector(
    (state) => state.upsertPaneData
  );
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const { upsertPaneOptions } = useSelector((state) => state.KPVCharts);

  const dispatch = useDispatch();

  const handleTitleInput = (e) => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'paneTitle',
        value: e.target.value
      })
    );
  };

  const handleDetailsSelect = (value) => {
    dispatch(
      UpsertPaneCreators.setShowDetails({
        key: value,
        value: !showDetails[value]
      })
    );
  };

  const handleAxisNo = (value) => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'multiAxis',
        value
      })
    );
  };

  useEffect(() => {
    if (!upsertPaneOptions[chartType]) {
      dispatch(kpvChartingCreators.setPaneOptions({ key: 'upsertPaneOptions', chartType }));
    }
    if (labelsData.length > 1) {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'multiGrid',
          value: true
        })
      );
    } else {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'multiGrid',
          value: false
        })
      );
    }
  }, []);

  const handleGrid = (value) => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'multiGrid',
        value
      })
    );
  };

  const gridOptions = [
    { label: 'Single Grid', value: false },
    { label: 'Multi Grid', value: true }
  ];

  return (
    <SidePanelContainer>
      {!upsertPaneOptions[chartType] ? (
        <Loader />
      ) : (
        upsertPaneOptions[chartType]?.map((opt) => {
          switch (opt.type) {
            case 'paneTitle':
              return (
                <CollapsableContainer header={(localeStrings.Pane || 'Pane') + ' ' + (localeStrings.Title || 'Title')}>
                  <Input type='text' value={paneTitle} onChange={handleTitleInput} placeholder='Enter pane title' />
                </CollapsableContainer>
              );
            case 'transitionCharts':
              return <TransitionChartType menu={opt} />;
            case 'customiseKpvs':
              return <CustomiseKpv header={localeStrings[opt.label] || opt.label} value={opt.value} />;
            case 'showDetails':
              return (
                <CollapsableContainer header={localeStrings[opt.label] || opt.label}>
                  {opt.subMenu.map((ele, index) => {
                    const { label, value } = ele;
                    return (
                      <ItemContainer key={index} onClick={() => handleDetailsSelect(value)}>
                        <CheckBox className={showDetails[value] ? 'active' : ''}>
                          <CheckMark />
                        </CheckBox>
                        {localeStrings[label] || label}
                      </ItemContainer>
                    );
                  })}
                </CollapsableContainer>
              );
            case 'showOverlays':
              return (
                <CollapsableContainer header={localeStrings[opt.label] || opt.label}>
                  <ItemContainer>
                    <CheckBox className=''>
                      <CheckMark className='' />
                    </CheckBox>
                    L1 limits
                  </ItemContainer>
                </CollapsableContainer>
              );
            case 'yAxis-settings':
              return (
                <CollapsableContainer header={localeStrings[opt.label] || opt.label}>
                  {opt.subMenu.map((ele, index) => {
                    const { label, value } = ele;
                    return (
                      <React.Fragment key={index}>
                        <ItemContainer>
                          <Radio onClick={() => handleAxisNo(value)}>{multiAxis === value && <RadioIcon />}</Radio>
                          {localeStrings[label] || label}
                        </ItemContainer>
                        <SubItemContainer>
                          {value && multiAxis && (
                            <GridOptContainer>
                              {gridOptions.map((opt, index) => (
                                <GridButton
                                  key={index}
                                  className={multiGrid === opt.value ? 'active' : ''}
                                  onClick={() => handleGrid(opt.value)}
                                >
                                  {localeStrings[opt.label] || opt.label}
                                </GridButton>
                              ))}
                            </GridOptContainer>
                          )}
                        </SubItemContainer>
                      </React.Fragment>
                    );
                  })}
                </CollapsableContainer>
              );
            case 'scale-yAxis':
              return <ScaleYAxis header={localeStrings[opt.label] || opt.label} />;
            default:
              break;
          }
          return <></>;
        })
      )}
    </SidePanelContainer>
  );
};

export default SidePanel;
