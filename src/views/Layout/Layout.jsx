/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as configCreators } from '../../config/action';
import { AvatarComponent, SideNav, IconComponent } from '../../component';
import { Creators as LayoutCreators } from './store';

// import { Icons } from '../../constants/icons';
import Home from '../../routes/HomeRoutes';

import { FlexContainer } from '../../globalStyles';
import { Body, Content, Header, Logo } from './Layout.styles';
import { useWindowSize } from '../../shared/hooks/useWindowResize';
import useClickOutside from '../../shared/hooks/useClickOutside';
import DropDownModal from '../../component/Common/DropDownModal/DropDownModal';
import { profileMenuData } from '../../constants/sampleData';
import GlobalSearchContainer from '../../component/GlobalSearch/GlobalSearchContainer';
import { THEMES } from '../../constants';
import NotificationsModal from '../../component/HeaderOptions/NotificationsModal/NotificationsModal.view';
import SettingsDropdown from '../../component/HeaderOptions/SettingsDropdown/SettingsDropdown.view';
import HelpDropdown from '../../component/HeaderOptions/HelpDropdownModal/HelpDropdownModal';
import ProfileSettingsDropdown from '../../component/HeaderOptions/ProfileSettingDropdown/ProfileSettingsDropdown';
import SettingsModal from '../../component/HeaderOptions/SettingsModal/SettingsModal.view';
import ChangePwdModal from '../../component/HeaderOptions/SettingsModal/Accounts/ChangePwdModal/ChangePwdModal.view';
import DetailedAlaramModal from '../../component/Alarams/DetailedAlaramModal/DetailedAlaramModal.view';
import AlaramsCommentsModal from '../../component/Alarams/AlaramsCommentsModal/AlaramsCommentsModal.view';

const Dashboard = ({ history, match }) => {
  const [width] = useWindowSize();
  const [view, setView] = useState('mobile');
  const [showSearchBarInMobile, setShowSearchBarInMobile] = useState(false);
  const [modalIsVisibal, setModalIsVisibal] = useState(false);
  const dispatch = useDispatch();
  const sideNavRef = useRef();
  const headerRef = useRef();

  const {
    showSideNav,
    notificationsModal,
    helpDropdown,
    settingsDropdown,
    profileSettingsDropdown,
    settingsModalActiveTab,
    changePwd
  } = useSelector((state) => state.home);
  const { id: alaramOfMachineId, showCommentsModal: showAlaramCommentsModal } = useSelector((state) => state.alarams);
  const { userData } = useSelector((state) => state.loginData);
  const { paneFullScreen } = useSelector((state) => state.KPVCharts);
  const { theme } = useSelector((state) => state.configData);
  useEffect(() => {
    dispatch(LayoutCreators.getMenu({ company: 'Panorbit' }));
  }, []);

  useEffect(() => {
    if (width >= 1024) {
      setView('web');
      dispatch(LayoutCreators.setShowSideNav({ showSideNav: true }));
    }

    if (width <= 768) {
      setView('mobile');
      dispatch(LayoutCreators.setShowSideNav({ showSideNav: false }));
    }
  }, [width]);

  const handleToggle = () => {
    dispatch(LayoutCreators.setShowSideNav({ showSideNav: !showSideNav }));
  };

  useClickOutside(
    sideNavRef,
    () => view === 'mobile' && showSideNav && dispatch(LayoutCreators.setShowSideNav({ showSideNav: false })),
    headerRef
  );

  const hanldeModalItemClick = (role) => {
    if (role === 'filter') {
      //
    } else {
      dispatch(AuthCreators.onLogout());
    }
    setModalIsVisibal(false);
  };

  const avatarRef = useRef();

  const handleHeaderOptClick = (option) => {
    dispatch(LayoutCreators.toggleHeaderOption(option));
  };

  return (
    <>
      <Header ref={headerRef}>
        <>{view === 'mobile' && <IconComponent name='menuWhite' onClick={handleToggle} cursor='pointer' />}</>
        {(!showSearchBarInMobile || view === 'web') && <Logo>Western Digital</Logo>}
        <>
          {(view === 'web' || showSearchBarInMobile) && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <GlobalSearchContainer history={history} setShowSearchBarInMobile={setShowSearchBarInMobile} />
              {showSearchBarInMobile && (
                <IconComponent name='CancelWhite' ml={2} size={1.5} onClick={() => setShowSearchBarInMobile(false)} />
              )}
            </div>
          )}
        </>
        <>
          {view === 'web' ? (
            <FlexContainer className='jc_center ai_center web'>
              {settingsModalActiveTab && <SettingsModal />}
              {alaramOfMachineId && (!showAlaramCommentsModal ? <DetailedAlaramModal /> : <AlaramsCommentsModal />)}
              {changePwd && <ChangePwdModal />}
              <IconComponent name='notification' mx={1.5} onClick={() => handleHeaderOptClick('notificationsModal')} />
              {notificationsModal && <NotificationsModal />}
              <div style={{ position: 'relative' }}>
                <IconComponent name='help' mx={1.5} onClick={() => handleHeaderOptClick('helpDropdown')} />
                {helpDropdown && <HelpDropdown />}
              </div>
              <div style={{ position: 'relative' }}>
                <IconComponent name='settings' mx={1.5} onClick={() => handleHeaderOptClick('settingsDropdown')} />
                {settingsDropdown && <SettingsDropdown />}
              </div>
              <div style={{ position: 'relative' }} ref={avatarRef}>
                <AvatarComponent
                  userdata={userData}
                  circle='circle'
                  ml='1.5rem'
                  onClick={() => handleHeaderOptClick('profileSettingsDropdown')}
                  // onClick={(e) => setModalIsVisibal(!modalIsVisibal)}
                />
                {profileSettingsDropdown && <ProfileSettingsDropdown />}
                {/* {modalIsVisibal && (
                  <DropDownModal
                    kababIconRef={avatarRef}
                    setModalIsVisibal={setModalIsVisibal}
                    data={profileMenuData}
                    style={{ top: '100%', right: 0, zIndex: 250 }}
                    handleClick={hanldeModalItemClick}
                  />
                )} */}
              </div>
            </FlexContainer>
          ) : (
            !showSearchBarInMobile && (
              <FlexContainer className='jc_center ai_center mobile'>
                <IconComponent name='searchW' onClick={() => setShowSearchBarInMobile(true)} />
              </FlexContainer>
            )
          )}
        </>
      </Header>
      <Body>
        {!paneFullScreen && <SideNav sideNavRef={sideNavRef} isExact={match.isExact} view={view} />}
        <Content active={showSideNav}>
          <Home path={match.path} />
        </Content>
      </Body>
    </>
  );
};

export default Dashboard;
