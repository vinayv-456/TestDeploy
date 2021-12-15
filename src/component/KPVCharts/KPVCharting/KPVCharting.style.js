/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 97%;
  margin: 0px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed ${({ theme }) => theme.contrast.secondary};
  padding: 1rem 0px;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const NavigationDiv = styled.div`
  & > * {
    font-size: ${fontSize.headingText};
    color: ${({ theme }) => theme.contrast.primary};
    font-family: ${fontFamily.circularMedium};
  }
`;
export const OptBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 5px 5px 10px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.contrast.secondary};
  border-radius: 10px;
  padding: 5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.contrast.primary};
  margin-right: 1.7rem;

  &:first-child {
    font-family: ${fontFamily.circularMedium};
    color: ${({ theme }) => theme.contrast.quaternary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.aux.secondary};
    transform: scale(1.1);
  }

  &.disable {
    color: ${({ theme }) => theme.aux.darkSecondary};
    border-color: ${({ theme }) => theme.aux.darkSecondary};
    box-shadow: 0px 0px;
    cursor: default;
    &:hover {
      background-color: transparent;
      transform: none;
    }
  }

  &.active {
    background-color: black;
    color: white;
    & path {
      fill: white !important;
    }
  }
`;

export const DurationContainer = styled.div`
  position: relative;
  /* width: 120px; */
  & > div:first-child > span {
    font-size: 2rem;
    color: ${({ theme }) => theme.lightQuaternary};
  }
`;

export const OptIcon = styled.div`
  width: ${({ width }) => width || 2.5}rem;
  margin: 2px 5px;
  transform: rotate(${({ rotate }) => rotate}deg);

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const ChartOptionsDiv = styled.div`
  display: flex;
  & > * {
    font-size: ${fontSize.titleBig};
  }
`;

export const AddPaneBtn = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.customTheme.primary};
  height: 5.5rem;
  font-size: ${fontSize.titleBig};
  color: ${({ theme }) => theme.contrast.tertiary};
  border: none;
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadowContrast};
  border-radius: 10px;
  font-family: ${fontFamily.circularMedium};
`;

export const UpperLayer = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
`;
