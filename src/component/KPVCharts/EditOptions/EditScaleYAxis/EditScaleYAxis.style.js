import styled from 'styled-components';

export const Header = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  & > span {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 2rem auto 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
