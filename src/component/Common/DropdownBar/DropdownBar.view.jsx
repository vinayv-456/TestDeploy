import React from 'react';
import DynamicSVGIcon from '../DynamicSVGIcon';
import { DropDownArrow } from '../../../assets/icons';
import { DpButton, DropdownBar } from './Dropdown.style';

const DropdownBarComp = ({ children }) => (
  <DropdownBar>
    {children}
    <DpButton>
      <DynamicSVGIcon iconUrl={DropDownArrow} width='2.4rem' />
    </DpButton>
  </DropdownBar>
);

export default DropdownBarComp;
