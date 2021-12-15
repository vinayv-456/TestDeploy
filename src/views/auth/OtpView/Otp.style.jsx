import styled from 'styled-components';
import { fontSize, fontFamily, device } from '../../../constants';
import { Return, Desc } from '../ForgotPassword/ForgotPassword.style';
import { Greeting } from '../login/Login.style';

export const Msg = styled.div`
  color: ${({ theme }) => theme.contrast.darkPrimary};
  display: inline;
  font-size: ${fontSize.loginInputSize};
  font-family: ${fontFamily.circularBook};
  @media ${device.tablet} {
    font-size: ${fontSize.circularMediumMobile};
  }
`;

export const Nav = styled(Return)`
  padding-left: 6px;
  display: inline;
`;

export const QueryMsg = styled.div`
  margin-top: 8px;
  margin-bottom: 25px;
  @media ${device.tablet} {
    margin-top: 1px;
    margin-bottom: 7px;
  }
`;

export const Description = styled(Desc)`
  width: 60%;
  @media ${device.tablet} {
    width: 60%;
    font-size: ${fontSize.descTextMobile};
    margin-bottom: 19px;
  }
`;

export const Heading = styled(Greeting)`
  @media ${device.tablet} {
    margin-bottom: 13px;
  }
`;
