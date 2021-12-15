/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily } from '../../../constants';

export const Container = styled.div`
  width: 100%;
  position: relative;
  /* margin: 0px auto; */
  background-color: ${({ theme }) => theme.aux.secondary};
  /* box-shadow: 0px 7px 10px #00000029; */
  box-shadow: 0px 0px 15px #00000029;
  border-radius: 10px;
  margin-top: 1.5rem;
  &.fullscreen {
    min-height: 85%;
    overflow-y: scroll;
  }
`;

export const Header = styled.div`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.contrast.primary};
  padding: 1.5rem 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularBold};
`;

export const tickLabels = {
  stroke: '#393939',
  fontSize: '3rem',
  fontFamily: `${fontFamily.circularBook}`
};

export const GraphContainer = styled.div`
  display: flex;
  width: 100%;
  &.fullscreen {
    position: absolute;
    height: calc(100% - 5rem);
    flex-direction: column;
    flex: 1;
    & > div {
      height: 100%;
    }
  }
  &.singlePane {
    margin-bottom: 2rem;
  }
`;

export const Graph = styled.div`
  width: calc(${({ width }) => width} - ${({ paddingLeft }) => (paddingLeft ? `${paddingLeft}px` : '0px')});
  height: ${({ height }) => height || 20}rem;
  min-height: 15rem;
  /* padding-left: 100px; */
  /* flex: 1; */
  /* background-color: green; */
  /* margin-left: 10px; */
  overflow-x: hidden;
  /* Hide scrollbar for Chrome, Safari and Opera */
  /* &::-webkit-scrollbar {
    display: none;
  } */
  /* Hide scrollbar for IE, Edge and Firefox */
  /* -ms-overflow-style: none;
  scrollbar-width: none; */
  /* flex: 1; */
  margin-left: ${({ paddingLeft }) => (paddingLeft ? `${paddingLeft}px` : '0px')};
  /* padding-left: 100px; */
  &.fullscreen {
    height: 100%;
  }
`;
