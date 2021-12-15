/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useClickOutside from '../../../../shared/hooks/useClickOutside';
import DynamicSVGIcon from '../../DynamicSVGIcon';
import { ItemContainer, ItemText, ModalContainer } from './styles';

const DropDownModal = ({ style = {}, data, closeModal, handleClick, children }) => {
  const modalRef = useRef();

  useClickOutside(modalRef, closeModal);

  return (
    <ModalContainer ref={modalRef} style={style}>
      {children}
      {data.map((ele) => (
        <ItemContainer onClick={() => handleClick(ele.value)}>
          {ele.labelIcon && (
            <div style={{ position: 'absolute', left: '0px' }}>
              <DynamicSVGIcon iconUrl={ele.labelIcon} width='2rem' />
            </div>
          )}
          <ItemText>{ele.label}</ItemText>
          {ele.icon && (
            <div style={{ position: 'absolute', right: '0px' }}>
              <DynamicSVGIcon iconUrl={ele.icon} width='3.5rem' />
            </div>
          )}
        </ItemContainer>
      ))}
    </ModalContainer>
  );
};

export default DropDownModal;
