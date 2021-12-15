/* eslint-disable max-len */
import styled from 'styled-components';
import { fontSize, device, fontFamily } from '../../../constants';

export const FilterViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-width: 100%; */
  height: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.core.secondary};
  background-color: 'red';
  @media ${device.tablet} {
    width: 100%;
    height: ${({ minusHeight }) => `calc(100% - ${minusHeight}px)`};
    min-height: ${({ minusHeight }) => `calc(100% - ${minusHeight}px)`};
    overflow-x: hidden;
  }
`;

export const FilterTabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  position: relative;
  height: 7rem;
  @media ${device.tablet} {
    height: 45px;
    justify-content: center;
    width: 95%;
    display: ${({ showFilter }) => (showFilter ? 'none' : 'flex')};
  }
`;

export const KababIconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.aux.darkSecondary};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const KababIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const FilterSelectImage = styled.img`
  width: 34rem;
  height: 35rem;
  @media ${device.tablet} {
    width: 170px;
    height: 160px;
  }
`;

export const FilterSelectText = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.contrast.primary};
  font-family: 'Circular Std Bold';
  margin-top: 15px;
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

export const HeaderText = styled(FilterSelectText)`
  margin-top: 0px;
  padding: 0px 10px;
`;

export const Divider = styled.div`
  position: absolute;
  border-top: 1px solid ${({ theme }) => theme.aux.darkSecondary};
  width: 100%;
  bottom: 0;
`;

export const ActiveDivider = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.customTheme.primary};
  height: 0.4rem;
  border-radius: 0.6rem;
  width: 4rem;
  bottom: 0.1rem;
  @media ${device.tablet} {
    height: 2px;
    bottom: 11px;
  }
`;

export const FilterHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterHeadingBox = styled.div`
  margin: 0px 1.5rem 0px 1.5rem;
  position: relative;
  display: flex;
  height: 7rem;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    margin: 0 10px 0 10px;
  }
`;

export const FilterHeadingText = styled.p`
  font-size: ${fontSize.headingText};
  color: ${({ theme, active }) => (active ? theme.contrast.primary : theme.contrast.secondary)};
  font-family: ${({ active }) => (active ? fontFamily.circularBold : fontFamily.circularBook)};
  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export const MobileFilterButton = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 2.2rem;
  background-color: black;
  color: white;
  box-shadow: 4px 4px 6px #00000029;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const FilterNoDataContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilterDataContainer = styled.div`
  width: 97%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.aux.secondary};

  margin-top: 20px;
  padding: 10px;
  @media ${device.tablet} {
    padding: 0;
    margin-top: 0;
    width: 100%;
  }
`;
