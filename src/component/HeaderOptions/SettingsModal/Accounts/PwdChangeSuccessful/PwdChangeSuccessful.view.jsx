import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fontFamily } from '../../../../../constants';
import ButtonComp from '../../../../Common/Button/Button.view';
import PopUpModal from '../../../../Common/PopUpModal/Modal.view';
import SuccessIcon from '../../../../../assets/icons/login/Success Toast Message.svg';
import DynamicSVGIcon from '../../../../Common/DynamicSVGIcon';
import { Creators as LayoutCreators } from '../../../../../views/Layout/store';

const Text = styled.div`
  color: #000000;
  font: 2rem ${fontFamily.circularMedium};
  margin-bottom: 5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & .dynamicSVGIcon {
    margin: 6rem 0px 2.5rem;
  }
`;

const PwdChangeSuccessful = () => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(LayoutCreators.settingsActiveMenu('Accounts'));
    dispatch(LayoutCreators.toggleHeaderOption('changePwd'));
  };

  const closeModal = () => {
    dispatch(LayoutCreators.toggleHeaderOption('changePwd'));
  };

  return (
    <PopUpModal width='35rem' closeModalHandler={closeModal}>
      <FlexContainer>
        <DynamicSVGIcon iconUrl={SuccessIcon} width='5rem' />
        <Text>Successful Password Reset!</Text>
        <ButtonComp dark={true} onClick={handleBack}>
          Go Back
        </ButtonComp>
      </FlexContainer>
    </PopUpModal>
  );
};

export default PwdChangeSuccessful;
