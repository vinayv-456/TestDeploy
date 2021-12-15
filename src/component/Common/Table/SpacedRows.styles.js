/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2rem;
  & > td,
  th {
    vertical-align: middle;
  }
`;

export const Tr = styled.tr`
  box-shadow: ${({ theme }) => theme.shadowout};
  border-radius: 1rem;

  & > td:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  & > td:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const Th = styled.th`
  font-size: ${fontSize.text};
  font-family: ${fontFamily.circularBook};
  color: ${({ theme }) => theme.text.gray};
  padding-bottom: 1rem;
  border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
  border-bottom: 0.5px solid ${({ theme }) => theme.aux.darkSecondary};
`;

export const Td = styled.td`
  background-color: ${({ theme }) => theme.cardBg};
  font-size: ${fontSize.text};
  color: ${({ theme }) => theme.text.primary};
  padding: 3rem 2rem;
  border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
  position: relative;
  text-align: center;
  /* width: 100px; */

  &::before {
    content: '';
    height: 2rem;
    width: 1px;
    border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
    position: absolute;
    right: -1px;
    top: -14px;
  }

  &::after {
    content: '';
    height: 2rem;
    width: 1px;
    border-right: ${({ theme, border }) => (border ? `1px dashed ${theme.aux.darkSecondary}` : 0)};
    position: absolute;
    right: -1px;
    bottom: -14px;
  }
`;
