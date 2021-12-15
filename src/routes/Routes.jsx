/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getUserDataFromLocal } from '../shared/utility/helper';
import Login from '../views/auth/login/Login.view';
import Iframe from '../component/ResultView/Iframe/Iframe';
import Layout from '../views/Layout/Layout';

const Routes = () => {
  const { authenticated } = useSelector((state) => state.loginData);
  const userData = getUserDataFromLocal();
  return (
    <Switch>
      <Route
        path='/home'
        exact={false}
        name='home'
        render={(props) => (userData?.token || authenticated ? <Layout {...props} /> : <Redirect to='/' />)}
      />
      <Route
        path='/filter-iframe'
        exact={false}
        name='iframe'
        render={(props) => (userData?.token || authenticated ? <Iframe {...props} /> : <Redirect to='/' />)}
      />
      <Route
        path='/'
        exact={false}
        name='login'
        render={(props) => (userData?.token || authenticated ? <Redirect to='/home' /> : <Login {...props} />)}
      />
    </Switch>
  );
};

export default Routes;
