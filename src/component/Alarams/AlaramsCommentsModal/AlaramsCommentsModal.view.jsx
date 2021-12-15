/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alaramComments } from '../../../constants/sampleData';
import ButtonComp from '../../Common/Button/Button.view';
import { Header } from '../../Common/CommonStyles';
import PopUpModal from '../../Common/PopUpModal/Modal.view';
import { DetailsContainer, DetailSection, ContentText } from '../DetailedAlaramModal/DetailedAlaramModal.style';
import { Creators as AlaramCreators } from '../Store';
import { ButtonContainer, CommentInputContainer } from './AlaramsCommentsModal.style';
import CommentItem from './CommentItem/CommentItem.view';

const AlaramsCommentsModal = () => {
  const dispatch = useDispatch();

  const closeCommentsModal = () => {
    dispatch(AlaramCreators.closeModal());
  };

  const { id, detailedAlaramData, commentsData } = useSelector((state) => state.alarams);

  useEffect(() => {
    dispatch(AlaramCreators.setCommentsData(alaramComments[id]));
  }, []);

  const columnsPart1 = [
    { label: 'Machine Name', value: 'machines' },
    { label: 'Start Time', value: 'startTime' },
    { label: 'End Time', value: 'endTime' }
  ];
  const columnsPart2 = [
    { label: 'Description', value: 'description' },
    { label: 'Duration', value: 'setDuration' }
  ];
  const columns = [columnsPart1, columnsPart2];

  const getValue = (label) => {
    if (label === 'description') return commentsData && commentsData[label];
    return detailedAlaramData && detailedAlaramData[label];
  };

  return (
    <PopUpModal closeModalHandler={closeCommentsModal} width='60vw'>
      <DetailsContainer>
        {columns.map((part) => (
          <DetailSection>
            {part.map((col) => (
              <DetailsContainer width='55rem'>
                <ContentText className='heading'>{col.label}</ContentText>
                <span>:</span>
                <ContentText className='ml'>{getValue(col.value)}</ContentText>
              </DetailsContainer>
            ))}
          </DetailSection>
        ))}
      </DetailsContainer>
      <CommentInputContainer rows={5} placeholder='Type your comment here' />
      <ButtonContainer>
        <ButtonComp dark={true}>Add</ButtonComp>
      </ButtonContainer>
      <Header style={{ marginBottom: '3rem' }}>Comments</Header>
      {commentsData?.comments?.map((e) => (
        <CommentItem item={e} />
      ))}
    </PopUpModal>
  );
};

export default AlaramsCommentsModal;
