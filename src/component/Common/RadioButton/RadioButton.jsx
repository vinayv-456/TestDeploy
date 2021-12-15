/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Radio = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 2px solid #d2d2d2;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.contrast.whiteNgray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Active = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.black};
`;

const Radiobutton = ({ active = false, onClick, margin }) => (
  <Radio style={{ margin }} onClick={() => onClick()}>
    {active && <Active />}
  </Radio>
);

export default Radiobutton;
