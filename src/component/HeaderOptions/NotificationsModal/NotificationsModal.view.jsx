/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import {
  Modal,
  ModalContainer,
  Header,
  TabContainer,
  TabItem,
  ActiveNotificationCount,
  CancelContainer,
  HeaderContainer
} from './NotificationsModal.style';
import CancelIcon from '../../../assets/icons/Filter/cancel white.svg';
import { Creators as LayoutCreators } from '../../../views/Layout/store';
import NotificationItem from './NotificationItem';
import { alaramsData, approvalsData, cbmAlertsData, scheduleData } from '../../../constants/sampleData';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';
import SettingIcon from '../../../assets/icons/KPV/Chart menu_customize.svg';
import { Creators as AlaramCreators } from '../../Alarams/Store';

const Alarams = () => {
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(LayoutCreators.toggleHeaderOption('notificationsModal'));
    const { id, kpvId, machineName } = data;
    const payload = {
      machineId: id,
      kpvId,
      machineName,
      chartType: 'dataChart',
      category: 'lots'
    };
    dispatch(AlaramCreators.setDetailedAlaramData({ kpvDetails: [{ ...payload }] }));
  };
  return (
    <>
      {alaramsData.map((item, index) => (
        <NotificationItem key={index} data={item} handleClick={handleClick} />
      ))}
    </>
  );
};

const Approvals = () => (
  <>
    {approvalsData.map((item, index) => (
      <NotificationItem key={index} message={item.message} time={item.time} />
    ))}
  </>
);

const CBMAlerts = () => (
  <>
    {cbmAlertsData.map((item, index) => (
      <NotificationItem key={index} message={item.message} time={item.time} date={item.date} />
    ))}
  </>
);

const Schedule = () => (
  <>
    {scheduleData.map((item, index) => (
      <NotificationItem key={index} message={item.message} time={item.time} />
    ))}
  </>
);

const NotificationsModal = () => {
  const notificationModalRef = useRef();
  const dispatch = useDispatch();
  const { notificationsModal, showNotificationTabs } = useSelector((state) => state.home);
  const closeModal = () => {
    if (notificationsModal) dispatch(LayoutCreators.toggleHeaderOption('notificationsModal'));
  };
  const [activeTab, setActiveTab] = useState(showNotificationTabs[0]);

  useClickOutside(notificationModalRef, closeModal);
  const handleSettings = () => {
    dispatch(LayoutCreators.toggleHeaderOption('notificationsModal'));
    dispatch(LayoutCreators.settingsActiveMenu('Notification'));
  };
  return (
    <Modal>
      <CancelContainer onClick={closeModal}>
        <DynamicSVGIcon iconUrl={CancelIcon} />
      </CancelContainer>
      <ModalContainer ref={notificationModalRef}>
        <HeaderContainer>
          <Header>Notification</Header>
          <div onClick={handleSettings}>
            <DynamicSVGIcon iconUrl={SettingIcon} width='3rem' />
          </div>
        </HeaderContainer>
        <TabContainer>
          {showNotificationTabs.map((tab, index) => (
            <TabItem key={index} className={activeTab === tab && 'active'} onClick={() => setActiveTab(tab)}>
              <ActiveNotificationCount>14</ActiveNotificationCount>
              {tab}
            </TabItem>
          ))}
        </TabContainer>
        {(() => {
          switch (activeTab) {
            case 'Alarms':
              return <Alarams />;
            case 'Approvals':
              return <Approvals />;
            case 'Schedule':
              return <Schedule />;
            case 'CBM alerts':
              return <CBMAlerts />;
            default:
              return <></>;
          }
        })()}
      </ModalContainer>
    </Modal>
  );
};

export default NotificationsModal;
