/* eslint-disable max-len */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { fontSize } from '../../../constants';
import { shadow } from '../../../constants/colors';

const Input = styled.input`
  background-color: #eeeff5;
  box-shadow: ${shadow.inputInset};
  border-radius: 1rem;
  border: 0rem;
  width: 100%;
  height: 45px;
  padding-left: 2.1rem;
  padding-right: 3.7rem;
  color: ${({ theme }) => theme.black};
  font-size: ${fontSize.text};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.placeHolderText};
    font-size: ${fontSize.loginInputSize};
  }
`;

const Index = (props) => {
  const { disabled, placeholder, value, setValue, type, margin, style } = props;
  const ref = useRef();
  return (
    <Input
      disabled={disabled}
      placeholder={placeholder || ''}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      type={type}
      ref={ref}
      style={{ margin, ...style }}
    />
  );
};

Index.defaultProps = {
  disabled: false,
  placeholder: '',
  value: '',
  setValue: () => null,
  type: 'text'
};

export default Index;
