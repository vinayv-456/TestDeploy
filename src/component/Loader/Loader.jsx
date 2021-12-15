import React from 'react';
import { ReactComponent as LoaderSVG } from '../../assets/icons/loader.svg';
import { Container } from './Loader.style';

const Loader = () => (
  <Container>
    <LoaderSVG />
  </Container>
);

export default Loader;
