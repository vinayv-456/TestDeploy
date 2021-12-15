import styled from 'styled-components';
import { fontFamily, fontSize, device } from '../../../constants';

export const ModalContainer = styled.div`
  min-height: 20px;
  position: absolute;
  background-color: ${({ theme }) => theme.customTheme.primary};
  z-index: 10;
  border-radius: 6px;
  animation: heightAnimation 400ms 1;
  overflow: auto;
  padding: 15px 20px 15px 20px;
  width: 21.3rem;
  min-width: max-content;

  @keyframes heightAnimation {
    from {
      opacity: 0;
      transform: translateY(10px);
      overflow: hidden;
    }
    to {
      opacity: 1;
      transform: translateY(0px);
      overflow: hidden;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const ModalContentDiv = styled.div`
  height: 25px;
`;

export const ModalContentText = styled.p`
  font-size: 2rem;
  /* color: white; */
  color: ${({ theme }) => theme.contrast.tertiary};
  margin-top: 10px;
`;
