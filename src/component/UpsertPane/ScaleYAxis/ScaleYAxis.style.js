/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';
import { ColorLabel, ColorLabelText, LegendItemContainerBtm } from '../../KPVCharts/Legend/Legend.style';
import { FlexCenter } from '../UpsertPane.style';

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

export const ScaleEntryDiv = styled.div`
  width: 100%;
`;

export const ColorLabelBox = styled(ColorLabel)`
  margin-bottom: 1rem;
`;

export const ColorLabelTxt = styled(ColorLabelText)``;

export const LegendItemContainer = styled(LegendItemContainerBtm)`
  margin-left: 0px;
  flex-wrap: wrap;
  min-width: 5rem;
  max-width: 100%;
`;

export const RangeInpDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > span {
    font-size: 1.6rem;
  }
`;

export const ScaleInp = styled.input`
  width: 45%;
  max-width: 15rem;
  height: 4rem;
  font-size: ${fontSize.text};
  padding: 5px 10px;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  color: ${({ theme }) => theme.contrast.darkSecondary};
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.core.secondary};
  z-index: 2;
  box-shadow: inset -3px -3px 5px ${({ theme }) => theme.shadowContrast},
    inset 3px 3px 10px ${({ theme }) => theme.shadow};

  /* &.active {
    box-shadow: inset 3px 3px 10px rgba(0, 0, 0, 0.1);
  } */
`;
