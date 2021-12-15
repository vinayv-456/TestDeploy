import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../constants/colors';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.core.secondary};
  /* box-shadow: ${shadow.out}; */
  /* border-radius: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 3rem;
  font-family: 'Circular Std Medium';
  opacity: 0.7;
`;

const Card = ({ children }) => (
  <Container>
    <Text>Coming Soon ...</Text>
  </Container>
);

export default Card;
