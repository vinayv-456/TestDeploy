import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../constants';
import { Modal } from '../../Common/PopUpModal/Modal.style';

export const ModalOverlay = styled(Modal)``;

export const ModalContent = styled.div`
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

export const CancelButton = styled.img`
  position: absolute;
  right: 61%;
  top: 3rem;
  height: 2rem;
`;

export const DetailContainer = styled.div`
  padding: 2rem 0px;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px dashed ${({ theme }) => theme.contrast.lightSecondary};
  }
`;

export const ContainerHeading = styled.h1`
  color: ${({ theme }) => theme.contrast.lightQuaternary};
  font-size: 2.6rem;
  font-family: ${fontFamily.circularBold};
  text-transform: capitalize;
  margin: 2rem 0rem 2rem;
`;

export const HeadingText = styled.h2`
  color: ${({ theme }) => theme.contrast.secondary};
  font-size: ${fontSize.title};
  font-family: ${fontFamily.circularMedium};
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
