/* eslint-disable max-len */
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../../constants';

export const Heading = styled.div`
  font-size: ${fontSize.title};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.contrast.darkSecondary};
  font-family: ${fontFamily.circularMedium};
  font-weight: bold;
`;

export const ContentText = styled(Heading)`
  font-weight: normal;
  margin-bottom: 3rem;
  font-size: ${fontSize.text};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline;
  width: 45%;
  height: 4rem;
  font-size: ${fontSize.titleBig};
  box-shadow: -5px -5px 19px ${({ theme }) => theme.shadowContrast}, 3px 3px 10px ${({ theme }) => theme.shadow};
  border-radius: 5px;
  border: 0px;
  text-transform: capitalize;
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.aux.secondary};
  color: ${({ theme }) => theme.contrast.primary};
  &.dark {
    background-color: ${({ theme }) => theme.customTheme.primary};
    color: ${({ theme }) => theme.contrast.tertiary};
  }
`;
