import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  & path {
    stroke: ${({ theme }) => theme.customTheme.primary};
  }
  & circle {
    fill: ${({ theme }) => theme.customTheme.primary};
  }
`;
