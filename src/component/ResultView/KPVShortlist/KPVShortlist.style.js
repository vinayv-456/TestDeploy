import styled from 'styled-components';
import { device, fontFamily, fontSize } from '../../../constants';
import { CellTemplate, RowTemplate, TableContainerTemplate } from '../../Common/Table/Table/Table.style';

export const Container = styled.div`
  width: 97%;
  height: 100%;
  margin: 0px auto;
`;

export const HeadingBox = styled.div`
  /* margin: 0px 1.5rem; */
  position: relative;
  display: flex;
  height: 7rem;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  border-bottom: 1px solid ${({ theme }) => theme.aux.darkSecondary};
  @media ${device.tablet} {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftArrow = styled.div`
  width: 4.5rem;
  cursor: pointer;
  margin-left: -1rem;
  margin-right: 1rem;
  transform: rotate(180deg);
  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const HeaderText = styled.p`
  font-size: ${fontSize.headingText};
  font-family: ${fontFamily.circularMedium};
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const TableContainer = styled(TableContainerTemplate)`
  width: 100%;
  margin: 1.5rem 0px;
  height: calc(100% - 8.5rem);
  background-color: ${({ theme }) => theme.core.secondary};
  border-radius: 1.2rem;
  overflow: auto;
  border: 0.7rem solid ${({ theme }) => theme.core.pureSecondary};
`;

export const Cell = styled(CellTemplate)`
  &:first-child {
    padding-left: 2.5rem;
  }

  &.groupHeading {
    font-family: ${fontFamily.circularBold};
  }

  &.active {
    & > .active {
      color: red;
      border: 1px solid red;
    }
  }
`;

export const Row = styled(RowTemplate)``;

export const Button = styled.button`
  width: 18rem;
  padding: 8px;
  background-color: ${({ theme }) => theme.customTheme.primary};
  color: white;
  font-size: 2rem;
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  border: 0px;
  outline: none;
`;

export const SaveICon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
`;
