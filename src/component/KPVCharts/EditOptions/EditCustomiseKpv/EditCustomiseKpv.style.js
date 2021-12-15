/* eslint-disable max-len */
import styled from 'styled-components';
import { Input as Inp } from '../../../UpsertPane/UpsertPane.style';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Input = styled(Inp)`
  margin-left: 0px;
  margin-right: 10px;
  flex: 1;
`;

export const Container = styled.div`
  position: fixed;
  right: 0px;
  top: 16rem;
  z-index: 100;
  height: calc(100% - 16rem);
  overflow-y: auto;
  width: 22%;
  padding: 2rem 1.5% 0px;
  background: ${({ theme }) => theme.core.pureSecondary} 0% 0% no-repeat padding-box;
  box-shadow: 0px 7px 10px #00000029;
  border-radius: 10px 0px 0px 0px;
`;

export const KpvListContainer = styled.div`
  height: 84%;
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 10px;
`;

export const Inputcontainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 18px;
  width: ${({ width }) => `${width}rem`};
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;
