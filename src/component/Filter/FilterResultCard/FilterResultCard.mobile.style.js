/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily } from '../../../constants';

export const FilterResultCardMainContainer = styled.div`
  height: 100%;
`;

export const FilterResultCardContainer = styled.div`
  display: flex;
`;

export const FilterResultHeader = styled.div`
  height: 4rem;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  overflow: hidden;
  background-color: ${({ theme, active }) => (active ? theme.aux.secondary : 'transparent')};
`;

export const FilterResultContentContainer = styled.div`
  min-width: 100%;
  margin-top: 5px;
`;

export const FilterResultContent = styled.div`
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
  &.flexing {
    overflow-y: hidden;
    max-height: 30rem;
  }
  animation: mymove 700ms 1;

  @keyframes mymove {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FilterResultHeaderText = styled.p`
  font-size: 11px;
  color: ${({ theme, active }) => (active ? theme.contrast.darkPrimary : theme.contrast.primary)};
  font-family: ${fontFamily.circularMedium};
`;
