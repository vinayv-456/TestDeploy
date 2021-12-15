/* eslint-disable newline-per-chained-call */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BackArrow from '../../assets/icons/layout/BackArrow.svg';
import search from '../../assets/icons/Filter/Search Black.svg';
import cancel from '../../assets/icons/Filter/cancel black.svg';
import { useBasePath } from '../../shared/hooks/useBasePath';
import {
  ActiveDivider,
  Cell,
  Cell23,
  Container,
  DescText,
  HeaderRow,
  HeaderText,
  HeadingBox,
  HeadingContainer,
  HeadingText,
  HeadingTextWithSearch,
  Image,
  LeftArrow,
  NavItemText,
  NoResultText,
  Row,
  SearchIcon,
  SearchInput,
  SearchQueryText,
  LinkContainer
} from './NavItemsContent.style';
import PaginationComponent from './PaginationComponent';
import { Creators as GlobalCreators } from '../GlobalSearch/store';
import { Creators as LayoutCreators } from '../../views/Layout/store';
import { findMatches } from '../GlobalSearch/GlobalSearch';
import NoResultSvg from '../../assets/icons/layout/no_results_black.svg';
import { populateNestedLink } from '../../constants/helper';
import DynamicSVGIcon from '../Common/DynamicSVGIcon';
import DropArrow from '../../assets/icons/layout/dropdownarrow.svg';

const NavItemsContent = ({ menu, match, history }) => {
  const basePath = useBasePath();
  const dispatch = useDispatch();
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const headers = ['Title', 'Category'];

  const [currentMenus, setCurrentMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState(menu);
  const [showSearchInp, setShowSearchInp] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toggleSearchIcon, setToggleSearchIcon] = useState(true);
  const { menu: menuData, activeMultiLevelNav } = useSelector((state) => state.home);
  const { searchQuery: globalSearchQuery, searchQueryHistory } = useSelector((state) => state.globalSearchData);

  const searchRef = useRef();

  const handlePageChange = (indexOfFirstMenu, indexOfLastMenu) => {
    if (showSearchInp) {
      setCurrentMenus(filteredMenus.slice(indexOfFirstMenu, indexOfLastMenu));
    } else setCurrentMenus(menu.slice(indexOfFirstMenu, indexOfLastMenu));
  };

  const findSearchResults = () => {
    setFilteredMenus(
      menu.filter(
        (ele) =>
          (ele.path.split('/').slice(2).join(' > ') || ele.path.split('/').slice(1).join(' > '))
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) || ele.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const handleTitleSearch = () => {
    if (!toggleSearchIcon) {
      setShowSearchInp(!showSearchInp);
      setToggleSearchIcon(true);
      setSearchQuery('');
      setFilteredMenus(menu);
    } else {
      setShowSearchInp(true);
      if (searchQuery) setToggleSearchIcon(false);
      findSearchResults(searchQuery);
    }
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    if (!toggleSearchIcon) {
      setToggleSearchIcon(true);
    }
  };

  const _handleKeyPress = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setToggleSearchIcon(false);
      findSearchResults(searchQuery);
    }
  };

  useEffect(() => {
    if (showSearchInp) searchRef.current.focus();
  }, [showSearchInp]);
  useEffect(() => {
    setFilteredMenus(menu);
  }, [menu]);

  const handleBackPress = () => {
    if (searchQueryHistory.length) {
      const len = searchQueryHistory.length;
      let popedSearchQuery = searchQueryHistory[len - 1];
      // checking if the topmost element is same as present search query
      if (popedSearchQuery === globalSearchQuery && len > 1) {
        popedSearchQuery = searchQueryHistory[len - 2];
        dispatch(GlobalCreators.setSearchQueryHistory());
      }
      // if len is 1 set searchQuery to null
      if (len > 1) {
        dispatch(GlobalCreators.setSearchQuery(popedSearchQuery));
        const data = findMatches(menuData, popedSearchQuery);
        dispatch(GlobalCreators.setSearchResults(data));
      } else {
        dispatch(GlobalCreators.setSearchQueryHistory());
        dispatch(GlobalCreators.setSearchQuery(''));
        dispatch(GlobalCreators.setSearchResults(null));
      }
    }
    history.goBack();
  };

  const handleGoToPage = (link) => {
    history.push(link);
    const returnVal = populateNestedLink(menuData, link);
    if (returnVal.length > 0) {
      dispatch(LayoutCreators.setActiveMultiLevelMenu([...activeMultiLevelNav, ...returnVal]));
    }
  };

  const _renderPages = () => {
    if (basePath === '/home/search') {
      return menu;
    }
    return currentMenus;
  };
  console.log(basePath);
  return (
    <Container>
      <HeadingContainer>
        <HeadingBox>
          {basePath === '/home/search' ? (
            <>
              <LeftArrow onClick={handleBackPress}>
                <DynamicSVGIcon iconUrl={DropArrow} width='2.5rem' />
              </LeftArrow>

              <HeaderText>
                {localeStrings.searchResults || 'Search Results for'} &quot;
                <SearchQueryText>{globalSearchQuery}</SearchQueryText>&quot;
              </HeaderText>
            </>
          ) : (
            <>
              <HeaderText>{localeStrings.myPages || 'My Pages'}</HeaderText>
              <ActiveDivider />
            </>
          )}
        </HeadingBox>
        {basePath === '/home/mypages' && (
          <PaginationComponent
            handlePageChange={handlePageChange}
            total={showSearchInp ? filteredMenus.length : menu.length}
          />
        )}
      </HeadingContainer>
      {menu.length ? (
        <>
          <HeaderRow>
            {headers.map((ele, key) => (
              <HeadingText key={key} flex={ele === 'Title' ? 2 : 1} className={ele === 'Title' ? 'border-right' : ''}>
                {basePath === '/home/mypages' && ele === 'Title' ? (
                  <HeadingTextWithSearch className={showSearchInp ? 'show' : ''} key={key}>
                    {showSearchInp ? (
                      <SearchInput
                        ref={searchRef}
                        type='text'
                        placeholder='Search Title'
                        onChange={handleSearchQuery}
                        value={searchQuery}
                        onKeyUp={(e) => _handleKeyPress(e)}
                      />
                    ) : (
                      ele
                    )}
                    <SearchIcon src={toggleSearchIcon ? search : cancel} onClick={handleTitleSearch} />
                  </HeadingTextWithSearch>
                ) : (
                  ele
                )}
              </HeadingText>
            ))}
          </HeaderRow>

          {_renderPages().map((ele, key) => {
            const { path, description, category } = ele;
            return (
              <LinkContainer onClick={() => handleGoToPage(path)} key={key} style={{ width: '97%' }}>
                <Row width='100%'>
                  <Cell23 className='border-right'>
                    <NavItemText>{path.split('/').slice(2).join(' > ') || path.split('/').slice(1)}</NavItemText>
                    <DescText>{localeStrings[description] || description}</DescText>
                  </Cell23>
                  <Cell className='jc-center' textTransform='capitalize'>
                    {category}
                  </Cell>
                </Row>
              </LinkContainer>
            );
          })}
        </>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image src={NoResultSvg} width={5} height={5} />
          <NoResultText>{localeStrings.noResult || 'No Result'}</NoResultText>
        </div>
      )}
    </Container>
  );
};

export default withRouter(NavItemsContent);
