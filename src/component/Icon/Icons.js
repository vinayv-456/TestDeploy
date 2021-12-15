/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Vistrian } from '../../assets/icons/login/Vistrian_logomark.svg';
import { ReactComponent as Notification } from '../../assets/icons/layout/Notification.svg';
import { ReactComponent as Settings } from '../../assets/icons/layout/Settings.svg';
import { ReactComponent as Help } from '../../assets/icons/layout/Help.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/layout/hamburger.svg';
import { ReactComponent as HamburgerWhite } from '../../assets/icons/layout/hamburger_white.svg';
import { ReactComponent as SearchW } from '../../assets/icons/layout/Search white.svg';
import { ReactComponent as SettingsBlack } from '../../assets/icons/layout/settings_Black.svg';
import { ReactComponent as CancelWhite } from '../../assets/icons/Filter/cancel white.svg';
import { ReactComponent as SearchB } from '../../assets/icons/Filter/Search Black.svg';
import { Div } from '../../globalStyles';

const Icon = styled(Div)`
  height: ${(props) => props.size || '2'}rem;
  width: ${(props) => props.size || '2'}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => props.cursor || 'default'};
  & > svg {
    height: 100%;
  }
`;

export const icon = {
  help: <Help />,
  notification: <Notification />,
  settings: <Settings />,
  toggle: <Icon />,
  home: <Icon />,
  dasboards: <Icon />,
  analytics: <Icon />,
  dataVerifier: <Icon />,
  review: <Icon />,
  productionInfo: <Icon />,
  myPages: <Icon />,
  vistrian: <Vistrian />,
  menu: <Hamburger />,
  menuWhite: <HamburgerWhite />,
  searchW: <SearchW />,
  settingsBlack: <SettingsBlack />,
  CancelWhite: <CancelWhite />,
  SearchB: <SearchB />
};

const IconComponent = (props) => {
  const { name, onClick } = props;

  return (
    <Icon {...props} onClick={onClick}>
      {icon[name]}
    </Icon>
  );
};

export default IconComponent;
