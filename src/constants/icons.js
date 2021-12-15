import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Vistrian } from '../assets/icons/login/Vistrian_logomark.svg';
import { ReactComponent as DropArrow } from '../assets/icons/layout/dropdownarrow.svg';
import { ReactComponent as Settings } from '../assets/icons/layout/Settings.svg';

//
const Icon = styled.div`
  height: 20px;
  width: 20px;
  background: green;
  margin: 0 1.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const Icons = {
  question: <Icon />,
  notification: <Icon />,
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
  dropArrow: <DropArrow />
};
