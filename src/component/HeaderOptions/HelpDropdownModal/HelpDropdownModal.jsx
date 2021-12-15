/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PointedDropdownModal from '../../Common/DropDownModal/PointedDropdownModal';
import { Creators as LayoutCreators } from '../../../views/Layout/store';

const HelpDropdown = () => {
  const { helpDropdown } = useSelector((state) => state.home);
  const history = useHistory();
  const helpData = [
    { label: 'tutorials', value: 'tutorials' },
    { label: 'FAQs', value: 'FAQs' },
    { label: 'send feedback', value: 'sendFeedback' },
    { label: 'about', value: 'about' }
  ];

  const dispatch = useDispatch();

  const closeModal = () => {
    if (helpDropdown) {
      dispatch(LayoutCreators.toggleHeaderOption('helpDropdown'));
    }
  };

  const handleClick = (value) => {
    closeModal();
    switch (value) {
      case 'FAQs':
        history.push('/home/FAQs');
        break;
      case 'tutorials':
        history.push('/home/tutorials');
        break;
      default:
        break;
    }
  };

  return <PointedDropdownModal data={helpData} closeModal={closeModal} handleClick={handleClick} />;
};

export default HelpDropdown;
