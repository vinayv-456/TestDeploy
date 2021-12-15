import styled from 'styled-components';
import { fontFamily } from '../../../constants';
import { FlexCenter } from '../UpsertPane.style';

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.aux.darkSecondary};
`;

export const DividerContainer = styled.div`
  display: none;
  &:not(:first-child) {
    height: 4.5rem;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.div`
  width: ${({ width }) => width || 2.5}rem;
  margin: 2px 5px;
  margin-right: 15px;
  transform: rotate(${({ rotate }) => rotate}deg);

  & * {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 1.5rem;
  & > div {
    font-size: 1.8rem;
    font-family: ${fontFamily.circularBook};
  }
`;

export const InnerTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const ToogleDiv = styled(FlexCenter)`
  margin-right: -1.6rem;
  & > span {
    font-size: 1.6rem;
  }
  & path:not(:first-child) {
    fill: ${({ theme }) => theme.contrast.primary} !important;
  }
`;
