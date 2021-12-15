import styled from 'styled-components';
import { device, fontFamily, fontSize } from '../../constants';

export const Header = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.customTheme.primary};
  color: ${({ theme }) => theme.contrast.tertiary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  position: relative;
  & > .web {
    display: flex;
  }

  & > .mobile {
    display: none;
  }
  @media ${device.tablet} {
    height: 48px;
    padding: 0 1.5rem;

    & > .web {
      display: none;
    }

    & > .mobile {
      display: block;
    }
  }
`;
export const Logo = styled.div`
  font-size: ${fontSize.headingText};
  font-weight: bold;
  color: ${({ theme }) => theme.contrast.tertiary};
  @media ${device.tablet} {
    font-size: ${fontSize.title};
  }
`;

export const Body = styled.div`
  min-height: calc(100% - 70px);
  height: calc(100% - 70px);
  width: 100%;
  background-color: ${({ theme }) => theme.aux.secondary};
  display: flex;

  @media ${device.tablet} {
    height: calc(100% - 48px);
  }
`;

export const Content = styled.div`
  /* width: ${(props) => (!props.active ? 'calc(100% - 75px)' : 'calc(100% - 30rem)')}; // changed */
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  /* overflow: inherit; */
  background-color: ${({ theme }) => theme.core.secondary};
`;

export const SearchContainer = styled.div`
  position: ${({ position }) => position || 'static'};
  height: 50px;
  flex-direction: column;
  z-index: 15;
  width: 54.5rem;
  @media ${device.tablet} {
    width: 220px;
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

// export const SearchDropDown = styled.div`
//   top: calc(45px - 1rem);
//   padding-top: 20px;
//   position: absolute;
//   width: 100%;
//   overflow-y: auto;
//   background-color: ${({ theme }) => 'red'};
//   box-shadow: 0px 0px 10px #0000004f;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
//   height: 30vh;
//   overflow: auto;
//   animation: heightAnim 300ms 1;
//   @keyframes heightAnim {
//     0% {
//       height: 0vh;
//     }
//     100% {
//       height: 30vh;
//     }
//   }
//   @media ${device.tablet} {
//     width: calc(100vw - 3rem);
//     z-index: 100;
//     top: 48px;
//     background-color: black;
//     padding-top: 0px;
//     left: 1.5rem;
//   }
// `;

export const SearchTextContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchResultText = styled.p`
  font-size: 1.4rem;
  font-family: ${fontFamily.circularBook};
  text-transform: uppercase;
  margin-left: 15px;
  color: ${({ theme }) => theme.core.pureSecondary};

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const NoResultText = styled.p`
  font-size: 3rem;
  margin-left: 10px;
  color: ${({ theme }) => theme.core.pureSecondary};
`;

export const Image = styled.div`
  margin-right: 15px;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;
