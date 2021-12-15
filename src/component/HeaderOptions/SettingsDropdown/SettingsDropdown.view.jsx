/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PointedDropdownModal from '../../Common/DropDownModal/PointedDropdownModal';
import { Creators as LayoutCreators } from '../../../views/Layout/store';
import ToggleOn from '../../../assets/icons/KPV/Toggle on.svg';
import ToggleOff from '../../../assets/icons/KPV/toggle off.svg';
import { THEMES } from '../../../constants';
import { Creators as configCreators } from '../../../config/action';

const SettingsDropdown = () => {
  const [toggleIcon, setToggleIcon] = useState(ToggleOff);
  const { theme } = useSelector((state) => state.configData);
  const { settingsDropdown } = useSelector((state) => state.home);

  const settingData = [
    { label: 'Dark Mode', value: 'darkMode', icon: toggleIcon },
    { label: 'Language', value: 'language' },
    { label: 'User Settings', value: 'userSettings' }
  ];

  const dispatch = useDispatch();

  const closeModal = () => {
    if (settingsDropdown) {
      dispatch(LayoutCreators.toggleHeaderOption('settingsDropdown'));
    }
  };

  const handleClick = (value) => {
    let newTheme;
    switch (value) {
      case 'darkMode':
        newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        // console.log('newTheme', newTheme);
        if (newTheme === THEMES.LIGHT) {
          setToggleIcon(ToggleOff);
        } else {
          setToggleIcon(ToggleOn);
        }
        dispatch(configCreators.setThemeColors({ company: 'wd', theme: newTheme }));
        dispatch(configCreators.setTheme(newTheme));
        break;

      case 'userSettings':
        dispatch(LayoutCreators.toggleHeaderOption('settingsDropdown'));
        dispatch(LayoutCreators.settingsActiveMenu('General'));
        break;

      default:
        break;
    }
  };

  return <PointedDropdownModal data={settingData} closeModal={closeModal} handleClick={handleClick} />;
};

export default SettingsDropdown;
