import styled from 'styled-components';
import { fontFamily } from '../../../constants';

export const UserDetails = styled.div`
  color: #4a4a4a;
  font-size: 1.4rem;
  font-family: ${fontFamily.circularBook};
  margin-bottom: 1.2rem;
`;

export const UserName = styled.div`
  color: #4a4a4a;
  font-size: 1.8rem;
  font-family: ${fontFamily.circularMedium};
  margin-bottom: 1.2rem;
`;

export const AvatarIconContainer = styled.div`
  margin-right: 1.5rem;
  & span {
    font-size: 2.5rem;
  }
`;
