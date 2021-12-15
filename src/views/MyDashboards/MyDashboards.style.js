/* eslint-disable max-len */
import styled from 'styled-components';
import { device } from '../../constants';
import { fontSize, fontFamily } from '../../constants/font';
import { Div } from '../../globalStyles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  display: flex;
  overflow-y: scroll;
`;

export const HeadingContainer = styled.div`
  height: 7rem;
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.aux.darkSecondary};
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  @media ${device.tablet} {
    height: 50px;
  }
`;

export const HeadingBox = styled.div`
  margin: 0px 1.5rem;
  position: relative;
  display: flex;
  height: 7rem;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 50px;
  }
`;

export const HeaderText = styled.p`
  font-size: ${fontSize.headingText};
  color: ${({ theme, active }) => (active ? theme.headingText : theme.lightBlack)};
  font-family: ${fontFamily.circularMedium};
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const LeftArrow = styled.img`
  width: 4.5rem;
  cursor: pointer;
  margin-left: -2rem;
`;

export const SearchQueryText = styled.span`
  font-size: ${fontSize.headingText};
  font-family: ${fontFamily.circularMedium};
  text-transform: capitalize;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const ActiveDivider = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.contrast.quaternary};
  height: 0.4rem;
  border-radius: 0.6rem;
  width: 4rem;
  bottom: 0rem;
`;

export const SearchContainer = styled.div`
  width: 36rem;
  position: relative;
  overflow: hidden;
  @media ${device.tablet} {
    width: 95%;
    height: 70px;
  }
`;

export const CommonButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 1.5rem;
  display: flex;
`;

export const SearchButton = styled.div`
  width: 4rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  @media ${device.tablet} {
    border-radius: 10px;
    height: 35px;
    width: 35px;
    margin: 0px 0px 0px 1px;
    background-color: white;
    box-shadow: 4px 4px 6px #00000029;
  }
`;

export const FilterSearchIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  @media ${device.tablet} {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 2rem;

  & > td,
  th {
    /* white-space: nowrap; */
    vertical-align: middle;
  }
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

export const Th = styled.th`
  font-size: ${fontSize.text};
  font-family: ${fontFamily.circularBook};
  color: ${({ theme }) => theme.text.gray};
  padding-bottom: 1rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.aux.darkSecondary};
  border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
`;

export const Tr = styled.tr`
  box-shadow: ${({ theme }) => theme.shadowout};
  border-radius: 1rem;

  & > td:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  & > td:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const Td = styled.td`
  background-color: ${({ theme }) => theme.cardBg};
  font-size: ${fontSize.text};
  color: ${({ theme }) => theme.text.primary};
  padding: 3rem 2rem;
  border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
  position: relative;
  text-align: center;

  &::before {
    content: '';
    height: 2rem;
    width: 1px;
    border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
    position: absolute;
    right: -1px;
    top: -14px;
  }

  &::after {
    content: '';
    height: 2rem;
    width: 1px;
    border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
    position: absolute;
    right: -1px;
    bottom: -14px;
  }

  &.title {
    text-align: left;
    width: 40%;
  }

  &.tags {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
`;

export const TagsContainer = styled.div``;

export const Tag = styled(Div)`
  padding: 0.8rem 1.6rem;
  margin: 0.5rem;
  border: 1px solid #757575;
  border-radius: 17px;
  background: ${({ theme }) => theme.tagBg};
  font-size: ${fontSize.text};
  color: ${({ theme }) => theme.text.gray}; ;
`;
