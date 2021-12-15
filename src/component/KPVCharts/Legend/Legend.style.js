import styled from 'styled-components';

export const LegendContainer = styled.div`
  width: 24%;
  max-width: 300px;
  height: 100%;
  margin: 0px auto;
  padding-top: 15px;
`;

export const LegendContainerBtm = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  margin-left: 10px;
`;

export const LegendItemContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.aux.darkSecondary};
  width: 100%;
  font-size: 18px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const LegendItemContainerBtm = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0px;
  margin-left: 4rem;
  min-width: 30rem;
`;

export const ColorLabel = styled.div`
  width: 35px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  margin-right: 10px;
`;

export const ColorLabelText = styled.div`
  color: ${({ theme }) => theme.contrast.primary};
  font-size: 1.5rem;
`;
