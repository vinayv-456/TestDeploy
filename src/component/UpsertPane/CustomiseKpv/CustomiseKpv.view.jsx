/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBoxContainer, KPVItemContainer, RadioContainer, RadioIcon, VerticalDiv } from './CustomiseKpv.style';
import { ReactComponent as CheckMark } from '../../../assets/icons/KPV/checkmark.svg';
import CollapsableContainer from '../CollapsableContainer/CollapsableContainer.view';
import { Creators as UpsertPaneCreators } from '../Store';
import { CHART_TYPES } from '../../../constants';

export const CustomiseKpvContent = ({ kpvs, chartType }) => {
  const { machinesSelected, multiSelectKpv } = useSelector((state) => state.upsertPaneData);
  const dispatch = useDispatch();
  const { machinesShortlisted } = useSelector((state) => state.KPVCharts);
  const [UniqueMachines, setUniqueMachines] = useState([]);
  const handleSelectMachine = (ele) => {
    if (multiSelectKpv) {
      if (machinesSelected.find((machines) => machines.machineId === ele.machineId && machines.kpvId === ele.kpvId)) {
        dispatch(
          UpsertPaneCreators.setUpsertPaneData({
            key: 'machinesSelected',
            value: machinesSelected.filter(
              (machines) => !(machines.machineId === ele.machineId && machines.kpvId === ele.kpvId)
              // (machines) => machines.machineId !== ele.machineId && machines.kpvId !== ele.kpvId
            )
          })
        );
      } else {
        dispatch(
          UpsertPaneCreators.setUpsertPaneData({
            key: 'machinesSelected',
            value: [...machinesSelected, ele]
          })
        );
      }
    } else {
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'machinesSelected',
          value: []
        })
      );
      dispatch(
        UpsertPaneCreators.setUpsertPaneData({
          key: 'machinesSelected',
          value: [ele]
        })
      );
    }
  };

  useEffect(() => {
    const tempUniqueMachines = [];
    (kpvs || machinesShortlisted).forEach((e) => {
      if (!tempUniqueMachines.find((ele) => ele.machineId === e.machineId)) {
        tempUniqueMachines.push(e);
      }
    });
    // console.log({ tempUniqueMachines });
    setUniqueMachines(tempUniqueMachines);
  }, [machinesShortlisted]);

  return (
    <>
      {chartType !== CHART_TYPES.TRANSITION_CHART &&
        (kpvs || machinesShortlisted).map((ele, index) => (
          <KPVItemContainer key={index}>
            {!multiSelectKpv ? (
              <RadioContainer onClick={() => handleSelectMachine(ele)}>
                {machinesSelected.find(
                  (machine) => ele.machineId === machine.machineId && machine.kpvId === ele.kpvId
                ) && <RadioIcon />}
              </RadioContainer>
            ) : (
              <CheckBoxContainer
                onClick={() => handleSelectMachine(ele)}
                className={
                  machinesSelected.find((machine) => ele.machineId === machine.machineId && machine.kpvId === ele.kpvId)
                    ? 'active'
                    : ''
                }
              >
                <CheckMark className='' />
              </CheckBoxContainer>
            )}
            <div>
              <div>
                <span>{ele.machineName}</span>
                <VerticalDiv>|</VerticalDiv>
                <span>{ele.kpvName}</span>
              </div>
            </div>
          </KPVItemContainer>
        ))}
      {chartType === CHART_TYPES.TRANSITION_CHART &&
        (kpvs || UniqueMachines).map((ele, index) => (
          <KPVItemContainer key={index}>
            {!multiSelectKpv ? (
              <RadioContainer onClick={() => handleSelectMachine(ele)}>
                {machinesSelected.find(
                  (machine) => ele.machineId === machine.machineId && machine.kpvId === ele.kpvId
                ) && <RadioIcon />}
              </RadioContainer>
            ) : (
              <CheckBoxContainer
                onClick={() => handleSelectMachine(ele)}
                className={
                  machinesSelected.find((machine) => ele.machineId === machine.machineId && machine.kpvId === ele.kpvId)
                    ? 'active'
                    : ''
                }
              >
                <CheckMark className='' />
              </CheckBoxContainer>
            )}
            <div>
              <div>
                <span>{ele.machineName}</span>
              </div>
            </div>
          </KPVItemContainer>
        ))}
      {/* {(kpvs || machinesShortlisted).map((ele, index) => (
        <KPVItemContainer key={index}>
          {!multiSelectKpv ? (
            <RadioContainer onClick={() => handleSelectMachine(ele)}>
              {machinesSelected.find(
                (machine) => ele.machineId === machine.machineId && machine.kpvId === ele.kpvId
              ) && <RadioIcon />}
            </RadioContainer>
          ) : (
            <CheckBoxContainer
              onClick={() => handleSelectMachine(ele)}
              className={
                machinesSelected.find((machine) => ele.machineId === machine.machineId && machine.kpvId === ele.kpvId)
                  ? 'active'
                  : ''
              }
            >
              <CheckMark className='' />
            </CheckBoxContainer>
          )}
          {chartType === CHART_TYPES.TRANSITION_CHART ? (
            <div>
              <div>
                <span>{ele.machineName}</span>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <span>{ele.machineName}</span>
                <VerticalDiv>|</VerticalDiv>
                <span>{ele.kpvName}</span>
              </div>
            </div>
          )}
        </KPVItemContainer>
      ))} */}
    </>
  );
};

const CustomiseKpv = ({ header, value }) => {
  const { multiSelectKpv, chartType } = useSelector((state) => state.upsertPaneData);

  return (
    <CollapsableContainer header={header} multiSelectKpv={multiSelectKpv} value={value}>
      <CustomiseKpvContent chartType={chartType} />
    </CollapsableContainer>
  );
};

export default CustomiseKpv;
