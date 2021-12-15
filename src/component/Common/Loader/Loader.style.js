import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  z-index: 10000;
  /* background-color: rgba(0, 0, 0, 0.4); */

  & path {
    stroke: ${({ theme }) => theme.customTheme.primary};
  }
  & circle {
    fill: ${({ theme }) => theme.customTheme.primary};
  }
`;
