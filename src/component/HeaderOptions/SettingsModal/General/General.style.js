import styled from 'styled-components';
import { fontFamily } from '../../../../constants';
import { DropdownBar as DropdownBarTemp } from '../../../Common/CommonStyles';

export const HeaderText = styled.div`
  font-family: ${fontFamily.circularBold};
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 2.3rem;
  margin-top: 4rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: #000000;
  font: 1.6rem ${fontFamily.circularMedium};
`;

export const DropdownBar = styled(DropdownBarTemp)`
  height: 5rem;
  position: relative;
  text-transform: capitalize;
`;

export const DpButton = styled.div`
  position: absolute;
  right: 0px;
  height: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.core.pureSecondary};
  display: flex;
  align-items: center;
  border-radius: 8px;
  z-index: 3;

  transform: rotate(90deg);
  &.active {
    transform: rotate(270deg);
  }
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;
