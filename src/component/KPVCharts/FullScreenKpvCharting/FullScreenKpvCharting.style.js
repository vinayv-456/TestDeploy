import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.core.pureSecondary};
  width: 100%;
  height: 100%;
`;

export const NavIconsContainer = styled.div`
  background-color: ${({ theme }) => theme.core.secondary};
  width: 100%;
  height: 5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled(Container)`
  padding: 0px 4rem;
  height: calc(100% - 7rem);
  overflow-y: scroll;
`;

export const CancelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 100%;
  background-color: red;
  cursor: pointer;
`;

export const CancelIcon = styled.img`
  width: 2rem;
`;
