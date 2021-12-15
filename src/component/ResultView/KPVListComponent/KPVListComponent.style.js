/* eslint-disable max-len */
import styled from 'styled-components';
import { device, fontFamily, fontSize } from '../../../constants';
import { CellTemplate, RowTemplate, TableContainerTemplate } from '../../Common/Table/Table/Table.style';

export const Container = styled.div`
  width: 97%;
  height: calc(100% - 8rem);
  margin: 0px auto;
  margin-top: 2rem;
  border-radius: 1rem;
  /* display: flex;
  flex-direction: column; */
`;

export const HeaderContainer = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  padding-bottom: 10px;
`;

export const MachineHeaderText = styled.div`
  position: relative;
  flex: 1;
  font-size: ${fontSize.titleBig};
  font-family: ${fontFamily.circularMedium};
  color: ${({ theme }) => theme.contrast.darkSecondary};
  background-color: ${({ theme }) => theme.aux.secondary};
  box-shadow: inset 0px 5px 10px ${({ theme }) => theme.shadow};
  max-width: 45rem;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0rem 1rem;
  cursor: pointer;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }

  &:first-child {
    border-top-left-radius: 1rem;
  }
  &:last-child {
    box-shadow: inset -5px 5px 10px ${({ theme }) => theme.shadow};
    border-top-right-radius: 1rem;
  }
  &.active {
    color: ${({ theme }) => theme.contrast.lightQuaternary};
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    background-color: ${({ theme }) => theme.core.pureSecondary};
    box-shadow: 5px -5px 10px ${({ theme }) => theme.shadow};
    z-index: 1;

    & * {
      fill: ${({ theme }) => theme.contrast.lightQuaternary} !important;
    }
  }
`;

export const SearchIcon = styled.div`
  width: 1.6rem;
  margin-left: 5px;
  align-self: center;
  cursor: pointer;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const SearchInput = styled.input`
  height: 20px;
  width: 120px;
  border: 0px;
  font-size: ${fontSize.title};
  background-color: transparent;
  ::placeholder {
    font-size: ${fontSize.title};
  }
  :focus {
    outline: none;
  }
  @media ${device.tablet} {
    font-size: 14px;
    ::placeholder {
      font-size: 14px;
    }
  }

  &.show {
    animation: leftAnimate ease-in 300ms;
    @keyframes leftAnimate {
      0% {
        width: 20px;
      }
      100% {
        width: 120px;
        /* transform: scaleX(1); */
      }
    }
  }
`;

export const CancelIcon = styled.div`
  position: absolute;
  width: 1.5rem;
  right: 10px;

  /* & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  } */
`;

export const ContentContainer = styled.div`
  height: calc(100% - 5rem);
  width: 100%;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  overflow-y: auto;
  box-sizing: border-box;
  margin-top: -10px;
`;

export const TableContainer = styled(TableContainerTemplate)`
  width: 98%;
  height: calc(100% - 1rem);
  margin: 1rem auto 0px;
  background-color: ${({ theme }) => theme.core.secondary};
  border-radius: 1.2rem;
  overflow: auto;
`;
export const Row = styled(RowTemplate)`
  position: relative;
  z-index: 2;
`;

export const Cell = styled(CellTemplate)`
  cursor: ${({ pointer }) => pointer && 'pointer'};
  &:first-child {
    padding-left: 7rem;
  }

  &.groupHeading {
    font-family: ${fontFamily.circularBold};
  }

  &.active {
    background-color: ${({ theme }) => theme.table.hightlight};
    & > .active {
      color: red;
      border: 1px solid red;
    }
  }
`;

export const ToogleGroupICon = styled.span`
  position: absolute;
  left: 2.5rem;
  padding: 3px 5px;
  font-size: 2rem;
  cursor: pointer;

  & path:last-child {
    fill: ${({ theme }) => theme.contrast.quaternary} !important;
  }

  & path:first-child {
    fill: ${({ theme }) => theme.core.pureSecondary} !important;
  }
`;

export const CollapsableContainer = styled.div`
  position: relative;
  z-index: 1;
  animation: collapsableAnim 300ms 1;
  @keyframes collapsableAnim {
    0% {
      opacity: 0;
      /* transform: translateY(-30px); */
    }
    100% {
      opacity: 1;
      /* transform: translateY(0px); */
    }
  }
`;
