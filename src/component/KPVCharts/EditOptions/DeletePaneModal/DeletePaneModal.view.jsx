import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as KPVChartsCreators } from '../../Store';
import PopUpModal from '../../../Common/PopUpModal/Modal.view';
import { BtnWrapper, Button, ContentText, Heading } from './DeletePaneModal.style';

const DeletePaneModal = ({ closeModalHandler, paneNo }) => {
  const dispatch = useDispatch();
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleDelete = () => {
    dispatch(KPVChartsCreators.removePane(paneNo));
    closeModalHandler(false);
  };
  return (
    <PopUpModal closeModalHandler={closeModalHandler}>
      <Heading>{localeStrings.Delete || 'Delete'}</Heading>
      <ContentText>{localeStrings.DeleteConfirmation || 'Do you really want to Delete this pane?'}</ContentText>
      <BtnWrapper>
        <Button onClick={() => closeModalHandler(false)}>{localeStrings.cancel || 'Cancel'}</Button>
        <Button onClick={handleDelete} className='dark'>
          {localeStrings.Delete || 'Delete'}
        </Button>
      </BtnWrapper>
    </PopUpModal>
  );
};

export default DeletePaneModal;
