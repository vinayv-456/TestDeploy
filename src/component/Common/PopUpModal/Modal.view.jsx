import React, { useRef } from 'react';
import useClickOutside from '../../../shared/hooks/useClickOutside';

import { Modal, ModalContent } from './Modal.style';

const PopUpModal = (props) => {
  const { preventClose, style, children, closeModalHandler, width } = props;
  const modalRef = useRef();
  useClickOutside(modalRef, () => closeModalHandler(false));
  return (
    <Modal>
      <ModalContent style={style} width={width} ref={modalRef}>
        {children}
      </ModalContent>
    </Modal>
  );
};

export default PopUpModal;
