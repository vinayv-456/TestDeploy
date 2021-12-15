import styled from 'styled-components';
import { fontFamily } from '../../../../../constants';
import { Header as HeaderTemp, NormalContent as NormalContentTemp } from '../../../../Common/CommonStyles';

export const Header = styled(HeaderTemp)`
  font-size: '2.5rem';
`;

export const NormalContent = styled(NormalContentTemp)`
  margin: 1rem 0rem 2rem;
`;

export const HighlightContent = styled.span`
  color: #2a2a2a;
  font: 2rem ${fontFamily.circularMedium};
`;

export const Container = styled.div`
  position: relative;
  padding-left: 20%;
  margin-bottom: 3rem;

  &.hightlight {
    margin-top: 8rem;
    padding-left: 40%;
    margin-bottom: 6rem;

    & > div {
      margin: 4rem 0rem;
      & > div {
        margin-top: 4rem;
      }
    }
  }
`;
