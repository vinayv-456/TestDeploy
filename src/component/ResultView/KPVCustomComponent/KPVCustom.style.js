import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const BreadCrumbText = styled.div`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.contrast.primary};
  font-family: ${fontFamily.circularBold};
`;

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewColoumnsContainer = styled.div`
  padding: 1.5rem;
  text-transform: capitalize;
  position: relative;
`;

export const ColOptions = styled.div`
  position: relative;
  z-index: 30;
  margin-right: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ColDropdownContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 3px 15px ${({ theme }) => theme.shadow};
  border-radius: 6px;
  overflow: hidden;
  z-index: 20;
  /* animation: colDropDownAnim 200ms 1; */
  animation: collapsableAnim 300ms 1;
  @keyframes collapsableAnim {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const ColItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;

export const CheckBoxIcon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme.contrast.secondary}`};
  display: flex;
  background-color: ${({ theme }) => theme.contrast.quaternary};
  justify-content: center;
  align-items: center;

  & svg {
    fill: ${({ theme }) => theme.core.pureSecondary};
  }
`;

export const ColoumnListText = styled.div`
  font-size: 1.6rem;
  padding: 5px 10px;
`;

export const ColumnText = styled.div`
  color: ${({ theme }) => theme.contrast.primary};
  font-size: 1.4rem;
  display: inline;
  margin-right: 5px;
`;

export const PlotContainer = styled.div`
  background-color: ${({ theme }) => theme.customTheme.primary};
  color: ${({ theme }) => theme.contrast.tertiary};
  width: 18rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* justify-content: space-between; */
  border-radius: 1rem;
  position: relative;
  &.content::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    box-shadow: 0px 5px 19px ${({ theme }) => theme.core.secondary};
    z-index: 12;
  }
`;

export const PlotDropDownContainer = styled.div`
  position: absolute;
  /* top: 4.8rem; */
  top: 4rem;
  padding-top: 2.5rem;
  background-color: ${({ theme }) => theme.customTheme.primary};
  z-index: 10;
  width: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const PlotBtn = styled.div`
  font-size: ${fontSize.titleBig};
  font-family: ${fontFamily.circularMedium};
  padding: 10px 0px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  width: 80%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.contrast.tertiary};
  text-align: center;
  background-color: ${({ theme }) => theme.customTheme.primary};
  position: relative;
  z-index: 15;
`;

export const PlotOptionText = styled.div`
  font-size: ${fontSize.titleBig};
  padding-left: 10px;
  padding-bottom: 10px;
  font-family: ${fontFamily.circularMedium};
  text-transform: capitalize;
  color: white;
`;

export const ItemsNo = styled.span`
  background-color: ${({ theme }) => theme.contrast.tertiary};
  border-radius: 8px;
  width: ${fontSize.title};
  color: black;
  font-size: ${fontSize.title};
  position: absolute;
  top: -10px;
  right: 10px;
`;

export const PlotOptions = styled.div`
  padding: 1.8rem;
  z-index: 15;
  background-color: ${({ theme }) => theme.customTheme.primary};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const DropdownIcon = styled.div`
  /* height: 1.2rem; */
  transform: rotate(90deg);
  &.active {
    transform: rotate(270deg);
  }
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const DropdownImage = styled.img`
  height: 1.2rem;
  transform: rotate(90deg);
  &.active {
    transform: rotate(270deg);
  }
`;
