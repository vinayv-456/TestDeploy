/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopUpModal from '../../../Common/PopUpModal/Modal.view';
import { ManualScale } from '../../../UpsertPane/ScaleYAxis/ScaleYAxis.view';
import { Button } from '../../../UpsertPane/UpsertPane.style';
import { ButtonContainer, Header } from './EditScaleYAxis.style';
import { Creators as KPVChartsCreators } from '../../Store';
import { Creators as UpsertPaneCreators } from '../../../UpsertPane/Store';

const EditScaleYAxis = ({ setShowScaleYAxis, paneNo }) => {
  const { scaleYaxis, scaleYAxisRange } = useSelector((state) => state.upsertPaneData);
  const dispatch = useDispatch();
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleApply = () => {
    dispatch(
      KPVChartsCreators.editPaneData({
        index: paneNo,
        key: 'scaleYaxis',
        value: scaleYaxis
      })
    );
    dispatch(
      KPVChartsCreators.editPaneData({
        index: paneNo,
        key: 'scaleYAxisRange',
        value: [...scaleYAxisRange]
      })
    );
    setShowScaleYAxis(false);
    dispatch(UpsertPaneCreators.resetUpsertPaneData());
  };
  return (
    <PopUpModal closeModalHandler={setShowScaleYAxis} width='auto'>
      <Header>
        <span>{localeStrings['Scale Y-Axis'] || 'Scale Y-Axis'}</span>
      </Header>
      <ManualScale isModal={true} />
      <ButtonContainer>
        <Button onClick={() => setShowScaleYAxis(false)}>{localeStrings.cancel || 'Cancel'}</Button>
        <Button className='dark' onClick={handleApply}>
          {localeStrings.apply || 'Apply'}
        </Button>
      </ButtonContainer>
    </PopUpModal>
  );
};

export default EditScaleYAxis;
