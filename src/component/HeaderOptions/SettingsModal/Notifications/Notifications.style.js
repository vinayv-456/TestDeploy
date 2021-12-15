import styled from 'styled-components';
import { fontFamily } from '../../../../constants';

export const Container = styled.div`
  width: 95%;
`;

export const Header = styled.div`
  color: #000000;
  font: 1.8rem ${fontFamily.circularBold};
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export const Label = styled.div`
  /* margin-top: 2.5rem;
  color: #000000;
  font: 1.6rem ${fontFamily.circularMedium}; */
`;

export const ItemContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  font: 1.6rem ${fontFamily.circularMedium};
`;
