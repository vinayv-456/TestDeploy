import styled from 'styled-components';
import { fontFamily } from '../../../constants';

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
  color: #4a4a4a;
  font: 1.8rem ${fontFamily.circularBook};
`;
