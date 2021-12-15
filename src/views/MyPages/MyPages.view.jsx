/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import NavItemsContent from '../../component/NavItemsContent/NavItemsContent.view';

const MyPages = () => {
  const [menu, setMenu] = useState([]);

  const { finalMenu } = useSelector((state) => state.home);

  const parsePaths = (finalMenu) => {
    const menuTemp = [];
    finalMenu?.forEach((ele) => {
      const obj = {
        path: ele.path,
        category: ele.path.split('/')[2] || ele.path.split('/')[1],
        title: ele.name,
        description: ele.description
      };
      menuTemp.push(obj);
    });
    return menuTemp;
  };
  useEffect(() => {
    const pages = parsePaths(finalMenu);
    setMenu(pages);
  }, [finalMenu]);

  return <NavItemsContent menu={menu} />;
};
export default MyPages;
