import styled from 'styled-components';
import { device, fontFamily } from '../../constants';

export const SearchContainer = styled.div`
  position: ${({ position }) => position || 'static'};
  height: 50px;
  flex-direction: column;
  z-index: 15;
  width: 54.5rem;
  @media ${device.tablet} {
    width: 220px;
    z-index: 200;
  }
  &.showAnim {
    animation: widthAnim 300ms 1;
    @keyframes widthAnim {
      0% {
        width: 150px;
      }
      100% {
        width: 220px;
      }
    }
  }
`;

export const SearchDropDown = styled.div`
  top: calc(45px - 1rem);
  padding-top: 20px;
  position: absolute;
  width: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  box-shadow: 0px 0px 10px #0000004f;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 30vh;
  overflow: auto;
  animation: heightAnimate 300ms 1;
  @keyframes heightAnimate {
    0% {
      height: 0vh;
    }
    100% {
      height: 30vh;
    }
  }
  @media ${device.tablet} {
    width: calc(100vw - 3rem);
    z-index: 100;
    top: 48px;
    background-color: black;
    padding-top: 0px;
    left: 1.5rem;
  }
`;

export const SearchTextContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchResultText = styled.div`
  /* font-size: 1.4rem;
  font-family: ${fontFamily.circularBook}; */
  text-transform: uppercase;
  margin-left: 15px;
  color: ${({ theme }) => theme.contrast.primary};
  height: 100%;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const ItemText = styled.div`
  font-size: 1.4rem;
  height: 100%;
  font-family: ${fontFamily.circularBook};
  margin-right: 3px;
  display: flex;
  align-items: center;
  /* color: ${({ theme }) => theme.core.pureSecondary}; */
  &:not(:last-child):after {
    padding-bottom: 2px;
    margin-left: 3px;
    content: '>';
    color: #969696;
  }
`;

export const NoResultText = styled.p`
  font-size: 3rem;
  margin-left: 10px;
  color: ${({ theme }) => theme.contrast.primary};
`;

export const Image = styled.div`
  /* width: ${({ width }) => `${width}rem`};
  height: ${({ width }) => `${width}rem`}; */

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;
