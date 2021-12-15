/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
import { React } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import addIcon from '../../../assets/icons/Filter/plus.svg';
import removeIcon from '../../../assets/icons/Filter/minus.svg';
import DynamicSVGIcon from '../DynamicSVGIcon';
import { THEMES } from '../../../constants';

const RectangularAddContainer = styled.div`
  padding: 0.6rem;
  background-color: ${({ theme, themeMode }) =>
    themeMode === THEMES.LIGHT ? theme.core.pureSecondary : theme.lightGreyBg};
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme, themeMode }) => (themeMode === THEMES.LIGHT ? theme.table.hightlight : theme.aux.secondary)};
  & * {
    fill: ${({ theme, themeMode }) => (themeMode === THEMES.LIGHT ? theme.contrast.secondary : 'black')} !important;
  }

  &.active {
    background-color: ${({ theme }) => '#000000'};
    border: 0px;
    & * {
      fill: white !important;
    }
  }
`;

const RectangularAdd = ({ width, active }) => {
  const { theme } = useSelector((state) => state.configData);
  return (
    <RectangularAddContainer className={active && 'active'} themeMode={theme}>
      {!active ? (
        <DynamicSVGIcon iconUrl={addIcon} width={width || '1.1rem'} />
      ) : (
        <DynamicSVGIcon iconUrl={removeIcon} width={width || '1.1rem'} />
      )}
    </RectangularAddContainer>
  );
};

export default RectangularAdd;
