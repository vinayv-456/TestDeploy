/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useClickOutside from '../../../shared/hooks/useClickOutside';
import { ModalContainer, ModalContentDiv, ModalContentText } from './DropDownModal.style';

function DropDownModal({ style = {}, data = [], setModalIsVisibal, kababIconRef = false, handleClick }) {
  const modalRef = useRef();
  const { localeStrings } = useSelector((state) => state.localeStrings);

  useClickOutside(modalRef, () => setModalIsVisibal(false), kababIconRef);

  return (
    <ModalContainer ref={modalRef} style={style}>
      {data.length > 0 &&
        data.map((item, i) => (
          <ModalContentDiv key={i} onClick={() => handleClick(item.role)}>
            <ModalContentText>{localeStrings[item.label] || item.label}</ModalContentText>
          </ModalContentDiv>
        ))}
    </ModalContainer>
  );
}

export default DropDownModal;
