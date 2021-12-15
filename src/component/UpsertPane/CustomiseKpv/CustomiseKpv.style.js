import styled from 'styled-components';
import { fontFamily } from '../../../constants';
import { CheckBox, FlexCenter, Radio } from '../UpsertPane.style';

export const CheckBoxContainer = styled(CheckBox)`
  position: absolute;
  left: -9px;
  background-color: ${({ theme }) => theme.core.pureSecondary};
`;

export const KPVItemContainer = styled(FlexCenter)`
  position: relative;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.core.secondary};
  width: 100%;
  /* min-height: 7.5rem; */
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  margin-bottom: 1.3rem;
  & > div > div + div {
    margin-top: 5px;
  }
  & div div span {
    font-size: 1.6rem;
    font-family: ${fontFamily.circularMedium};
  }
`;

export const RadioContainer = styled(Radio)`
  position: absolute;
  left: -9px;
`;

export const RadioIcon = styled.div`
  min-width: 60%;
  height: 60%;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.contrast.quaternary};
`;

export const VerticalDiv = styled.span`
  margin: 0px 10px;
`;
