/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../constants';
import { PaneOptContainer, PaneButton } from '../ResultView/PlotOptionsModal/PlotOptionsModal.style';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 97%;
  margin: 0px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed ${({ theme }) => theme.contrast.secondary};
  padding: 1rem 0px;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const NavigationDiv = styled.div`
  & > * {
    font-size: ${fontSize.headingText};
    color: ${({ theme }) => theme.contrast.primary};
    font-family: ${fontFamily.circularMedium};
  }
`;

export const OptIcon = styled.div`
  width: ${({ width }) => width || 2.5}rem;
  margin: 2px 5px;
  transform: rotate(${({ rotate }) => rotate}deg);

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const Button = styled.button`
  display: inline;
  width: 16rem;
  height: 4rem;
  font-size: ${fontSize.titleBig};
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadowContrast}, 3px 3px 10px ${({ theme }) => theme.shadow};
  border-radius: 5px;
  border: 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.aux.secondary};
  color: ${({ theme }) => theme.contrast.primary};
  &.dark {
    background-color: ${({ theme }) => theme.customTheme.primary};
    color: ${({ theme }) => theme.contrast.tertiary};
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ChartContainer = styled.div`
  width: 80%;
  min-width: 80%;
  /* margin: 0px auto; */
  background-color: ${({ theme }) => theme.aux.secondary};
  box-shadow: 0px 7px 10px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 50rem;
`;

export const Graph = styled.div`
  height: calc(80% / ${({ length }) => length});
  min-height: 20rem;
  width: 100%;
  margin-bottom: 1rem;

  /* min-height: 50rem; */
`;

export const ContentContainer = styled.div`
  display: flex;
  /* height: calc(100% - 7.5rem); */
`;

export const SidePanelContainer = styled.div`
  width: calc(20%);
  margin-left: 1.5rem;
  min-width: 20.5%;
  margin-top: 1.5rem;
  max-height: calc(100vh - 7.5rem - 70px);
  overflow-y: scroll;
  background: ${({ theme }) => theme.aux.secondary};
  box-shadow: 0px 7px 10px ${({ theme }) => theme.shadow};
  border-radius: 10px 0px 0px 0px;
  padding: 2rem;

  & > * {
    font-size: 1.6rem;
    font-family: ${fontFamily.circularMedium};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  box-shadow: inset -3px -3px 5px ${({ theme }) => theme.shadowContrast},
    inset 3px 3px 10px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.aux.secondary};
  font-size: ${fontSize.medium};
  margin-left: 5px;
  padding-left: 10px;
  font-family: ${fontFamily.circularMedium};
  color: ${({ theme }) => theme.contrast.primary};
  ::placeholder {
    color: ${({ theme }) => theme.contrast.primary};
  }
`;

export const Radio = styled(FlexCenter)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.contrast.secondary}`};
  background-color: ${({ theme }) => theme.core.pureSecondary};
  justify-content: center;
  margin-right: 1.6rem;
`;

export const RadioIcon = styled.div`
  min-width: 60%;
  height: 60%;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.contrast.quaternary};
`;

export const CheckBox = styled(FlexCenter)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  border: ${({ theme }) => `1px solid ${theme.contrast.secondary}`};
  justify-content: center;
  margin-right: 1.6rem;
  &.active {
    background-color: ${({ theme }) => 'black'};
    & > svg {
      fill: ${({ theme }) => 'white'};
    }
  }

  & > svg {
    width: 1.5rem;
    fill: ${({ theme }) => theme.aux.darkSecondary};
  }
`;

export const ItemContainer = styled.div`
  //icon and margin
  margin-left: calc(1.5rem + 20px);
  font-size: 1.6rem;
  color: ${({ theme }) => theme.contrast.primary};
  display: flex;
  align-items: center;
  font-family: ${fontFamily.circularMedium};
  margin-bottom: 1.6rem;
`;

export const SubItemContainer = styled(ItemContainer)`
  display: flex;
  justify-content: flex-end;
`;

export const GridOptContainer = styled(PaneOptContainer)``;
export const GridButton = styled(PaneButton)`
  font-size: 1.6rem;
`;
