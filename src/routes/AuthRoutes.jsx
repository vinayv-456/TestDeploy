/* eslint-disable max-len */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoutes } from './route';

const LoginRoutes = () => {
  const menu = AuthRoutes.map((route, index) => {
    const { path, exact, name, component } = route;
    if (component) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={index} path={path} exact={exact} name={name} render={(props) => <route.component {...props} />} />
      );
    }

    return null;
  });

  return <Switch>{menu}</Switch>;
};

export default LoginRoutes;
