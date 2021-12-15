import styled from 'styled-components';
import { fontFamily } from '../../../constants';
import { shadow } from '../../../constants/colors';

export const CommentInputContainer = styled.textarea`
  width: 100%;
  font: 1.8rem ${fontFamily.circularBook};
  border: none;
  background-color: transparent;
  box-shadow: ${shadow.inputInset};
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.black};
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.placeHolderText};
    font-size: 1.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;
