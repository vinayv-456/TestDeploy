/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localString } from '../../localization/localString';
import IconComponent from '../Icon/Icons';
import { Creators } from '../../views/Layout/store';
// import { navs } from './routes';

import {
  Container,
  Footer,
  NavItem,
  Scroll,
  Title,
  Toggle,
  Icon,
  Image,
  MultiLevelNavHeaderContainer,
  MultiLevelNavHeader,
  BreadCrumb
} from './Sidenav.styles';
import DropArrow from '../../assets/icons/layout/dropdownarrow.svg';
import RenderSubNavs from './RenderSubNavs';
import RenderMultiLevelNav from './RenderMultiLevelNav';
import DynamicSVGIcon from '../Common/DynamicSVGIcon';
import Hamburger from '../../assets/icons/layout/hamburger.svg';

const SideNav = ({ view, sideNavRef }) => {
  const { language } = useSelector((state) => state.configData);
  const { menu, showSideNav, activeMultiLevelNav } = useSelector((state) => state.home);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const string = localString[language];

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(Creators.setShowSideNav({ showSideNav: !showSideNav }));
  };

  const deleteLastItem = () => {
    if (activeMultiLevelNav.length < 2) {
      dispatch(Creators.setActiveMultiLevelMenu([]));
    } else {
      const newArray = [...activeMultiLevelNav];
      newArray.pop();
      dispatch(Creators.setActiveMultiLevelMenu(newArray));
    }
  };

  return (
    <Container ref={sideNavRef} active={showSideNav} className={`icon ${showSideNav ? '' : 'hidden'}`}>
      {/* toggle button */}
      <Toggle onClick={handleToggle}>
        {/* <IconComponent name='menu' cursor='pointer' ml={2} /> */}
        <DynamicSVGIcon iconUrl={Hamburger} width='1.5rem' />
      </Toggle>
      {/* menu container */}
      <Scroll className={`${showSideNav ? '' : 'hidden'}`}>
        {activeMultiLevelNav && activeMultiLevelNav.length > 0 && showSideNav ? (
          <>
            <MultiLevelNavHeaderContainer onClick={deleteLastItem}>
              <Image>
                <DynamicSVGIcon iconUrl={DropArrow} width='1.4rem' />
              </Image>
              <div>
                <MultiLevelNavHeader>
                  {localeStrings[activeMultiLevelNav[activeMultiLevelNav.length - 1].parent.name] ||
                    activeMultiLevelNav[activeMultiLevelNav.length - 1].parent.name}
                </MultiLevelNavHeader>
                <BreadCrumb>{activeMultiLevelNav[activeMultiLevelNav.length - 1].parent.Permalink}</BreadCrumb>
              </div>
            </MultiLevelNavHeaderContainer>
            {activeMultiLevelNav[activeMultiLevelNav.length - 1].subMenu.map((nav, i) => (
              <RenderMultiLevelNav key={i} {...nav} active={showSideNav} />
            ))}
          </>
        ) : (
          menu.map((nav, index) => {
            if (nav.IsLeaf === '0') {
              return (
                <RenderSubNavs
                  parent={nav.Permalink}
                  key={index}
                  {...nav}
                  active={showSideNav}
                  activeIcon={nav.IconActive}
                />
              );
            }
            return (
              <NavItem key={index} exact={true} to={nav.Permalink} activeicon={nav.IconActive}>
                {/* <Icon className='icon' icon={nav.icon} /> */}
                <Icon className='icon'>
                  <DynamicSVGIcon iconUrl={nav.Icon} width='2rem' />
                </Icon>
                {/* {url(nav.icon)} */}
                {/* <object type='image/svg+xml' data={nav.icon} /> */}
                {showSideNav && (localeStrings[nav.Name] || nav.Name)}
              </NavItem>
            );
          })
        )}
      </Scroll>

      {/* logo container */}
      {view === 'web' ? (
        <Footer>
          <IconComponent name='vistrian' mr={1.5} />
          {showSideNav && string.brandingTitle}
        </Footer>
      ) : (
        <Footer>
          <IconComponent name='settingsBlack' ml={2} mr={1.5} />
          <Title>{showSideNav && string.settings}</Title>
        </Footer>
      )}
    </Container>
  );
};

export default SideNav;
