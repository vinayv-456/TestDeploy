import styled from 'styled-components';
import { fontFamily } from '../../../constants';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 60rem;
  height: auto;
  box-shadow: -5px -5px 11px #fffffff5, 5px 5px 11px rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.div`
  padding: 5rem 2rem 2rem 4.5rem;
  flex: 1;
  position: relative;

  & > div > div > div > svg.dynamicSVGIcon {
    position: absolute;
    right: 3rem;
    top: 2.5rem;
  }
`;

export const SidePanel = styled.div`
  padding: 2.2rem 2rem 2rem;
  width: 30%;
  position: relative;
  /* background: red; */
  /* #eeeff5 */
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.1);
  & div {
    font-size: 1.8rem;
    color: #4a4a4a;
    font-family: ${fontFamily.circularMedium};
    &.active {
      color: #000000;
    }
  }
  & .header {
    font-size: 2.4rem;
    color: #4a4a4a;
    font-family: ${fontFamily.circularBold};
    margin-bottom: 4rem;
  }
  & .footer {
    position: absolute;
    bottom: 2rem;
  }
`;

export const ItemsContainer = styled.div`
  padding: 1rem;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-bottom: 2rem;
  &.active {
    & div {
      color: black;
    }
    & * {
      fill: black !important;
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 0px;
`;

export const ItemText = styled.div`
  padding-left: 2.5rem;
`;
