import styled from 'styled-components';
import { device } from '../../constants';

export const CalendarContainer = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  max-width: 30rem;
  margin-left: 1rem;

  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const CalendarWeekContainer = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 4.4rem;
  display: inline-block;
  background-color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
`;

export const CalendarHeaderContainer = styled.div`
  background-color: light-blue;
  text-align: center;
  min-height: 2rem;
  line-height: 2rem;
  font-weight: 700;
  max-height: 5rem;
  display: flex;
`;

export const DateDisplayContainer = styled.div`
  width: 80%;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CalendarNextButton = styled.div`
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CalendarPreviousButton = styled.div`
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;
