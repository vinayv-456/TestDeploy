/* eslint-disable max-len */
import styled from 'styled-components';
import { device } from '../../constants';
import { fontSize, fontFamily } from '../../constants/font';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  display: flex;
  overflow-y: scroll;
`;

export const LinkContainer = styled.div`
  cursor: pointer;
`;

export const HeadingContainer = styled.div`
  height: 7rem;
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.aux.darkSecondary};
  margin-bottom: 1.5rem;
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
  color: ${({ theme, active }) => (active ? theme.contrast.primary : theme.contrast.primary)};
  font-family: ${fontFamily.circularMedium};
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
export const SearchQueryText = styled.span`
  font-size: ${fontSize.headingText};
  font-family: ${fontFamily.circularMedium};
  text-transform: capitalize;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
export const LeftArrow = styled.div`
  width: 4.5rem;
  cursor: pointer;
  margin-left: -2rem;
  transform: rotate(180deg);
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const ActiveDivider = styled.div`
  position: absolute;
  background-color: black;
  height: 0.4rem;
  border-radius: 0.6rem;
  width: 4rem;
  bottom: 0.1rem;
`;

export const Row = styled.div`
  max-height: 12rem;
  align-items: center;
  width: ${({ width }) => width || '97%'};
  display: flex;
  border-bottom: 3px solid white;
  background-color: ${({ theme }) => theme.aux.darkSecondary};
`;
export const HeaderRow = styled(Row)`
  height: 6rem;
  background-color: white;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 2px dotted ${({ theme }) => theme.aux.darkSecondary};
`;

export const Cell = styled.div`
  flex: 1;
  font-size: 1.6rem;
  font-family: ${fontFamily.circularBook};
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  max-height: 11rem;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  color: ${({ theme }) => theme.contrast.primary};
  padding-left: 4.5rem;
  padding: 2.3rem;
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  &.border-right {
    border-right: dotted 2px ${({ theme }) => theme.aux.darkSecondary};
  }
  &.jc-center {
    justify-content: center;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const NavItemText = styled.div`
  font-size: 1.8rem;
  font-family: ${fontFamily.circularBold};
  text-transform: capitalize;
  margin-bottom: 1.3rem;
  @media ${device.tablet} {
    font-size: 15px;
  }
`;

export const Cell23 = styled(Cell)`
  flex: 2;
  display: block;
`;

export const HeadingText = styled(Cell)`
  color: ${({ theme }) => theme.contrast.darkSecondary};
  font-size: ${fontSize.title};
  justify-content: center;
  flex: ${({ flex }) => flex || 1};
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const HeadingTextWithSearch = styled.div`
  font-size: ${fontSize.title};
  &.show {
    animation: leftAnimate ease-in 300ms;
    @keyframes leftAnimate {
      0% {
        transform: scaleX(0.3);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const SearchIcon = styled.img`
  width: 1.6rem;
  margin-left: 5px;
  align-self: center;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  height: 20px;
  width: 120px;
  border: 0px;
  font-size: ${fontSize.title};
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
`;

export const DescText = styled.div`
  font-size: 1.6rem;
  font-family: ${fontFamily.circularBook};
  @media ${device.table} {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  width: ${({ width }) => `${width}rem`};
  height: ${({ width }) => `${width}rem`};
  @media ${device.tablet} {
    width: 3rem;
  }
`;

export const NoResultText = styled.p`
  font-size: 5rem;
  margin-left: 10px;
  color: ${({ theme }) => theme.contrast.primary};
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;
