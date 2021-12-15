import styled from 'styled-components';
import { fontFamily, fontSize } from '../../../../constants';

export const PlotChartContainer = styled.div`
  width: 60%;
`;

export const DAQContainer = styled.div`
  display: flex;
`;

export const Heading = styled.div`
  font-size: ${fontSize.title};
  font-family: ${fontFamily.circularMedium};
  color: ${({ theme }) => theme.contrast.darkQuaternary};
  margin-bottom: 2rem;
`;

export const TableHeading = styled(Heading)`
  margin-bottom: 1rem;
`;

export const Properties = styled.div`
  font-size: ${fontSize.title};
  color: ${({ theme }) => theme.contrast.darkSecondary};
  flex: 1;
  font-family: ${fontFamily.circularBook};
  margin-bottom: 1rem;
`;

export const Values = styled(Properties)`
  color: ${({ theme }) => theme.contrast.darkQuaternary};
  display: inline;
  margin-left: 2rem;
`;
