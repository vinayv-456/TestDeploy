import React from 'react';
import { CancelWhite } from '../../../assets/icons';
import PaneCard from '../PaneCard/PaneCard.view';
import { Container, NavIconsContainer, Content, CancelIcon, CancelContainer } from './FullScreenKpvCharting.style';

const FullScreenKpvCharting = ({ setFullScreen }) => {
  const handleClose = () => {
    setFullScreen(false);
  };
  return (
    <Container>
      <NavIconsContainer>
        <CancelContainer onClick={handleClose}>
          <CancelIcon src={CancelWhite} alt='' />
        </CancelContainer>
      </NavIconsContainer>
      <Content>
        <PaneCard />
      </Content>
    </Container>
  );
};
export default FullScreenKpvCharting;
