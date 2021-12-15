/* eslint-disable max-len */
import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from '../../../shared/utility';

import Overlay from '../../../assets/Images/Slider_img_overlay.png';
// import { localString } from '../../../localization/localString';
import {
  Container,
  BrandingContainer,
  BrandingDescription,
  Arrow,
  Title,
  SubTitle,
  Description,
  ImageNoHelper,
  ImageBubble,
  OverlayContainer
} from './Branding.style';
import { arrowLeft, arrowRight } from '../../../assets/icons';
import { Creators as AuthCreators } from '../../../views/auth/store/action';
import { LANGUAGES } from '../../../constants';

const Branding = () => {
  // const { language } = useSelector((state) => state.configData);
  // const string = localString[language];
  const { carouselData } = useSelector((state) => state.loginData);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (carouselData.length < 1) {
      dispatch(AuthCreators.carouselData({ companyId: '1023', lang: LANGUAGES.ENGLISH }));
    }
  }, []);

  const changeBackground = (trend) => {
    if (trend === 'left') {
      let temp = activeImgIndex;
      if (temp === 0) {
        temp = carouselData.length;
      }
      setActiveImgIndex((temp - 1) % carouselData.length);
    } else {
      setActiveImgIndex((activeImgIndex + 1) % carouselData.length);
    }
  };

  return (
    <Container background={carouselData[activeImgIndex]?.backgroundImage}>
      <BrandingContainer>
        <BrandingDescription>
          <Description>
            <Title>{carouselData[activeImgIndex]?.title}</Title>
            <SubTitle>{carouselData[activeImgIndex]?.description}</SubTitle>
          </Description>
        </BrandingDescription>
      </BrandingContainer>
      <Arrow onClick={() => changeBackground('left')} left={40}>
        <img src={arrowLeft} alt='' width='45px' />
      </Arrow>
      <Arrow onClick={() => changeBackground('right')} right={40}>
        <img src={arrowRight} alt='' width='45px' />
      </Arrow>
      <ImageNoHelper>
        {carouselData.length !== 0 &&
          carouselData.map((ele, key) => <ImageBubble key={uid()} active={key === activeImgIndex} />)}
      </ImageNoHelper>
      <OverlayContainer />
      <OverlayContainer img={Overlay} />
    </Container>
  );
};

export default memo(Branding);
