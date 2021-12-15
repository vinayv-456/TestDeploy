import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const ChartType = styled.div`
  color: ${({ theme }) => theme.contrast.tertiary};
  font: 1.6rem ${fontFamily.circularMedium};
  padding: 10px;
  border-radius: 10px 0px;
  /* background-color: ${({ theme }) => theme.core.secondary}; */
  background-color: #1d1e21; // need to be this always for any theme
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    margin-right: 5px;
    width: auto;
    height: 1.6rem;
  }
`;

export const MenuDropdown = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.core.secondary};
  box-shadow: 0px 3px 12px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.contrast.lightSecondary};
  border-radius: 10px;
  padding: 10px 0px;
  z-index: 100;
  width: 21rem;
  margin-top: 2px;
  color: ${({ theme }) => theme.contrast.primary};
`;

export const ItemContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-family: ${({ theme }) => theme.core.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme }) => theme.aux.secondary};
  }
  & * {
    font-size: ${fontSize.text};
  }

  /* &.subItem {
    justify-content: flex-start;
  } */
`;

export const ItemSubMenu = styled(MenuDropdown)`
  left: 100%;
  font-size: 1.6rem;
`;

export const SideArrow = styled.div`
  height: 1.2rem;
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const Icon = styled.div`
  width: ${({ width }) => width || 1.5}rem;
  margin-right: 10px;
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
