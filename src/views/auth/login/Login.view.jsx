/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { localString } from '../../../localization/localString';

// components
import { Branding } from '../../../component/index';

// styles
import { LoginFormContainer, Container, ComapanyInfo, Logo, OverlayDiv, ImgOverlay } from './Login.style';

// assets
import Image1 from '../../../assets/Images/Slider_img_1.jpg';
import Overlay from '../../../assets/Images/Slider_img_overlay.png';
import Notification from '../Notification/Notification.view';
import { vistrianLogo } from '../../../assets/icons';
import LoginRoutes from '../../../routes/AuthRoutes';

const Login = () => {
  const { language } = useSelector((state) => state.configData);
  const string = localString[language];
  const { showNotification } = useSelector((state) => state.loginData);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <ImgOverlay src={Image1} />
      <OverlayDiv bgImg={Overlay} />
      <Container>
        <Notification bgImg={Image1} />
        <Branding />
        <LoginFormContainer notify={showNotification} bgImg={Image1}>
          <LoginRoutes />
          <ComapanyInfo>
            <Logo src={vistrianLogo} width='16px' />
            {localeStrings?.brandingTitle || 'Vistrian FactoryLOOK'}
          </ComapanyInfo>
        </LoginFormContainer>
      </Container>
    </div>
  );
};

export default Login;
