import React from 'react';
import DynamicSVGIcon from '../DynamicSVGIcon';
import { Icon, ItemContainer, ItemText } from './Item.style';

const Item = ({ name, icon, handleClick, activeMenu, style }) => (
  <ItemContainer style={style} onClick={handleClick} className={activeMenu === name ? 'active' : ''}>
    <Icon>
      <DynamicSVGIcon iconUrl={icon} />
    </Icon>
    <ItemText>{name}</ItemText>
  </ItemContainer>
);

export default Item;
