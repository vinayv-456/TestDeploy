/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-lonely-if */
import React, { useState, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DropArrow from '../../assets/icons/layout/dropdownarrow.svg';
import { Icons } from '../../constants/icons';
import DynamicSVGIcon from '../Common/DynamicSVGIcon';
import RenderMultiLevelNav from './RenderMultiLevelNav';
import { NavItem, NavMenu, Title, Icon } from './Sidenav.styles';

// function to render subnavs
const RenderSubNavs = ({ parent, Name, SubMenu: navs, active, Icon: icon, IconActive }) => {
  const [showDropdown, setshowDropdown] = useState(false);
  const location = useLocation();
  const { localeStrings } = useSelector((state) => state.localeStrings);

  useEffect(() => {
    const formatedLink = location.pathname.split('/').slice(0, 3).join('/');
    if (formatedLink === parent && !showDropdown) setshowDropdown(true);
  }, [location]);

  return (
    <>
      <NavMenu onClick={() => setshowDropdown(!showDropdown)} className={showDropdown ? 'active' : ''}>
        <div className={`arrow ${active ? '' : 'hidden'}`}>{Icons.dropArrow}</div>
        {/* <Icon className={`icon ${active ? '' : 'hidden'}`} icon={showDropdown ? activeIcon : icon} /> */}
        <Icon className={`icon ${active ? '' : 'hidden'}`}>
          <DynamicSVGIcon iconUrl={showDropdown ? IconActive : icon} width='20px' />
        </Icon>
        {active && <Title>{localeStrings[Name] || Name}</Title>}
      </NavMenu>

      <div>
        {showDropdown &&
          active &&
          navs.map((nav, i) => {
            if (nav.IsLeaf === '0') {
              return <RenderMultiLevelNav key={i} {...nav} active={active} activeIcon={IconActive} />;
            }
            return (
              <NavItem key={i} to={{ pathname: nav.Permalink, meta: nav.Meta }} style={{ paddingLeft: '8rem' }}>
                {showDropdown && <Title>{localeStrings[nav.Name] || nav.Name}</Title>}
              </NavItem>
            );
          })}
      </div>
    </>
  );
};

export default memo(RenderSubNavs);
