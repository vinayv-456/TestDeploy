import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Heading, BtnWrapper, Button } from '../../Common/PopUpModal/Modal.style';
import PopUpModal from '../../Common/PopUpModal/Modal.view';

import { Input, Label, LabelWrapper } from './SaveShortList.style';

const SaveShortListModal = (props) => {
  const { setShowSaveModal } = props;
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const closeModal = () => {
    setShowSaveModal(false);
  };

  return (
    <PopUpModal closeModalHandler={setShowSaveModal}>
      <Heading>{localeStrings.saveShortlist || 'Save Shortlist'}</Heading>
      <Input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
      <LabelWrapper>
        <Label>{localeStrings.sharedShortlist || 'Shared shortlist'}</Label>
        <input type='radio' name='Shared' />
      </LabelWrapper>
      <BtnWrapper>
        <Button type='button' onClick={closeModal}>
          {localeStrings.cancel || 'Cancel'}
        </Button>
        <Button type='submit' className='dark'>
          {localeStrings.save || 'Save'}
        </Button>
      </BtnWrapper>
    </PopUpModal>
  );
};
export default SaveShortListModal;
