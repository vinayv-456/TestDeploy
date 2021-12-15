/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-lonely-if */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { device, fontSize } from '../../constants';
import { shadow } from '../../constants/colors';
import { Div } from '../../globalStyles';
import { Creators as GlobalCreators } from './store';
import IconComponent from '../Icon/Icons';

const Input = styled.input`
  background-color: ${({ theme }) => theme.customTheme.primary};
  box-shadow: inset -5px -5px 10px #ffffff14, inset 5px 5px 10px rgba(0, 0, 0, 0.1);

  border-radius: 1rem;
  opacity: 1;
  border: 0rem;
  width: 100%;
  height: 45px;
  padding-left: 2.1rem;
  padding-right: 3.7rem;
  color: ${({ theme }) => theme.contrast.tertiary};
  font-size: ${fontSize.text};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.contrast.tertiary};
    font-size: ${fontSize.loginInputSize};
  }
  @media ${device.tablet} {
    box-shadow: none;
    font-size: 16px;
    ::placeholder {
      color: ${({ theme }) => theme.contrast.tertiary};
      font-size: 16px;
    }
  }
`;

const Container = styled(Div)`
  position: relative;
  z-index: 6;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Icon = styled.div`
  position: absolute;
  right: 3%;
`;

const generalLoopInsideSubMenu = (menu) => {
  let result = [];
  menu.forEach((nav) => {
    if (nav.IsLeaf === '1') {
      result = [...result, { link: nav.Permalink, description: nav['[Description]'], title: nav.Name }];
    } else {
      generalLoopInsideSubMenu(nav.SubMenu);
    }
  });
  return result;
};

const loopInsideSubMenu = (subMenu, keyVal, parentMatch) => {
  let result = [];
  subMenu.forEach((subNav) => {
    // if it matches with parent then show all the subnavs of it
    if (parentMatch) {
      if (subNav.IsLeaf === '1') {
        result = [...result, { link: subNav.Permalink, description: subNav['[Description]'], title: subNav.Name }];
      } else {
        const returnRes = generalLoopInsideSubMenu(subNav.SubMenu);
        result = [...result, ...returnRes];
      }
    } else {
      if (subNav.IsLeaf === '0') {
        const parentMatch = subNav.Name.toLowerCase().includes(keyVal.toLowerCase());
        const returnRes = loopInsideSubMenu(subNav.SubMenu, keyVal, parentMatch);
        result = [...result, ...returnRes];
      } else if (subNav.Name.toLowerCase().includes(keyVal.toLowerCase())) {
        result = [...result, { link: subNav.Permalink, description: subNav['[Description]'], title: subNav.Name }];
      }
    }
  });
  return result;
};

// eslint-disable-next-line arrow-body-style
export const findMatches = (data, keyVal) => {
  if (!keyVal) {
    return null;
  }
  let result = [];
  data.forEach((nav) => {
    if (nav.IsLeaf === '0') {
      const parentMatch = nav.Name.toLowerCase().includes(keyVal.toLowerCase());
      const returnedRes = loopInsideSubMenu(nav.SubMenu, keyVal, parentMatch);
      if (returnedRes.length > 0) {
        result = [...result, ...returnedRes];
      }
    } else if (nav.Name.toLowerCase().includes(keyVal.toLowerCase())) {
      result = [...result, { link: nav.Permalink, description: nav['[Description]'], title: nav.Name }];
    }
  });
  return result;
};

const GlobalSearch = ({ handleShowSearchBarInMobile }) => {
  const { menu: menuData } = useSelector((state) => state.home);
  const { searchResults, showDropDown, searchQuery } = useSelector((state) => state.globalSearchData);
  const searchRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const toggleDropDown = (value) => {
    dispatch(GlobalCreators.setSearchMenuDropDown(value));
  };

  const handleEnterSearch = () => {
    if (window.innerWidth < 769) handleShowSearchBarInMobile();
    dispatch(GlobalCreators.setSearchQueryHistory({ data: searchQuery }));
    if (searchResults?.length) {
      history.push('/home/search');
      if (showDropDown) {
        toggleDropDown(false);
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth < 769) {
      searchRef.current.focus();
    }
  }, []);

  const handleInput = (e) => {
    if (!showDropDown) {
      toggleDropDown(true);
    }
    const data = findMatches(menuData, e.target.value);
    dispatch(GlobalCreators.setSearchResults(data));
    dispatch(GlobalCreators.setSearchQuery(e.target.value));
  };

  const _handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      handleEnterSearch();
    }
  };

  return (
    <Container>
      <Input
        placeholder='Search'
        value={searchQuery}
        ref={searchRef}
        onChange={handleInput}
        onFocus={() => toggleDropDown(true)}
        onKeyUp={(e) => _handleKeyPress(e)}
      />
      <Icon>
        <IconComponent name='searchW' onClick={handleEnterSearch} cursor='pointer' />
      </Icon>
    </Container>
  );
};

export default GlobalSearch;
