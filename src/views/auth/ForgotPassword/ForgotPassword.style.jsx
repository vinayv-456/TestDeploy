import styled from 'styled-components';
import { device } from '../../../constants';
import { fontSize, fontFamily } from '../../../constants/font';
import { Greeting } from '../login/Login.style';

export const Return = styled.div`
  color: ${({ theme }) => theme.customTheme.loginprimary};
  align-self: center;
  display: flex;
  align-items: center;
  font-size: ${fontSize.loginInputSize};
  font-family: ${fontFamily.circularMedium};
  margin-top: 31px;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: ${fontSize.circularMediumMobile};
    margin-top: 22px;
  }
  & svg g path {
    fill: ${({ theme }) => theme.customTheme.loginprimary} !important;
  }
`;
export const Desc = styled.div`
  margin-bottom: ${(props) => props.marginBottom || '4rem'};
  color: ${({ theme }) => theme.contrast.secondary};
  font-size: ${fontSize.loginInputSize};
  font-family: ${fontFamily.circularBook};
  text-align: center;
  @media ${device.tablet} {
    color: ${({ theme }) => theme.contrast.quaternary};
    margin-bottom: 28px;
    font-size: 14px;
  }
`;

export const Error = styled(Desc)`
  color: ${({ theme }) => theme.errorText};
  @media ${device.tablet} {
    width: 75%;
    font-size: ${fontSize.descTextMobile};
    margin-bottom: 15px;
  }
`;

export const Heading = styled(Greeting)`
  @media ${device.tablet} {
    font-size: ${fontSize.loginGreetingMobile};
    margin-bottom: 18px;
  }
`;

export const BackArrow = styled.img`
  height: 1.5rem;
  margin-right: 11px;
  @media ${device.tablet} {
    height: 12px;
    margin-right: 6px;
  }
`;
