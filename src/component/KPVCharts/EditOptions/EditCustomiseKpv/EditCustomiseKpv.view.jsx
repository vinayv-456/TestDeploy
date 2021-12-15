/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToogleDiv } from '../../../UpsertPane/CollapsableContainer/CollapsableContainer.style';
import { Button, Radio, RadioIcon } from '../../../UpsertPane/UpsertPane.style';
import {
  BtnContainer,
  Input,
  Container,
  FlexWrapper,
  KpvListContainer,
  SearchIcon,
  Inputcontainer
} from './EditCustomiseKpv.style';
import { Creators as UpsertPaneCreators } from '../../../UpsertPane/Store';
import { Creators as KPVChartsCreators } from '../../Store';
import { CustomiseKpvContent } from '../../../UpsertPane/CustomiseKpv/CustomiseKpv.view';
import { searchBlack } from '../../../../assets/icons';
import { getSinglePaneChartData } from '../../PaneCard/getPlotDataFunctionality';
import { CHART_TYPES } from '../../../../constants';
import { ToggleOff, ToggleOn } from '../../../../assets/icons/KPV';
import DynamicSVGIcon from '../../../Common/DynamicSVGIcon';

const EditCustomiseKpv = (props) => {
  const { editPaneNo, setShowCustomiseKpv, setShowMenu } = props;
  const { multiSelectKpv, machinesSelected } = useSelector((state) => state.upsertPaneData);
  const { machinesShortlisted, plotData } = useSelector((state) => state.KPVCharts);
  const { chartType, transitionChartType } = useSelector((state) => state.KPVCharts.panesShortHandInfo[editPaneNo]);
  const [filteredMachinesShortlisted, setFilteredMachinesShortlisted] = useState(machinesShortlisted);
  const [kpvSearchQuery, setKpvSearchQuery] = useState('');
  const dispatch = useDispatch();
  const { localeStrings } = useSelector((state) => state.localeStrings);

  useEffect(() => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'machinesSelected',
        value: props.machinesSelected
      })
    );
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'multiSelectKpv',
        value: props.machinesSelected.length > 1
      })
    );
  }, []);

  const handleMultiSlectToogle = () => {
    if (multiSelectKpv) {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'machinesSelected',
          value: []
        })
      );
    }
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'multiSelectKpv',
        value: !multiSelectKpv
      })
    );
  };

  const handleUpdate = () => {
    const [tempData, objLabel] = getSinglePaneChartData(
      plotData[chartType],
      machinesSelected,
      chartType,
      transitionChartType
    );
    const changes = [
      {
        key: 'data',
        value: [tempData]
      },
      {
        key: 'labelsData',
        value: [objLabel]
      },
      {
        key: 'machinesSelected',
        value: machinesSelected
      }
    ];
    changes.forEach((ele) => {
      dispatch(
        KPVChartsCreators.editPaneData({
          index: editPaneNo,
          key: ele.key,
          value: ele.value
        })
      );
    });
    dispatch(UpsertPaneCreators.resetUpsertPaneData());
    setShowCustomiseKpv(false);
    setShowMenu(false);
  };

  const handleCancel = () => {
    setShowMenu(false);
    setShowCustomiseKpv(false);
  };

  const handleKPVSearch = (e) => {
    setKpvSearchQuery(e.target.value);
  };

  useEffect(() => {
    const tempUniqueMachines = [];
    machinesShortlisted.forEach((e) => {
      if (!tempUniqueMachines.find((ele) => ele.machineId === e.machineId)) {
        tempUniqueMachines.push(e);
      }
    });
    const result = (chartType === CHART_TYPES.TRANSITION_CHART ? tempUniqueMachines : machinesShortlisted).reduce(
      (tempFilteredMachinesShortlisted, machine) => {
        if (
          chartType === CHART_TYPES.DATA_CHART &&
          (machine.machineName.toLowerCase().includes(kpvSearchQuery.toLowerCase()) ||
            machine.kpvName.toLowerCase().includes(kpvSearchQuery.toLowerCase()))
        ) {
          tempFilteredMachinesShortlisted.push(machine);
        } else if (
          chartType === CHART_TYPES.TRANSITION_CHART &&
          machine.machineName.toLowerCase().includes(kpvSearchQuery.toLowerCase())
        ) {
          tempFilteredMachinesShortlisted.push(machine);
        }
        return tempFilteredMachinesShortlisted;
      },
      []
    );
    setFilteredMachinesShortlisted(result);
  }, [kpvSearchQuery]);
  return (
    <Container>
      <FlexWrapper>
        <Inputcontainer>
          <Input placeholder='Search KPV' onChange={handleKPVSearch} value={kpvSearchQuery} />
          <SearchIcon width='1.5'>
            <DynamicSVGIcon iconUrl={searchBlack} width='1.5rem' />
          </SearchIcon>
        </Inputcontainer>
        <ToogleDiv>
          <span style={{ textTransform: 'capitalize' }}>{localeStrings['Multi Select'] || 'Multi Select'}</span>
          <div style={{ marginLeft: '1rem' }} onClick={handleMultiSlectToogle}>
            {multiSelectKpv ? (
              <DynamicSVGIcon width='2.5rem' iconUrl={ToggleOn} />
            ) : (
              <DynamicSVGIcon width='2.5rem' iconUrl={ToggleOff} />
            )}
          </div>
          {/* <Radio onClick={handleMultiSlectToogle}>{multiSelectKpv && <RadioIcon />}</Radio> */}
        </ToogleDiv>
      </FlexWrapper>
      <KpvListContainer>
        <CustomiseKpvContent kpvs={filteredMachinesShortlisted} chartType={chartType} />
      </KpvListContainer>
      <BtnContainer>
        <Button onClick={handleCancel}>{localeStrings.cancel || 'Cancel'}</Button>
        <Button className='dark' onClick={handleUpdate}>
          {localeStrings.update || 'update'}
        </Button>
      </BtnContainer>
    </Container>
  );
};

export default EditCustomiseKpv;
