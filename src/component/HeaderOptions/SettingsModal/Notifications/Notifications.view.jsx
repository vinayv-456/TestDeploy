/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, ItemContainer, Label } from './Notifications.style';
import ToggleOn from '../../../../assets/icons/KPV/Toggle on.svg';
import ToggleOff from '../../../../assets/icons/KPV/toggle off.svg';
import { Creators as LayoutCreators } from '../../../../views/Layout/store';
import DynamicSVGIcon from '../../../Common/DynamicSVGIcon';
import DropdownBarComp from '../../../Common/DropdownBar/DropdownBar.view';

const Notifications = () => {
  const dispatch = useDispatch();
  const { showNotificationTabs } = useSelector((state) => state.home);

  const tabsInit = [
    { label: 'Alarms', isPresent: true },
    { label: 'Approvals', isPresent: true },
    { label: 'PI', isPresent: true },
    { label: 'Schedule', isPresent: true },
    { label: 'CBM alerts', isPresent: true }
  ];
  const [tabs, setTabs] = useState(tabsInit);

  useEffect(() => {
    setTabs(tabsInit.map((e) => ({ ...e, isPresent: showNotificationTabs.includes(e.label) })));
  }, []);

  const handleTabToggle = (tab) => {
    const selectedTabs = [];
    const temp = tabs.map((ele) => {
      if (ele.label === tab.label) {
        if (ele.isPresent) {
          selectedTabs.filter((e) => e !== tab.label);
        } else {
          selectedTabs.push(tab.label);
        }
        return { label: tab.label, isPresent: !ele.isPresent };
      }
      if (ele.isPresent) selectedTabs.push(ele.label);
      return ele;
    });
    setTabs([...temp]);
    dispatch(LayoutCreators.setNotificationTabs([...selectedTabs]));
  };

  return (
    <Container>
      <Header>Show Notifications of</Header>
      <DropdownBarComp>last one week</DropdownBarComp>
      <Header style={{ marginBottom: '0.5rem' }}>Show Notifications for</Header>
      {tabs.map((tab, index) => (
        <ItemContainer key={index}>
          {tab.label}
          <div onClick={() => handleTabToggle(tab)}>
            <DynamicSVGIcon iconUrl={tab.isPresent ? ToggleOn : ToggleOff} width='4rem' />
          </div>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default Notifications;
