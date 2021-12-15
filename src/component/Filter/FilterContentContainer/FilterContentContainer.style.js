/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const FilterResultContentTextContainer = styled.div`
  min-width: 40rem;
  height: 3.5rem;
  /* background-color: ${({ theme, cummSelect }) => (cummSelect ? theme.filter.prevSelect : theme.aux.darkSecondary)};
  background-color: ${({ theme, active }) => active && theme.customTheme.secondary}; */
  background-color: ${({ theme, cummSelect }) => (cummSelect ? theme.filter.prevSelect : theme.filter.normal)};
  background-color: ${({ theme, active }) => active && theme.filter.activeSelect};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;
  position: relative;
  &.typeDate {
    min-width: 180px;
  }
  :hover {
    background-color: ${({ theme, cummSelect, active }) => !cummSelect && !active && theme.filter.hover};
  }
`;

export const FilterResultContentText = styled.p`
  margin-left: 1.5rem;
  font-size: ${fontSize.rootSize};
  color: ${({ theme, active }) => (active ? theme.contrast.tertiary : theme.contrast.primary)};
  font-family: ${fontFamily.circularMedium};
`;

export const FilterMultiSelectIcon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: ${({ theme }) => `1px solid ${theme.contrast.secondary}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;
