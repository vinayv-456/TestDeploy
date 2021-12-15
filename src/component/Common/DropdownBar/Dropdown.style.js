import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const DropdownBar = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  font-size: ${fontSize.text};
  border: 1px solid;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  color: ${({ theme }) => theme.contrast.darkSecondary};
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.core.secondary};
  z-index: 2;
  box-shadow: inset -3px -3px 5px ${({ theme }) => theme.shadowContrast},
    inset 3px 3px 10px ${({ theme }) => theme.shadow};

  &.active {
    /* box-shadow: none; */
    box-shadow: inset 3px 3px 10px ${({ theme }) => theme.shadow};
  }
`;

export const DpButton = styled.div`
  position: absolute;
  right: 0px;
  height: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  display: flex;
  align-items: center;
  border-radius: 8px;
  z-index: 3;

  transform: rotate(90deg);
  &.active {
    transform: rotate(270deg);
  }
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;
