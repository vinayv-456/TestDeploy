/* eslint-disable max-len */
/* eslint-disable function-paren-newline */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PopUpModal from '../../Common/PopUpModal/Modal.view';
import { DataGraphComponent } from '../../KPVCharts/PaneCard/PaneCard.view';
import { Anchor, Container, ContentText, DetailsContainer, DetailSection, Header } from './DetailedAlaramModal.style';
import { Creators as AlaramCreators } from '../Store';

const DetailedAlaramModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { detailedAlaramData, alaramPlotData } = useSelector((state) => state.alarams);
  const columnsPart1 = [
    { label: 'Machine Name', value: 'machines' },
    { label: 'Set Min. Limit', value: 'setMinLimit' },
    { label: 'Set Max. Limit', value: 'setMaxLimit' }
  ];
  const columnsPart2 = [
    { label: 'Parameters(Alarm)', value: 'parameters' },
    { label: 'Status', value: 'status' },
    { label: 'Duration', value: 'setDuration' }
  ];
  const columns = [columnsPart1, columnsPart2];

  const handleComments = () => {
    dispatch(AlaramCreators.setShowCommentsModal(true));
  };

  const closeModal = () => {
    dispatch(AlaramCreators.closeModal());
  };

  const handleViewAll = () => {
    closeModal();
    history.push('/home/alarams');
  };

  return (
    <PopUpModal width='auto' closeModalHandler={closeModal}>
      <div>
        <Container>
          <Header>{`${detailedAlaramData.machines}, ${detailedAlaramData.parameters}`}</Header>
          <DataGraphComponent
            paneData={{
              data: [alaramPlotData.data],
              xMinDomainProp: alaramPlotData.xMinDomain,
              xMaxDomainProp: alaramPlotData.xMaxDomain,
              labelsData: [
                { [detailedAlaramData.machines]: `${detailedAlaramData.machines}-${detailedAlaramData.parameters}` }
              ]
            }}
          />
        </Container>
        <DetailsContainer>
          {columns.map((part) => (
            <DetailSection>
              {part.map((col) => (
                <DetailsContainer width='40rem'>
                  <ContentText className='heading'>{col.label}</ContentText>
                  <span>:</span>
                  <ContentText className='ml'>{detailedAlaramData[col.value]}</ContentText>
                </DetailsContainer>
              ))}
            </DetailSection>
          ))}
        </DetailsContainer>
        <Anchor onClick={handleViewAll}>View All</Anchor>
        <Anchor onClick={handleComments}>Comments</Anchor>
      </div>
    </PopUpModal>
  );
};

export default DetailedAlaramModal;
