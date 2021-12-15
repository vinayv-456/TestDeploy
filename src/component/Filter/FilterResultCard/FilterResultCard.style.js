/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const FilterResultCardMainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 1rem;
`;

export const FilterResultCardContainer = styled.div`
  box-shadow: 7px 5px 6px #00000029;
  border-radius: 10px;
  margin-top: 1rem;
  /* background-color: #31343d; */
  /* background-color: ${({ theme }) => theme.aux.secondary}; */
  background-color: ${({ theme }) => theme.filter.group};
`;

export const FilterResultHeader = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
`;

export const FilterResultContentContainer = styled.div`
  display: flex;
  min-width: 32rem;
  padding-bottom: 10px;
`;

export const FilterResultContent = styled.div`
  // width: 100%;
  max-height: 20rem;
  margin: ${({ left }) => (left ? '0 0 0 1rem' : '0 0 0 0')};
  overflow-y: auto;
  overflow-x: hidden;
  &.flexing {
    display: flex;
    min-width: 55rem;
    min-height: 25rem;
    overflow-y: hidden;
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
  font-size: ${fontSize.loginInputSize};
  color: ${({ theme }) => theme.contrast.primary};
  font-family: ${fontFamily.circularBold};
  margin-left: 1.5rem;
  width: 300px;
`;

export const FilterCardBottomSpace = styled.div`
  width: 100%;
  height: 2rem;
  /* background-color: ${({ theme }) => theme.aux.secondary}; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
