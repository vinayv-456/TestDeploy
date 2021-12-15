/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';
import PopUpModal from '../../Common/PopUpModal/Modal.view';
import {
  Container,
  Icon,
  ItemContainer,
  ItemsContainer,
  SidePanel,
  ItemText,
  ContentContainer
} from './SettingsModal.style';
import SettingsIcon from '../../../assets/icons/KPV/Chart menu_customize.svg';
import { Creators as LayoutCreators } from '../../../views/Layout/store';
import cancelIcon from '../../../assets/icons/Filter/cancel black.svg';
import General from './General/General.view';
import Accounts from './Accounts/Account.view';
import Notifications from './Notifications/Notifications.view';
import ItemComponent from '../../Common/MenuItem/Item.view';

const Item = ({ name, icon }) => {
  const { settingsModalActiveTab } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(LayoutCreators.settingsActiveMenu(name));
  };

  return <ItemComponent name={name} icon={icon} handleClick={handleClick} activeMenu={settingsModalActiveTab} />;
};

const SettingsModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(LayoutCreators.settingsActiveMenu(''));
  };
  const { settingsModalActiveTab } = useSelector((state) => state.home);

  return (
    <PopUpModal width='90rem' style={{ padding: '0rem' }} closeModalHandler={closeModal}>
      <Container>
        <SidePanel>
          <div className='header'>Settings</div>
          <ItemsContainer>
            <Item name='General' icon={SettingsIcon} />
            <Item name='Accounts' />
            <Item name='Notification' />
            <Item name='Assigned Group /Equipments' />
          </ItemsContainer>
          <div className='footer'>Akhil</div>
        </SidePanel>
        <ContentContainer>
          <div onClick={closeModal}>
            <DynamicSVGIcon iconUrl={cancelIcon} />
          </div>
          {(() => {
            switch (settingsModalActiveTab) {
              case 'General':
                return <General />;
              case 'Accounts':
                return <Accounts />;
              case 'Notification':
                return <Notifications />;
              default:
                return <></>;
            }
          })()}
        </ContentContainer>
      </Container>
    </PopUpModal>
  );
};

export default SettingsModal;
