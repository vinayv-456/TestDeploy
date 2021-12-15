import styled, { css } from 'styled-components';
import { fontFamily, fontSize } from '../constants';
import { shadow } from '../constants/colors';

export const Div = styled.div`
  ${(props) =>
    props.m &&
    css`
      margin: ${props.m}rem;
    `};

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml}rem;
    `};

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr}rem;
    `};

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt}rem;
    `};

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}rem;
    `};

  ${(props) =>
    props.mx &&
    css`
      margin: 0 ${props.mx}rem;
    `};

  ${(props) =>
    props.my &&
    css`
      margin: ${props.my}rem 0;
    `};

  ${(props) =>
    props.p &&
    css`
      pading: ${props.p}rem;
    `};

  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl}rem;
    `};

  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr}rem;
    `};

  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt}rem;
    `};

  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb}rem;
    `};

  ${(props) =>
    props.px &&
    css`
      padding: 0 ${props.px}rem;
    `};

  ${(props) =>
    props.py &&
    css`
      padding: ${props.py}rem 0;
    `};
`;

export const FlexContainer = styled(Div)`
  display: flex;

  &.col {
    flex-direction: column;
  }

  &.jc_center {
    justify-content: center;
  }

  &.jc_spacebetween {
    justify-content: space-between;
  }

  &.ai_center {
    align-items: center;
  }
`;

export const Image = styled.img`
  width: ${({ width }) => `${width}rem`};
  height: ${({ width }) => `${width}rem`};
`;

export const Button = styled.button`
  display: inline;
  width: 45%;
  height: 4rem;
  font-size: ${fontSize.titleBig};
  box-shadow: ${shadow.out};
  border-radius: 5px;
  border: 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularMedium};

  background-color: white;
  color: black;

  &.dark {
    background-color: black;
    color: white;
  }
`;
