import styled from 'styled-components';
import { fontFamily, fontSize } from '../../constants';

export const AlignedDiv = styled.div`
  display: flex;
  align-items: ${({ al }) => al || 'center'};
  justify-content: ${({ jc }) => jc || 'center'};
`;

export const CircularDiv = styled(AlignedDiv)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: #ffffff;
`;

export const DropdownBar = styled.div`
  width: 100%;
  height: 4rem;
  font-size: ${fontSize.text};
  border: 1px solid;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  outline: none;
  border: 0px;
  border-radius: 1rem;
  color: ${({ theme }) => theme.contrast.darkSecondary};
  font-family: ${fontFamily.circularMedium};
  background-color: ${({ theme }) => theme.core.secondary};
  z-index: 2;
  box-shadow: inset -3px -3px 5px ${({ theme }) => theme.shadowContrast},
    inset 3px 3px 10px ${({ theme }) => theme.shadow};

  &.active {
    /* box-shadow: none; */
    box-shadow: inset 3px 3px 10px ${({ theme }) => theme.shadow};
  }
`;

export const HeaderContainer = styled.div`
  width: calc(100% - 4rem);
  margin: 0rem 2rem;
  padding: 2.5rem 2rem 1.2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted #707070;
`;

export const Header = styled.div`
  color: '#4A4A4A';
  font: 2.2rem ${fontFamily.circularMedium};
`;

export const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0rem 2rem;
`;

export const NormalContent = styled.div`
  color: #474747;
  font: 2rem ${fontFamily.circularBook};
`;
