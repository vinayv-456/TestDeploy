/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, device, THEMES } from '../../../constants';

export const FilterTagAreaContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 7rem;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  @media ${device.tablet} {
    position: absolute;
    bottom: 0;
    height: ${({ height }) => `${height}px`};
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
  }
`;

export const FilterTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 85%;
  height: 100%;
  align-items: center;
  /* overflow: inherit; */
  @media ${device.tablet} {
    width: 90%;
    height: 50%;
    flex-wrap: nowrap;
    overflow-y: hidden;
    margin-bottom: 5px;
  }
`;

export const FilterTagButtonText = styled.p`
  font-size: 12px;
  color: ${({ theme, themeMode }) =>
    themeMode === THEMES.LIGHT ? theme.contrast.quaternary : theme.contrast.secondary};
  /* ${({ theme }) => theme.filter.tagText}; */

  margin-right: 10px;
  text-transform: capitalize;
  @media ${device.tablet} {
    font-size: 9px;
  }
  & ~ svg {
    width: 9px;
    height: 9px;
  }
`;

export const ApplyButtonToolTip = styled.div`
  position: absolute;
  background-color: black;
  width: max-content;
  height: 20px;
  /* display: flex; */
  display: none;
  justify-content: center;
  align-items: center;
  bottom: -15px;
  border-radius: 4px;
  z-index: 1;
  padding: 8px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    width: 0;
    height: 0;
    border-bottom: 5px solid black;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  &.top {
    top: -3.2rem;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      width: 0;
      height: 0;
      border-top: 5px solid black;
      border-bottom: 5px solid transparent;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }
`;

export const FilterTagButton = styled.div`
  position: relative;
  border: 1px solid
    ${({ theme, themeMode }) => (themeMode === THEMES.LIGHT ? theme.contrast.quaternary : theme.contrast.secondary)};
  height: 3.2rem;
  min-width: 6.5rem;
  border-radius: 17px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${ApplyButtonToolTip} {
    display: flex;
  }
  & * {
    fill: ${({ theme, themeMode }) =>
      themeMode === THEMES.LIGHT ? theme.contrast.quaternary : theme.contrast.secondary} !important;
  }

  @media ${device.tablet} {
    height: 25px;
    min-width: max-content;
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: center;
  }
`;

export const FilterApplyButton = styled.button`
  display: flex;
  width: 14rem;
  height: 4rem;
  border-radius: 1rem;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 15px;
  background-color: ${({ disabled, theme }) => (disabled ? theme.core.secondary : theme.customTheme.primary)};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  &:hover ${ApplyButtonToolTip} {
    display: flex;
  }
  @media ${device.tablet} {
    height: 35px;
    width: 120px;
    margin-bottom: 5px;
    border-radius: 6px;
    -webkit-box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const FilterCreateButton = styled.button`
  display: flex;
  width: 12rem;
  height: 4rem;
  border-radius: 10px;
  align-items: center;
  display: none;
  justify-content: center;
  margin-right: 15px;
  border: none;
  background-color: ${({ disabled, theme }) => (disabled ? theme.aux.secondary : theme.aux.secondary)};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  &:hover ${ApplyButtonToolTip} {
    display: flex;
  }
  @media ${device.tablet} {
    display: flex;
    height: 35px;
    width: 120px;
    margin-bottom: 5px;
    border-radius: 6px;
    -webkit-box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 7px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const FilterApplyText = styled.p`
  font-size: 1.6rem;
  color: ${({ disabled, theme }) => (disabled ? theme.contrast.secondary : theme.contrast.tertiary)};
  font-family: ${fontFamily.circularMedium};
  @media ${device.tablet} {
    font-size: 12px;
  }
  &.normal {
    color: ${({ disabled, theme }) => (disabled ? theme.contrast.secondary : theme.contrast.primary)};
  }
`;

export const TagAreaBtmBorder = styled.div`
  position: absolute;
  width: 100%;
  border-top: 0.5px dashed ${({ theme }) => theme.contrast.secondary};
  bottom: 0;
`;
