/* eslint-disable max-len */
import styled from 'styled-components';
import { device } from '../../constants';
import { fontSize, fontFamily } from '../../constants/font';
import { Div } from '../../globalStyles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

// export const LeftArrow = styled.img`
//   width: 4.5rem;
//   cursor: pointer;
//   margin-left: -2rem;
// `;

// export const SearchQueryText = styled.span`
//   font-size: ${fontSize.headingText};
//   font-family: ${fontFamily.circularMedium};
//   text-transform: capitalize;
//   @media ${device.tablet} {
//     font-size: 16px;
//   }
// `;

export const ActiveDivider = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.contrast.quaternary};
  height: 0.4rem;
  border-radius: 0.6rem;
  width: 4rem;
  bottom: 0rem;
`;
