import styled from 'styled-components';

export const TableContainerTemplate = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

export const RowTemplate = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.aux.secondary};
  background-color: ${({ theme }) => theme.table.normal};
  &.header {
    background-color: ${({ theme }) => theme.table.header};
    border-bottom: 1px dashed ${({ theme }) => theme.contrast.lightSecondary};
  }
`;

export const CellTemplate = styled.div`
  position: relative;
  font-size: 1.8rem;
  padding: 15px 10px;
  border-right: ${({ border, theme }) => (border ? `1px dashed ${theme.contrast.lightSecondary}` : '0px')};
  color: ${({ theme }) => theme.contrast.lightQuaternary};
  text-transform: capitalize;
  flex-wrap: nowrap;
  /* max-height: 80px; */
  min-width: 8rem;
  flex: 1;
  flex-basis: ${({ width }) => `${width}%`};
  flex-shrink: 0;
  flex-grow: 1;
  order: ${({ order }) => order};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => (!align ? 'center' : '')};

  &.colHeading {
    color: ${({ theme }) => theme.contrast.darkSecondary};
  }

  &:not(:last-child) {
    border-right: 1px dashed ${({ theme }) => theme.contrast.lightSecondary};
  }

  &.active {
    background-color: ${({ theme }) => theme.aux.darkSecondary};
  }
`;
