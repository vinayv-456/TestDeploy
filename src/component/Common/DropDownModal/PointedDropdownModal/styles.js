import styled from 'styled-components';
import { fontFamily } from '../../../../constants';

export const ModalContainer = styled.div`
  min-height: 20px;
  position: absolute;
  top: 260%;
  background-color: #eeeff5;
  /* background-color: red; */
  box-shadow: 5px 5px 15px #0000001a;
  border: 1px solid #b4b4b4;
  z-index: 10;
  border-radius: 6px;
  /* animation: heightAnimation 400ms 1; */
  /* overflow: auto; */
  padding: 15px 20px;
  width: 25rem;
  min-width: max-content;
  color: #474747;
  right: 0px;

  &:before {
    content: '';
    /* display: block; */
    position: absolute;
    top: -20px;
    right: 8px;
    width: 0;
    height: 0;
    border-bottom: 10px solid #eeeff5;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  & > div + div {
    margin-top: 2rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background-color: red; */
  padding: 0rem 2rem;
`;

export const ItemText = styled.div`
  color: #474747;
  font-size: 1.6rem;
  font-family: ${fontFamily.circularMedium};
  cursor: pointer;
  text-transform: capitalize;
`;
