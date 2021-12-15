/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const OptIcon = styled.div`
  width: ${({ width }) => width || 2.5}rem;
  margin: 2px 5px;
  transform: rotate(${({ rotate }) => rotate}deg);

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const DurationDropdown = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.core.secondary};
  box-shadow: 0px 3px 12px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.contrast.secondary};
  border-radius: 10px;
  padding: 10px 0px;
  z-index: 100;
  width: 21rem;
  margin-top: 5px;
  color: ${({ theme }) => theme.contrast.primary};

  & > div:first-child {
    padding: 0px 10px;
    font-size: 1.7rem;
    font-family: ${fontFamily.circularMedium};
    margin-bottom: 7px;
  }
`;
export const ItemText = styled.div`
  font-size: ${fontSize.text};
  padding: 5px 10px;
  font-family: ${({ theme }) => theme.core.secondary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.aux.secondary};
  }
`;

export const RangeContainer = styled.div`
  z-index: 10;
  position: absolute;
  left: calc(100% + 10px);
  top: -5px;
  background: ${({ theme }) => theme.core.secondary};
  box-shadow: -5px -5px 15px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.contrast.secondary};
  border-radius: 10px;
  padding: 10px 10px 20px;
  width: 29rem;
  & > * {
    font-size: ${fontSize.text};
    font-family: ${fontFamily.circularMedium};
  }
  & > div:first-child {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.div`
  font-size: ${fontSize.medium};
  margin: 0.7rem 0px 0.5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Button = styled.button`
  display: inline;
  width: 45%;
  height: 4rem;
  font-size: ${fontSize.titleBig};
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadowContrast}, 3px 3px 10px ${({ theme }) => theme.shadow};
  border-radius: 5px;
  border: 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.aux.secondary};
  color: ${({ theme }) => theme.contrast.primary};
  &.dark {
    background-color: ${({ theme }) => theme.customTheme.primary};
    color: ${({ theme }) => theme.contrast.tertiary};
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: auto;
  height: 4rem;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  box-shadow: inset -3px -3px 5px ${({ theme }) => theme.shadowContrast},
    inset 3px 3px 10px ${({ theme }) => theme.shadow};
  background-color: transparent;
  font-size: ${fontSize.medium};
  padding-left: 10px;
  font-family: ${fontFamily.circularMedium};
  ::placeholder {
    color: ${({ theme }) => theme.contrast.primary};
  }
`;

export const WrapperDiv = styled.div`
  position: relative;
`;

export const CalenderDiv = styled.div`
  position: absolute;
  /* width: 100%; */
  overflow: hidden;
  z-index: 10;
  background: ${({ theme }) => theme.core.secondary};
  box-shadow: -5px -5px 15px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.contrast.secondary};
  border-radius: 10px;
`;

export const Divider = styled.div`
  margin: 5px auto;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.aux.darkSecondary};
`;
