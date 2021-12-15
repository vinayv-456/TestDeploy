/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DropDownArrow } from '../../../assets/icons';
import { BtnWrapper, Button } from '../../Common/PopUpModal/Modal.style';
import { Heading } from './ChartOptions.style';
import PopUpModal from '../../Common/PopUpModal/Modal.view';
import {
  ChartOptContainer,
  ChartTypeText,
  DropDownButton,
  DropDownContainer,
  DropdownImage,
  ItemText
} from '../../ResultView/PlotOptionsModal/PlotOptionsModal.style';
import { Creators as UpsertPaneCreators } from '../../UpsertPane/Store';
import { chartOptions } from '../../../constants/sampleData';
import DynamicSVGIcon from '../../Common/DynamicSVGIcon';

const ChartOptions = ({ setShowChartOpts }) => {
  const [showChartTypeDropdown, setShowChartTypeDropdown] = useState(false);
  const [selectedChart, SetSelectedChart] = useState(null);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    setShowChartOpts(false);
  };

  const handleCharts = () => {
    dispatch(
      UpsertPaneCreators.setUpsertPaneData({
        key: 'chartType',
        value: selectedChart.value
      })
    );
    history.push('kpv-charting/add-pane');
  };

  return (
    <PopUpModal width='20%' closeModalHandler={setShowChartOpts}>
      <Heading>
        {localeStrings.Add || localeStrings.Pane ? `${localeStrings.Add} ${localeStrings.Pane}` : 'Add Pane'}
      </Heading>
      <ChartOptContainer
        onClick={() => {
          setShowChartTypeDropdown(!showChartTypeDropdown);
        }}
      >
        <ChartTypeText className={showChartTypeDropdown ? 'active' : ''}>
          {selectedChart?.label || 'Select Chart Type'}
        </ChartTypeText>
        <DropDownButton>
          <DropdownImage className={showChartTypeDropdown ? 'active' : ''}>
            <DynamicSVGIcon iconUrl={DropDownArrow} width='2rem' />
          </DropdownImage>
        </DropDownButton>
        {showChartTypeDropdown && (
          <DropDownContainer>
            {chartOptions.map((opt, index) => (
              <ItemText key={index} onClick={() => SetSelectedChart(opt)}>
                {opt.label}
              </ItemText>
            ))}
          </DropDownContainer>
        )}
      </ChartOptContainer>
      <BtnWrapper>
        <Button type='button' onClick={closeModal}>
          {localeStrings.cancel || 'Cancel'}
        </Button>
        <Button type='submit' className='dark' onClick={handleCharts}>
          {localeStrings.select || 'Select'}
        </Button>
      </BtnWrapper>
    </PopUpModal>
  );
};

export default ChartOptions;
