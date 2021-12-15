/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, device } from '../../../constants';

export const FilterSearch = styled.input`
  width: 56.3rem;
  height: 4.5rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  border: none;
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -5px -5px 2px ${({ theme }) => theme.aux.secondary};
  background-color: ${({ theme }) => theme.core.secondary};
  font-size: 1.6rem;
  position: relative;
  padding: 0px 8rem 0px 1.5rem;
  z-index: 10;
  color: ${({ theme }) => theme.contrast.secondary};
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1.4rem;
    font-family: ${fontFamily.circularMedium};
    /* color: ${({ theme }) => theme.contrast.primary}; */
  }
  position: relative;
  @media ${device.tablet} {
    width: 100%;
    border-radius: 8px;
    height: 35px;
    font-size: 12px;
    padding-right: 50px;

    &::placeholder {
      font-size: 10px;
    }
  }
`;

export const SearchMainContainer = styled.div`
  /* width: 97%; */

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 100;
    box-shadow: 0px 3px 3px #00000029;
  }
`;

export const SearchContainer = styled.div`
  width: 56.3rem;
  position: relative;
  @media ${device.tablet} {
    width: 95%;
    height: 70px;
  }
`;

export const Image = styled.div`
  /* width: ${({ width }) => `${width}rem`};
  height: ${({ width }) => `${width}rem`}; */

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

// export const SearchIconSvg = styled.img`
//   width: 1.4rem;
//   height: 1.4rem;
//   @media ${device.tablet} {
//     width: 1.2rem;
//     height: 1.2rem;
//   }
// `;

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

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    @media ${device.tablet} {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  & * {
    fill: ${({ theme }) => theme.contrast.secondary} !important;
  }
`;

export const FilterButtom = styled.div`
  width: 5rem;
  height: 4.5rem;
  border-radius: 10px;
  margin: 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.aux.secondary};

  box-shadow: 4px 4px 6px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  @media ${device.tablet} {
    display: none;
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const SearchDropDown = styled.div`
  position: absolute;
  width: calc(100% - 4rem);
  background-color: ${({ theme }) => theme.core.secondary};
  box-shadow: 0px 0px 10px #0000004f;
  z-index: 3;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  top: 4rem;
  left: 1px;
  height: 20rem;
  padding-top: 20px;
  animation: animHeight 300ms 1;
  overflow: auto;

  @keyframes animHeight {
    from {
      height: 0;
    }
    to {
      height: 20rem;
    }
  }
  @media ${device.tablet} {
    width: calc(100% - 2px);
    top: 3rem;
    left: 1px;
  }
`;

export const SearchResultText = styled.p`
  font-size: 1.4rem;
  font-family: ${fontFamily.circularBook};
  text-transform: uppercase;
  margin-left: 15px;
  color: ${({ theme }) => theme.contrast.primary};

  @media ${device.tablet} {
    font-size: 12px;
  }
`;

export const SearchTextContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
`;
