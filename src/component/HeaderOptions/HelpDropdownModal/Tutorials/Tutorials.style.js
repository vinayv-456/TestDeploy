import styled from 'styled-components';
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

export const BodyContainer = styled.div`
  /* width: 80%; */
  padding-right: 20%;
  margin-left: 5rem;
  height: calc(100% - 7rem);
  /* display: flex; */
  flex: 1;
  overflow-y: scroll;
`;

export const Container = styled.div`
  /* background-color: red; */
  height: 100%;
`;
