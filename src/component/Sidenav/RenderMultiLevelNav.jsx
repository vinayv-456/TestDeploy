/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavItem, Title, MainMultiHeader } from './Sidenav.styles';
import DropArrow from '../../assets/icons/layout/dropdownarrow.svg';
import { Image } from '../../views/Layout/Layout.styles';
import { Creators as LayoutCreators } from '../../views/Layout/store';
import DynamicSVGIcon from '../Common/DynamicSVGIcon';

const RenderMultiLevelNav = (props) => {
  const { Name: name, SubMenu: subMenu, Permalink, IsLeaf } = props;

  const dispatch = useDispatch();
  const { activeMultiLevelNav } = useSelector((state) => state.home);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleInnerClick = () => {
    const formatedLink = Permalink.split('/').slice(2).join(' > ');
    dispatch(
      LayoutCreators.setActiveMultiLevelMenu([
        ...activeMultiLevelNav,
        { subMenu, parent: { name, permaLink: formatedLink } }
      ])
    );
  };

  return (
    <>
      {IsLeaf === '0' ? (
        <MainMultiHeader onClick={handleInnerClick}>
          <div style={{ paddingLeft: '8rem' }}>
            <Title>{localeStrings[name] || name}</Title>
          </div>
          <Image>
            <DynamicSVGIcon iconUrl={DropArrow} width='10px' />
          </Image>
        </MainMultiHeader>
      ) : (
        <div>
          <NavItem to={{ pathname: Permalink }} style={{ paddingLeft: '8rem' }}>
            <Title>{localeStrings[name] || name}</Title>
          </NavItem>
        </div>
      )}
    </>
  );
};

export default RenderMultiLevelNav;
