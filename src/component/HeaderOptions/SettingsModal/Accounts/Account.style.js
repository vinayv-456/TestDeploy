import styled from 'styled-components';
import { fontFamily } from '../../../../constants';

export const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  width: 100%;
`;

export const AvatarIconContainer = styled.div`
  margin-right: 4rem;
  & span {
    font-size: 5.5rem;
  }
`;

export const HeadingText = styled.div`
  color: #4a4a4a;
  font: 3rem ${fontFamily.circularMedium};
`;

export const ContentContainer = styled.div`
  width: 65%;
  /* background-color: yellow; */
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0rem 4rem;
  justify-content: space-between;
  align-items: center;
`;

export const UserDetailFeild = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 17.5rem;
  margin-bottom: 3rem;
`;

export const Anchor = styled.div`
  color: #4362fc;
  font: 2rem ${fontFamily.circularBold};
  text-decoration: underline;
  text-transform: capitalize;
  cursor: pointer;
`;
