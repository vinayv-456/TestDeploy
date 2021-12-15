/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { device, fontSize } from '../../../constants';
import { Div } from '../../../globalStyles';
import DynamicSVGIcon from '../DynamicSVGIcon';
import Search from '../../../assets/icons/Filter/Search white.svg';

const Input = styled.input`
  background: ${({ theme }) => theme.core.secondary};
  /* box-shadow: ${({ theme }) => theme.shadowin}; */
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -5px -5px 2px ${({ theme }) => theme.aux.secondary};

  border-radius: 1rem;
  opacity: 1;
  border: 0rem;
  width: 100%;
  height: 45px;
  padding-left: 2.1rem;
  padding-right: 3.7rem;
  /* color: ${({ theme }) => theme.contrast.quaternary}; */
  color: ${({ theme }) => theme.contrast.secondary};
  font-size: ${fontSize.text};
  /* font-size: 1.6rem; */

  &:focus {
    outline: none;
  }

  ::placeholder {
    /* color: ${({ theme }) => theme.text.gray}; */
    font-size: ${fontSize.loginInputSize};
  }

  @media ${device.tablet} {
    box-shadow: none;
    font-size: 16px;
    ::placeholder {
      color: ${({ theme }) => theme.placeHolderText};
      font-size: 16px;
    }
  }
`;

const Container = styled(Div)`
  width: ${(props) => props.width && `${props.width}rem`};
  position: relative;
  z-index: 6;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Icon = styled.div`
  position: absolute;
  right: 5%;

  & > div > div > svg > g > path {
    fill: ${({ theme }) => `${theme.contrast.quaternary} !important`};
  }
`;

function SearchBar(props) {
  const { searchValue, onChange, placeholder } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Container {...props}>
      <Input
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        onFocus={() => null}
        onKeyUp={() => null}
      />
      <Icon>
        <DynamicSVGIcon iconUrl={Search} />
      </Icon>
    </Container>
  );
}

export default SearchBar;
