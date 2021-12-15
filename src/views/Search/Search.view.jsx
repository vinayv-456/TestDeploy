import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavItemsContent from '../../component/NavItemsContent/NavItemsContent.view';

const Search = () => {
  const { searchResults } = useSelector((state) => state.globalSearchData);
  const [menu, setMenu] = useState([]);
  const parsePaths = (searchResults) => {
    const menuTemp = [];
    searchResults?.forEach((ele) => {
      const obj = {
        path: ele.link,
        category: ele.link.split('/')[2] || ele.link.split('/')[1],
        title: ele.title,
        description: ele.description
      };
      menuTemp.push(obj);
    });
    setMenu(menuTemp);
  };

  useEffect(() => {
    parsePaths(searchResults);
  }, [searchResults]);

  return <NavItemsContent menu={menu} />;
};
export default Search;
