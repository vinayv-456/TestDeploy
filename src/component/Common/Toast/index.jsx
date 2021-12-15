import React, { useEffect, useRef, memo } from 'react';
import { ContentContainer, Image, Header, Message, ToastContainer } from './Toast.style';
import { errorToast, successToast } from '../../../assets/icons';

const Toast = ({ message, header, fn, style = { bottom: 30 } }) => {
  const toastRef = useRef();

  useEffect(() => {
    toastRef.current.onanimationend = () => {
      fn();
    };

    return () => {
      if (message) {
        fn();
      }
    };
  });

  return (
    <ToastContainer style={style} ref={toastRef} className='show'>
      {header === 'Error' ? (
        <Image src={errorToast} alt='error' />
      ) : (
        header === 'Success' && <Image src={successToast} alt='success' />
      )}
      <ContentContainer>
        <Header>{header}</Header>
        <Message>{message}</Message>
      </ContentContainer>
    </ToastContainer>
  );
};
export default memo(Toast);
