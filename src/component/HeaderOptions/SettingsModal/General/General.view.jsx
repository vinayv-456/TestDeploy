import React from 'react';
import { useSelector } from 'react-redux';
import { DpButton, DropdownBar, FlexContainer, HeaderText, Text } from './General.style';
import DynamicSVGIcon from '../../../Common/DynamicSVGIcon';
import { DropDownArrow } from '../../../../assets/icons';
import { LANGUAGES } from '../../../../constants';

const General = () => {
  const { language } = useSelector((state) => state.configData);
  return (
    <>
      <HeaderText>Themes</HeaderText>
      <FlexContainer>
        <Text>Default</Text>
        <Text>Dark</Text>
      </FlexContainer>
      <HeaderText>Languauge</HeaderText>
      <DropdownBar>
        {Object.keys(LANGUAGES).map((lang) => {
          if (LANGUAGES[lang] === language) {
            return lang.toLowerCase();
          }
          return '';
        })}
        <DpButton>
          <DynamicSVGIcon iconUrl={DropDownArrow} width='2.4rem' />
        </DpButton>
      </DropdownBar>
    </>
  );
};

export default General;
