/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { commonRoutes } from './route';

// eslint-disable-next-line import/no-mutable-exports
const Home = () => {
  const { finalMenu } = useSelector((state) => state.home);

  const homeMenu =
    finalMenu &&
    finalMenu.length > 0 &&
    [...finalMenu, ...commonRoutes].map((route, index) => {
      const { path, exact, name, Component, menuId } = route;
      if (Component) {
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            name={name}
            render={(props) => <Component {...props} menuId={menuId} />}
          />
        );
      }

      return null;
    });

  return <Switch>{homeMenu}</Switch>;
};
export default Home;
