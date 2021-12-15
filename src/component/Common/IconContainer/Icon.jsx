/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

export const Icon = styled.div`
  padding: 0px 1.5rem;
  cursor: pointer;
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

const IconComp = ({ children, onClick }) => <Icon onClick={onClick}>{children}</Icon>;

export default IconComp;
