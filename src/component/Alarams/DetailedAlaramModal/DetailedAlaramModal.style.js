import styled from 'styled-components';
import { fontFamily } from '../../../constants';

export const DetailsContainer = styled.div`
  display: flex;
  width: ${({ width }) => width && width};
  margin-bottom: 2.5rem;
  & > div + div {
    /* margin-left: 10rem; */
  }
`;

export const DetailSection = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
`;

export const ContentText = styled.div`
  color: #000000;
  font: 1.6rem ${fontFamily.circularMedium};
  /* background-color: red; */
  &.ml {
    padding-left: 3rem;
  }
  flex: 1.8;
  &.heading {
    flex: 1.2;
    color: #717171;
  }
`;

export const Container = styled.div`
  width: 80vw;
  position: relative;
  background-color: ${({ theme }) => theme.aux.secondary};
  box-shadow: 0px 0px 15px #00000029;
  border-radius: 10px;
  margin: 1.5rem 0rem 4.5rem;
`;

export const Header = styled.div`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.contrast.primary};
  padding: 1.5rem 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularBold};
`;

export const Anchor = styled.span`
  font: 1.8rem ${fontFamily.circularMedium};
  color: #4a4a4a;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 2.5rem;
`;
