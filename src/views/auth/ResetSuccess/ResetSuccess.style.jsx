import styled from 'styled-components';
import { device, fontSize } from '../../../constants';
import { Greeting } from '../login/Login.style';
import { Button } from '../../../component/index';

export const Heading = styled(Greeting)`
  margin-bottom: 0px;
  @media ${device.tablet} {
    font-size: ${fontSize.headingMobile};
  }
`;

export const Btn = styled(Button)`
  @media ${device.tablet} {
    margin-top: 25px;
  }
`;
