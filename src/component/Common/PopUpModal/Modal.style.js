/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';

export const Modal = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
`;

export const RightAlignedModalContainer = styled.div`
  position: absolute;
  right: 0px;

  width: 60%;
  /* background-color: ${({ theme }) => theme.core.secondary}; */
  background-color: ${({ theme }) => theme.core.pureSecondary};
  color: ${({ theme }) => theme.contrast.quaternary};
  padding: 2rem 2rem 1rem 4rem;
  height: 100%;
  overflow: auto;
`;

// center aligned modal container
export const ModalContent = styled.div`
  width: ${({ width }) => width || '30%'};
  background-color: ${({ theme }) => theme.core.secondary};
  margin: auto;
  color: ${({ theme }) => theme.contrast.quaternary};
  border-radius: 10px;
  box-shadow: -5px -5px 8px 11px ${({ theme }) => theme.shadow};
  background-clip: padding-box;
  padding: 2rem;
`;

export const Heading = styled.div`
  font-size: ${fontSize.title};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.contrast.darkSecondary};
  font-family: ${fontFamily.circularMedium};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline;
  width: 45%;
  height: 4rem;
  font-size: ${fontSize.titleBig};
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadow}, 3px 3px 10px ${({ theme }) => theme.shadow};
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
