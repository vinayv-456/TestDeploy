/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { device, fontFamily, fontSize } from '../../constants';
import { inputFeildError } from '../../assets/icons';

const Input = styled.input`
  display: inline;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  box-shadow: -5px -5px 15px ${({ theme }) => theme.shadowContrast}, 5px 5px 15px ${({ theme }) => theme.shadow};
  border-radius: 1rem;
  opacity: 1;
  outline: none;
  border: ${(props) => (props.outline ? `1px solid ${props.theme.errorText}` : '0px')};
  width: 100%;
  height: 6rem;
  padding-left: 2.1rem;
  padding-right: 50px;
  font-size: ${fontSize.loginInputSize};
  font-family: ${fontFamily.circularBook};
  :focus {
    box-shadow: inset -5px -5px 10px ${({ theme }) => theme.shadowContrast},
      inset 5px 5px 10px ${({ theme }) => theme.shadow};
  }
  ::placeholder {
    color: ${({ theme }) => theme.contrast.secondary};
    font-size: ${fontSize.loginInputSize};
    font-family: ${fontFamily.circularBook};
  }
  @media ${device.tablet} {
    height: 4.5rem;
    font-size: ${fontSize.loginInputSizeMobile};
    padding-right: 45px;
    box-shadow: none;
    ::placeholder {
      font-size: ${fontSize.loginInputSizeMobile};
    }
    :focus {
      background-color: transparent;
      /* outline: none;
      box-shadow: inset -5px -5px 10px #ffffffcb, inset 5px 5px 10px rgba(0, 0, 0, 0.1); */
    }
  }
`;
const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 3rem;
  /* ${(props) => (props.outline && props.errorMsg ? '0.8rem' : '1.8rem')}; */
  @media ${device.tablet} {
    margin-bottom: 2.5rem;
    /* ${(props) => (props.outline && props.errorMsg ? '0.5rem' : '1.2rem')}; */
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 24px;
  width: 21px;
  cursor: pointer;
  @media ${device.tablet} {
    width: 13px;
  }
`;

const Error = styled.div`
  position: absolute;
  bottom: 0.4rem;
  color: red;
  display: flex;
  align-self: flex-start;
  font-size: ${fontSize.loginInputSize};
  @media ${device.tablet} {
    bottom: 7px;
    font-size: 10px;
  }
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _handleKeyPress = (e, onSubmit) => {
  e.preventDefault();
  if (e.key === 'Enter') {
    onSubmit();
  }
};

const InputField = ({
  name,
  type,
  placeholder,
  iconUrl,
  outline,
  onIconPress,
  handleInputChange,
  errorMsg,
  onSubmit
}) => (
  <Container>
    <InputContainer outline={outline} errorMsg={errorMsg}>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        outline={outline}
        onChange={handleInputChange}
        onKeyUp={(e) => _handleKeyPress(e, onSubmit)}
      />
      <Icon src={outline ? inputFeildError : iconUrl} onClick={onIconPress} />
    </InputContainer>
    {outline && errorMsg && <Error>{errorMsg}</Error>}
  </Container>
);

export default InputField;
