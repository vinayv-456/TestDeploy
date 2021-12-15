import styled from 'styled-components';
import { fontFamily, fontSize, device } from '../../../constants';

export const ToastContainer = styled.div`
  display: none;
  box-shadow: 3px 3px 10px #0000004f;
  background-color: ${({ theme }) => theme.contrast.darkQuaternary};
  color: #fff;
  justify-content: center;
  border-radius: 5px;
  padding: 16px;
  position: absolute;

  &.show {
    display: flex;
    -webkit-animation: fadeInOut 3s 1;
    animation: fadeInOut 3s 1;
  }

  @keyframes fadeInOut {
    0% {
      bottom: 0;
      opacity: 0;
    }
    10%, 70%{
      bottom: 30px;
      opacity: 1;
    }
    100% {
      bottom: 0;
      opacity: 0;
    }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 19px;
`;

export const Header = styled.div`
  font-family: ${fontFamily.circularBold};
  font-size: ${fontSize.ToastHeader};
  @media ${device.tablet} {
    font-size: ${fontSize.loginGreetingMobile};
  }
`;

export const Message = styled.div`
  font-family: ${fontFamily.circularBook};
  font-size: ${fontSize.loginInputSize};
  @media ${device.tablet} {
    font-size: ${fontSize.loginInputSizeMobile};
  }
`;

export const Image = styled.img`
  width: 52px;
  @media ${device.tablet} {
    width: 35px;
  }
`;
