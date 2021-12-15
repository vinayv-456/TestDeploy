/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../constants';
import {
  Table as TableTemplate,
  Th as ThTemplate,
  Td as TdTemplate,
  Tr as TrTemplate
} from '../Common/Table/SpacedRows.styles';

export const Table = styled(TableTemplate)`
  & > thead > tr > th:not(:last-child) {
    border-right: 1px dashed ${({ theme }) => theme.aux.darkSecondary};
  }
`;

export const Tr = styled(TrTemplate)`
  & > td:not(:nth-last-of-type(-n + 2)) {
    border-right: 1px dashed ${({ theme }) => theme.aux.darkSecondary};
    &::before {
      content: '';
      height: 2rem;
      width: 1px;
      border-right: 1px dashed ${({ theme }) => theme.aux.darkSecondary};
      position: absolute;
      right: -1px;
      top: -14px;
    }

    &::after {
      content: '';
      height: 2rem;
      width: 1px;
      border-right: 1px dashed ${({ theme }) => theme.aux.darkSecondary};
      position: absolute;
      right: -1px;
      bottom: -14px;
    }
  }
`;

export const Th = styled(ThTemplate)``;

export const Td = styled(TdTemplate)`
  width: ${({ width }) => width};
  text-align: ${({ align }) => align};
  padding: 2.2rem 2rem;
`;

export const Anchor = styled.p`
  text-decoration: underline;
  color: #0077ff;
  font-size: 1.6rem;
  cursor: pointer;
`;
