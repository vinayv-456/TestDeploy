/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const Label = styled.span`
  font-size: ${fontSize.title};
  margin-right: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  margin: auto;
  height: 4rem;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: inset -3px -3px 5px ${({ theme }) => theme.shadow}, inset 3px 3px 10px ${({ theme }) => theme.shadow};
  background-color: transparent;
  font-size: ${fontSize.medium};
  padding-left: 10px;
  font-family: ${fontFamily.circularMedium};
  ::placeholder {
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
