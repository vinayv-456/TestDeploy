import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, fontFamily, fontSize } from '../../constants';
import { Div } from '../../globalStyles';

export const Container = styled.div`
  width: ${(props) => (!props.active ? '75px' : '300px')}; // changed
  height: 100%;
  background: ${({ theme }) => theme.aux.secondary};
  transition: width ease 300ms;

  @media ${device.tablet} {
    height: calc(100% - 48px);
    width: 250px;
    transition: transform ease 300ms;
    transform: translateX(${(props) => (props.active ? '0' : '-300px')});
    position: absolute;
    left: 0;
    overflow: hidden;
    z-index: 9999999999999;
  }
`;

export const Toggle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  margin-left: 2rem;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const Scroll = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  overflow-y: auto;
  overflow-x: hidden;

  &.hidden > a {
    justify-content: center;
  }

  @media ${device.tablet} {
    height: calc(100% - 48px);
  }
`;

export const NavItem = styled(NavLink)`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  font-size: ${fontSize.title};
  color: ${({ theme }) => theme.contrast.primary};
  position: relative;
  text-transform: capitalize;
  font-family: ${fontFamily.circularMedium};

  &:hover {
    background: ${({ theme }) => theme.core.secondary};
  }

  @media ${device.tablet} {
    font-size: ${fontSize.medium};
  }

  &.active > .icon {
    background: ${(props) => `url(${props.activeicon})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &.active {
    background: ${({ theme }) => theme.core.secondary};
    &::after {
      content: '';

      height: 2.8rem;
      width: 5px;
      border-radius: 3px;

      position: absolute;
      left: 3px;

      display: flex;
      align-content: center;
      background: ${({ theme }) => theme.customTheme.primary};
    }
  }
`;

export const Title = styled.p`
  font-size: ${fontSize.title};
  color: ${({ theme }) => theme.contrast.primary};
  font-family: ${fontFamily.circularMedium};

  @media ${device.tablet} {
    font-size: ${fontSize.medium};
    text-transform: capitalize;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  cursor: pointer;
  position: relative;

  & > .arrow {
    height: 10px;
    width: 10px;
    position: absolute;
    left: 5px;
  }

  &.active > .arrow {
    transform: rotate(90deg);
  }

  & > .arrow > svg {
    height: 100%;
    width: 100%;
  }

  & > .icon {
    margin-left: 1.5rem;
  }

  &:hover {
    background: ${({ theme }) => theme.core.secondary};
  }

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const MainMultiHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & div {
    color: ${({ theme }) => theme.contrast.primary};
  }
  &:hover {
    background: ${({ theme }) => theme.core.secondary};
  }
`;

export const Footer = styled.div`
  height: 50px;
  font-size: ${fontSize.title};
  color: ${({ theme }) => theme.contrast.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    font-size: ${fontSize.medium};
    text-transform: capitalize;
    justify-content: start;
  }
`;

export const MultiLevelNavHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.core.secondary};
  }

  @media ${device.tablet} {
    margin-top: 15px;
  }
`;

export const MultiLevelNavHeader = styled.p`
  font-size: ${fontSize.title};
  color: ${({ theme }) => theme.contrast.primary};
  font-family: ${fontFamily.circularBold};
`;

export const Image = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 10px;
  transform: rotate(180deg);
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const Icon = styled(Div)`
  height: 20px;
  width: 20px;
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }

  &.hidden {
    margin-left: 1.5rem;
  }
`;

export const BreadCrumb = styled.p`
  font-size: 1.2rem;
  font-family: 'Circular Std Book';
  margin-top: 5px;
  text-transform: capitalize;
`;
