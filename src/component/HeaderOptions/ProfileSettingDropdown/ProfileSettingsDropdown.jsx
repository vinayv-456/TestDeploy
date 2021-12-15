/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PointedDropdownModal from '../../Common/DropDownModal/PointedDropdownModal';
import { Creators as LayoutCreators } from '../../../views/Layout/store';
import { Creators as AuthCreators } from '../../../views/auth/store';
import { AvatarIconContainer, UserDetails, UserName } from './ProfileSettingDropdown.style';
import { AvatarComponent } from '../..';
import { AlignedDiv } from '../../Common/CommonStyles';

const ProfileSettingsDropdown = () => {
  const { profileSettingsDropdown } = useSelector((state) => state.home);
  const { userData } = useSelector((state) => state.loginData);

  const ProfileSettingsData = [
    { label: 'Profile settings', value: 'profileSettings' },
    { label: 'Logout', value: 'logout' }
  ];

  const dispatch = useDispatch();

  const closeModal = () => {
    if (profileSettingsDropdown) {
      dispatch(LayoutCreators.toggleHeaderOption('profileSettingsDropdown'));
    }
  };

  const handleClick = (value) => {
    switch (value) {
      case 'logout':
        dispatch(AuthCreators.onLogout());
        dispatch(LayoutCreators.toggleHeaderOption('profileSettingsDropdown'));
        break;
      case 'profileSettings':
        dispatch(LayoutCreators.toggleHeaderOption('profileSettingsDropdown'));
        dispatch(LayoutCreators.settingsActiveMenu('Accounts'));
        break;
      default:
        break;
    }
  };

  return (
    <PointedDropdownModal
      style={{ top: '150%' }}
      data={ProfileSettingsData}
      closeModal={closeModal}
      handleClick={handleClick}
    >
      <AlignedDiv>
        <AvatarIconContainer>
          <AvatarComponent
            userdata={userData}
            circle='circle'
            // ml='1.5rem'
            size='7rem'
            // onClick={(e) => setModalIsVisibal(!modalIsVisibal)}
          />
        </AvatarIconContainer>
        <div>
          <UserName>Mohammad Akhil</UserName>
          <UserDetails>md.akhil@panorbit.in</UserDetails>
          <UserDetails>0788- 357 5472</UserDetails>
        </div>
      </AlignedDiv>
    </PointedDropdownModal>
  );
};

export default ProfileSettingsDropdown;
