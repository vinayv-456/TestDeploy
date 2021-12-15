/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily } from '../../../../constants';

export const FilterResultContentTextContainer = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  /* background-color: ${({ theme, parent }) => (parent ? 'transparent' : theme.aux.darkSecondary)}; */
  background-color: ${({ theme, cummSelect }) => (cummSelect ? theme.filter.prevSelect : theme.filter.normal)};
  background-color: ${({ theme, active }) => active && theme.filter.activeSelect};
  // padding: ${({ parent }) => (parent ? '0 1rem 0 1rem' : '0 1.5rem 0 1.5rem')};
  padding: 0 1rem 0 2rem;
  &.typeDate {
    min-width: 180px;
  }
`;

export const FilterResultContentText = styled.p`
  font-size: 12px;
  font-family: ${({ active }) => (active ? fontFamily.circularMedium : fontFamily.circularBook)};
  margin-left: 5px;
  color: ${({ theme, active }) => (active ? theme.contrast.darkPrimary : theme.contrast.primary)};

  &.content_bold {
    font-family: ${fontFamily.circularBold};
  }
`;

export const FilterMultiSelectIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  border: ${({ theme }) => `1px solid ${theme.contrast.secondary}`};
`;

export const FilterSingleSelectIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.contrast.secondary}`};
`;

export const ActiveSingleSelectIcon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: black;
`;

export const FilterActiveImage = styled.img`
  width: 10px;
  height: 10px;
`;
