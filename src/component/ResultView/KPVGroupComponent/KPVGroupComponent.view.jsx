/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, CollapsableContainer, Row, ToogleGroupICon } from '../KPVListComponent/KPVListComponent.style';
import { ActionIcon } from './KPVGroupComponent.style';
import { Creators as FilterResultCreators } from '../Store/index';
import KPVDetailsModal from '../KPVDetailsModal/KPVDetailsModal.view';
import CollapseIcon from '../../SvgIcons/KPVList/CollapseIcon';
import AddToPane from '../../SvgIcons/KPVList/AddToPane';
import RemoveFromPane from '../../SvgIcons/KPVList/RemoveFromPane';

const KPVGroup = ({ group, machineId, machineName, activeTab }) => {
  const [collapseGroup, setCollapseGroup] = useState(false);
  const { colPropsInGeneral, KPVShortlist } = useSelector((state) => state.filterResultData);
  const [KpvDetailsModal, setKpvDetailsModal] = useState(false);
  const [selectedKPV, setSelectedKPV] = useState([]);
  const dispatch = useDispatch();

  const handleShortList = (entry, groupName) => {
    const temp = { ...entry, machineId, machineName, groupName };

    const check = KPVShortlist.some((ele) => ele.id === entry.id && ele.machineId === machineId);
    if (!check) {
      dispatch(FilterResultCreators.setKpvShortlist([...KPVShortlist, temp]));
    } else {
      dispatch(
        FilterResultCreators.setKpvShortlist(
          KPVShortlist.filter(
            (e) =>
              (e.id !== entry.id && e.machineId === machineId) ||
              (e.id === entry.id && e.machineId !== machineId) ||
              (e.id !== entry.id && e.machineId !== machineId)
          )
        )
      );
    }
  };

  const handleKpvDetails = (entry) => {
    setKpvDetailsModal(true);
    setSelectedKPV(entry);
  };

  return (
    <>
      {group.values.length > 0 && (
        <>
          <Row>
            {/* <Cell>{group.groupTitle}</Cell> */}
            {colPropsInGeneral.map(
              (col, key) =>
                col.isPresent && (
                  <Cell
                    key={key}
                    width={col.width}
                    order={col.order}
                    align={col.textAlign}
                    border={col.name !== 'Action'}
                    className='groupHeading'
                  >
                    {col.label === 'KPV' && (
                      <>
                        <ToogleGroupICon onClick={() => setCollapseGroup(!collapseGroup)}>
                          <CollapseIcon />
                        </ToogleGroupICon>
                        {group.groupTitle}
                      </>
                    )}
                  </Cell>
                )
            )}
          </Row>
          {!collapseGroup && group.values.length > 0 && (
            <CollapsableContainer>
              {group.values.map((entry) => (
                <Row key={entry.id}>
                  {colPropsInGeneral.map(
                    (col, key) =>
                      col.isPresent && (
                        <Cell
                          key={key}
                          width={col.width}
                          order={col.order}
                          align={col.textAlign}
                          className={
                            KPVShortlist.some((ele) => ele.id === entry.id && ele.machineId === machineId)
                              ? 'active'
                              : ''
                          }
                          border={col.label !== 'Action'}
                          pointer={col.label === 'KPV'}
                          onClick={col.label === 'KPV' ? () => handleKpvDetails(entry) : null}
                        >
                          {col.label !== 'Action' ? (
                            entry[col.label] || '-'
                          ) : (
                            <ActionIcon onClick={() => handleShortList(entry, group.groupTitle)}>
                              {KPVShortlist.some((ele) => ele.id === entry.id && ele.machineId === machineId) ? (
                                <RemoveFromPane />
                              ) : (
                                <AddToPane />
                              )}
                            </ActionIcon>
                          )}
                        </Cell>
                      )
                  )}
                </Row>
              ))}
            </CollapsableContainer>
          )}
        </>
      )}
      {KpvDetailsModal && (
        <KPVDetailsModal setKpvDetailsModal={setKpvDetailsModal} selectedKPV={selectedKPV} machineId={activeTab} />
      )}
    </>
  );
};

export default KPVGroup;
