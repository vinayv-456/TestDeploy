/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';
import { Button } from '../../Common/PopUpModal/Modal.style';

export const PaneOptContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.contrast.secondary};
  border-radius: 10px;
  padding: 3px;
  margin-bottom: 2rem;
`;

export const PaneButton = styled(Button)`
  background-color: transparent;
  width: 50%;
  box-shadow: none;

  &.active {
    background-color: ${({ theme }) => theme.contrast.lightSecondary};
  }
`;

export const ChartOptContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 2rem;
`;

export const ChartTypeText = styled.div`
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

export const DropdownImage = styled.div`
  height: 2rem;
  transform: rotate(90deg);
  &.active {
    transform: rotate(270deg);
  }
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
  & .show {
    height: auto;
  }
`;

export const DropDownButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  display: flex;
  align-items: center;
  border-radius: 8px;
  z-index: 3;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 3.5rem;
  padding-top: 1.5rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  width: 100%;
  border-radius: 0.5rem;
`;

export const ItemText = styled.div`
  font-size: ${fontSize.text};
  padding: 9px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.contrast.primary};
  font-family: ${fontFamily.circularBook};
`;
