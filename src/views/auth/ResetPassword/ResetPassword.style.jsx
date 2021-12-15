import styled from 'styled-components';
import { Desc } from '../ForgotPassword/ForgotPassword.style';
import { Button } from '../../../component';
import { Greeting } from '../login/Login.style';
import { device } from '../../../constants';

export const DescMsg = styled(Desc)`
  margin-bottom: 42px;
  @media ${device.tablet} {
    margin-bottom: 25px;
  }
`;

export const Btn = styled(Button)`
  margin-top: 14px;
  @media ${device.tablet} {
    margin-top: 2px;
  }
`;

export const Heading = styled(Greeting)`
  @media ${device.tablet} {
    margin-bottom: 12px;
  }
`;
