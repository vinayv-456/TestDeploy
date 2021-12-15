import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonComp from '../../../../Common/Button/Button.view';
import Input from '../../../../Common/Input/Input';
import PopUpModal from '../../../../Common/PopUpModal/Modal.view';
import { ButtonContainer, Header } from './ChangePwdModal.style';
import { Creators as LayoutCreators } from '../../../../../views/Layout/store';
import PwdChangeSuccessful from '../PwdChangeSuccessful/PwdChangeSuccessful.view';

const ChangePwdModal = () => {
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [reNewPwd, setReNewPwd] = useState('');
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(LayoutCreators.settingsActiveMenu('Accounts'));
    dispatch(LayoutCreators.toggleHeaderOption('changePwd'));
  };
  const [pwdChangeSuccessful, setPwdChangeSuccessful] = useState(false);
  const handleSave = () => {
    if (newPwd && currentPwd && newPwd === reNewPwd) {
      setPwdChangeSuccessful(true);
      // dispatch(LayoutCreators.settingsActiveMenu('Accounts'));
      // dispatch(LayoutCreators.toggleHeaderOption('changePwd'));
    }
  };

  const closeModal = () => {
    dispatch(LayoutCreators.toggleHeaderOption('changePwd'));
  };

  return (
    <>
      {!pwdChangeSuccessful ? (
        <PopUpModal closeModalHandler={closeModal}>
          <Header>Change Password</Header>
          <Input
            placeholder='Current Password'
            value={currentPwd}
            setValue={setCurrentPwd}
            type='password'
            style={{ marginBottom: '3rem' }}
          />
          <Input
            placeholder='New Password'
            value={newPwd}
            setValue={setNewPwd}
            type='password'
            style={{ marginBottom: '1rem' }}
          />
          <Input
            placeholder='Re-enter New Password'
            value={reNewPwd}
            setValue={setReNewPwd}
            type='password'
            style={{ marginBottom: '3rem' }}
          />
          <ButtonContainer>
            <ButtonComp style={{ marginRight: '2rem' }} onClick={handleCancel}>
              Cancel
            </ButtonComp>
            <ButtonComp dark={true} onClick={handleSave}>
              Save Changes
            </ButtonComp>
          </ButtonContainer>
        </PopUpModal>
      ) : (
        <PwdChangeSuccessful />
      )}
    </>
  );
};

export default ChangePwdModal;
