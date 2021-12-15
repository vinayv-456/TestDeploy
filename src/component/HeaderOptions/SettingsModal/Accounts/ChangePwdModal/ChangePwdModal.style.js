import styled from 'styled-components';
import { fontFamily } from '../../../../../constants';

export const Header = styled.div`
  color: #000000;
  margin-bottom: 3rem;
  font: 1.8rem ${fontFamily.circularBook};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0px 10%;
  display: flex;
  & button {
    width: 20rem;
  }
`;
