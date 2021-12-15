/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  NotificationContainer,
  NotificationBox,
  NotifyMsg,
  CancelIcon,
  WarningContainer,
  Image,
  CancelIconMob,
  Icon,
  MarqueeContent
} from './Notification.style';
// import { localString } from '../../../localization/localString';
import { close, warning } from '../../../assets/icons';
import { Creators as LoginCreators } from '../store';
import { ImgOverlay } from '../login/Login.style';
import { useWindowSize } from '../../../shared/hooks/useWindowResize';

const Notification = ({ bgImg }) => {
  // const { language } = useSelector((state) => state.configData);
  // const string = localString[language];
  const dispatch = useDispatch();
  const { showNotification, notificationMsg } = useSelector((state) => state.loginData);
  const [width] = useWindowSize();
  const [view, setView] = useState('web');
  const [scrollWidth, setScrollWidth] = useState(0);

  const notificationHandler = () => {
    dispatch(LoginCreators.setShowNotification({ showNotification: false }));
  };

  useEffect(() => {
    if (notificationMsg) {
      dispatch(LoginCreators.setShowNotification({ showNotification: true }));
      setScrollWidth(document.getElementById('marquee-content')?.scrollWidth);
    }
  }, [notificationMsg]);

  useEffect(() => {
    dispatch(LoginCreators.notificationData({ companyId: 1023 }));
  }, []);

  useEffect(() => {
    setScrollWidth(document.getElementById('marquee-content')?.scrollWidth);
  }, [scrollWidth]);

  function createMarkup() {
    // const content = [
    //   '<li> <span class="font">Dear user, we will be undertaking maintenance activities between</span><span class="bold font">20/05/21, 09:00AM IST</span> <span class="font">to</span> <span class="bold font">22/05/21, 09:00AM IST</span> </li>',
    //   '<li> <span class="font">We are updating some of the features, We regret the inconvenience caused.</span> </li>'
    // ];
    // notificationMsg;

    let htmlMarkup =
      '<html> <head> <style>.font{margin: 0px; padding: 0px; font-size: 2.2rem;}.bold{font-family: "Circular Std Bold"; color: #f8f8f8; margin-left: 5px; margin-right: 5px;}@media only screen and (max-width: 768px){.font{font-size: 14px;}}</style> </head> <body>';
    if (notificationMsg) {
      notificationMsg.forEach((ele) => {
        htmlMarkup += ele;
      });
    }
    htmlMarkup += '</body></html>';
    return {
      __html: htmlMarkup
    };
  }

  useEffect(() => {
    if (width >= 1024) {
      setView('web');
    }

    if (width <= 768) {
      setView('mobile');
    }
  }, [width]);

  return (
    <div>
      {view === 'web' ? (
        <div>
          <ImgOverlay src={bgImg} />
          {notificationMsg && (
            <NotificationContainer notify={showNotification}>
              <WarningContainer>
                <Image src={warning} />
              </WarningContainer>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center'
                }}
              >
                <div>
                  <NotifyMsg id='marquee'>
                    <MarqueeContent
                      scrollWidth={scrollWidth}
                      id='marquee-content'
                      className={scrollWidth > (90 * width) / 100 && 'scroll'}
                      dangerouslySetInnerHTML={createMarkup()}
                    />
                  </NotifyMsg>
                </div>
                <CancelIcon onClick={notificationHandler}>
                  <Icon src={close} alt='' width='2.2rem' />
                </CancelIcon>
              </div>
            </NotificationContainer>
          )}
        </div>
      ) : (
        <NotificationBox notify={showNotification} bgImg={bgImg}>
          <ImgOverlay src={bgImg} />
          {notificationMsg && (
            <NotificationContainer notify={showNotification}>
              <CancelIconMob onClick={notificationHandler}>
                <Icon src={close} alt='' />
              </CancelIconMob>
              <WarningContainer>
                <Image src={warning} />
              </WarningContainer>
              <NotifyMsg dangerouslySetInnerHTML={createMarkup()} />
            </NotificationContainer>
          )}
        </NotificationBox>
      )}
    </div>
  );
};

export default Notification;
