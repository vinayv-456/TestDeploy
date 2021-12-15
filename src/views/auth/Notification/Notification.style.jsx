import styled from 'styled-components';
import { fontFamily, device } from '../../../constants';

export const NotificationContainer = styled.div`
  display: ${(props) => (props.notify === true ? 'flex' : 'none')};
  /* background-color: ${({ theme }) => theme.contrast.quaternary}; */
  background-color: black;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  @media ${device.tablet} {
    position: relative;
    width: 80%;
    flex-direction: column;
    border-radius: 21px;
    padding: 27px;
  }
`;

export const NotifyMsg = styled.div`
  @media (min-width: 768.1px) {
    max-height: 3rem;
    width: 90vw;
    overflow-x: hidden;
  }
  color: ${({ theme }) => theme.contrast.secondary};
  font-family: ${fontFamily.circularBook};
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const CancelIconMob = styled.div`
  position: relative;
  align-self: flex-end;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: ${(props) => props.width || '25px'};
`;

export const CancelIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-self: flex-end;
`;

export const NotificationBox = styled.div`
  display: ${(props) => (props.notify === true ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const WarningContainer = styled.span`
  @media (min-width: 768.1px) {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  @media (min-width: 425px) {
    width: 22px;
    margin-right: 18px;
  }
`;

export const MarqueeContent = styled.ul`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: unset;
  /* list-style: none; */
  list-style-type: none;
  margin: 0;
  padding: 0;

  &.scroll {
    animation: scrolling 10s linear infinite;
    animation-duration: calc(${({ scrollWidth }) => scrollWidth}s / 40);
    & li {
      margin-left: 50px;
    }
    &:hover {
      animation-play-state: paused;
    }
  }
  @keyframes scrolling {
    0% {
      transform: translateX(80vw);
    }
    100% {
      transform: translateX(-${({ scrollWidth }) => scrollWidth}px);
    }
  }

  & li {
    min-width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 100%;
    white-space: nowrap;
  }
`;

export const NormalText = styled.span`
  margin: 0px;
  padding: 0px;
  font-size: 2.2rem;
  @media ${device.tablet} {
    font-size: 17px;
  }
`;
export const BolderText = styled(NormalText)`
  font-family: 'Circular Std Bold';
  color: #f8f8f8;
  margin-left: 5px;
  margin-right: 5px;
`;
