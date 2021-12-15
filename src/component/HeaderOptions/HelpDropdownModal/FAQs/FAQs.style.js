import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../../constants';
import {
  HeaderContainer as HeaderContainerTemp,
  Header as HeaderTemp,
  BodyContainer as BodyContainerTemp
} from '../../../Common/CommonStyles';

export const HeaderContainer = styled(HeaderContainerTemp)`
  & .dynamicSVGIcon {
    transform: rotate(180deg);
    & * {
      fill: ${({ theme }) => theme.contrast.primary} !important;
    }
  }
`;

export const BodyContainer = styled(BodyContainerTemp)`
  margin-top: 15rem;
`;

export const Header = styled(HeaderTemp)``;

export const TableOfContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  /* background-color: red; */
`;

export const QuestionsContainer = styled.div`
  width: 75%;
  position: relative;
  /* background-color: red; */
  & > div + div {
    margin-top: 3rem;
  }
`;

export const ItemText = styled.div`
  color: #474747;
  font: 1.8rem ${fontFamily.circularMedium};
  margin-left: 1rem;
  margin-top: 2.2rem;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Icon = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
`;

export const SubHeading = styled(HeaderTemp)`
  font-size: 2rem;
  cursor: pointer;
  color: #000000;
  margin-bottom: 0.5rem;
  margin-left: 6rem;
  display: flex;
  align-items: center;
  position: relative;
  & .dynamicSVGIcon {
    position: absolute;
    left: -4rem;
    top: 0px;
  }
`;

export const ContentText = styled.div`
  font: 2rem ${fontFamily.circularBook};
  color: #474747;
  margin-top: 4rem;
  margin-left: 6rem;
`;

export const CollapsableContainer = styled.div`
  &::after {
    content: '';
    display: block;
    margin-top: 3rem;
    border-bottom: 1px solid black;
  }
`;

export const MainHeading = styled.span`
  font: 5rem ${fontFamily.circularMedium};
  color: #000000;
  position: absolute;
  top: -11rem;
`;
