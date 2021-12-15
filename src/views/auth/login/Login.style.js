import styled from 'styled-components';
import { fontSize, fontFamily, device } from '../../../constants';
import { Button } from '../../../component';

export const Container = styled.div`
  height: calc(100%);
  min-height: calc(100%);
  display: flex;
  flex-direction: row;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const LoginFormContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.core.secondary};
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    /* background-image: url(${(props) => props.bgImg}); */
    background-position: right;
    position: relative;
    background-size: cover;
    background-color: transparent;
    display: ${(props) => (props.notify === true ? 'none' : 'flex')};
  }
`;

export const LogoText = styled.div`
  font-size: 3.5rem;
  /* font-weight: 900;

  font-size: ${fontSize.loginGreeting}; */
  font-weight: bold;
  color: ${({ theme }) => theme.customTheme.loginprimary};
  font-family: ${fontFamily.circularBold};
  @media ${device.tablet} {
    font-size: ${fontSize.title};
  }
`;

export const LoginForm = styled.div`
  width: 61%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media ${device.tablet} {
    width: 100%;
    z-index: 1;
    min-height: 380px;
  }
`;

export const Greeting = styled.div`
  font-size: ${fontSize.loginGreeting};
  font-weight: bold;
  margin-bottom: ${(props) => props.marginBottom || '4.3rem'};
  margin-top: 20px;
  color: ${({ theme }) => theme.contrast.quaternary};
  font-family: ${fontFamily.circularBold};
  @media ${device.tablet} {
    margin-bottom: 45px;
    font-size: ${fontSize.loginGreetingMobile};
    margin-top: 12.5px;
  }
`;

export const ForgotPassword = styled.div`
  color: ${({ theme }) => theme.customTheme.loginprimary};
  margin-right: 10%;
  align-self: flex-end;
  font-size: ${fontSize.loginInputSize};
  font-family: ${fontFamily.circularMedium};
  cursor: pointer;
  @media ${device.tablet} {
    font-size: ${fontSize.circularMediumMobile};
  }
`;

export const ComapanyInfo = styled.div`
  @media (min-width: 768.1px) {
    display: none;
  }
  @media ${device.tablet} {
    position: relative;
    /* position: absolute; */
    /* bottom: 1.2rem; */
    color: ${({ theme }) => theme.contrast.tertiary};
    font-size: ${fontSize.circularMediumMobile};
    font-family: ${fontFamily.circularBook};
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 15px;
  }
`;

export const Btn = styled(Button)`
  @media ${device.tablet} {
    margin-top: 23px;
  }
`;

export const Logo = styled.img`
  margin-right: 7px;
`;

export const LogoContainer = styled.img`
  width: 64px;
  @media ${device.tablet} {
    width: 34px;
  }
`;

export const OverlayDiv = styled.div`
  @media (min-width: 768.1px) {
    display: none;
  }

  @media ${device.tablet} {
    /* background-color: #ffffff; */
    background-image: url(${(props) => props.bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
`;

export const ImgOverlay = styled.img`
  @media (min-width: 768.1px) {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
    position: absolute;
    opacity: 0.1;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: 80% 0%;
  }
`;
