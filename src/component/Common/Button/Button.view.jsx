/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

const Button = styled.button`
  display: inline;
  width: 16rem;
  height: 4rem;
  font-size: ${fontSize.titleBig};
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadowContrast}, 3px 3px 10px ${({ theme }) => theme.shadow};
  border-radius: 5px;
  border: 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.aux.secondary};
  color: ${({ theme }) => theme.contrast.primary};
  cursor: pointer;
  &.dark {
    background-color: ${({ theme }) => theme.customTheme.primary};
    color: ${({ theme }) => theme.contrast.tertiary};
  }
`;

const ButtonComp = ({ children, onClick, dark, style }) => (
  <Button style={{ ...style }} className={dark && 'dark'} onClick={onClick}>
    {children}
  </Button>
);

export default ButtonComp;
