/* eslint-disable max-len */
import styled from 'styled-components';
import { fontSize, fontFamily, device } from '../../../constants';

export const Container = styled.div`
  /* width: 50vw; */
  flex: 1;
  position: relative;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  transition: background-image 0.5s ease;
  width: 50vw;
  height: 100vh;
  background-repeat: no-repeat;
  @media ${device.tablet} {
    display: none;
  }
`;

export const BrandingDescription = styled.div`
  right: 0rem;
  margin-bottom: 10rem;
  margin-left: 4rem;
  margin-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandingContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 1rem;
  width: 100%;
`;
export const Arrow = styled.div`
  cursor: pointer;
  position: absolute;
  left: ${(props) => props.left && `${props.left}px`};
  right: ${(props) => props.right && `${props.right}px`};
  bottom: 19rem;
  z-index: 1;
`;

export const Description = styled.div`
  width: 70%;
`;

export const Title = styled.div`
  font-size: ${fontSize.companyTitle};
  font-family: ${fontFamily.circularBold};
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.contrast.tertiary};
`;

export const SubTitle = styled.div`
  font-size: ${fontSize.companyDesc};
  font-family: ${fontFamily.circularBook};
  color: ${({ theme }) => theme.contrast.tertiary};
  line-height: 22px;
`;

export const ImageNoHelper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  margin-bottom: 5.7rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImageBubble = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.contrast.tertiary};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;
export const OverlayContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-size: cover;
`;
