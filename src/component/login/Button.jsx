import styled from 'styled-components';
import { device, fontFamily, fontSize } from '../../constants';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.customTheme.loginprimary};
  margin-top: ${(props) => props.marginTop || '4.5rem'};
  width: 80%;
  height: 6rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 19px ${({ theme }) => theme.shadowContrast};
  border-radius: 1rem;
  border-width: 0rem;
  color: ${({ theme }) => theme.contrast.tertiary};
  font-size: ${fontSize.circularMedium};
  font-family: ${fontFamily.circularMedium};
  cursor: pointer;
  @media ${device.tablet} {
    height: 45px;
    box-shadow: none;
    font-size: ${fontSize.circularMediumMobile};
  }
`;
