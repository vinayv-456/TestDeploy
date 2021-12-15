/* eslint-disable max-len */

import LoginForm from '../views/auth/login/LoginForm';
import ForgotPassword from '../views/auth/ForgotPassword/ForgotPassword';
import OtpView from '../views/auth/OtpView/Otp.View';
import ResetPassword from '../views/auth/ResetPassword/ResetPassword.view';
import ResetSuccess from '../views/auth/ResetSuccess/ResetSuccess.view';
import Card from '../component/Card';
import Search from '../views/Search/Search.view';
import KPVShortlist from '../component/ResultView/KPVShortlist/KPVShortlist.view';
import KPVCharting from '../component/KPVCharts/KPVCharting/KPVCharting.view';
import UpsertPane from '../component/UpsertPane/UpsertPane.view';
import FAQs from '../component/HeaderOptions/HelpDropdownModal/FAQs/FAQs.view';
import Tutorials from '../component/HeaderOptions/HelpDropdownModal/Tutorials/Tutorials.view';
import Alarams from '../component/Alarams/Alarams.view';

export const AuthRoutes = [
  { path: '/', exact: true, name: 'login', component: LoginForm },
  {
    path: '/forgot-password',
    exact: true,
    name: 'forgotPassword',
    component: ForgotPassword
  },
  {
    path: '/email-verify',
    exact: true,
    name: 'emailVerify',
    component: OtpView
  },
  {
    path: '/reset-password',
    exact: true,
    name: 'resetPassword',
    component: ResetPassword
  },
  {
    path: '/reset-success',
    exact: true,
    name: 'resetSuccess',
    component: ResetSuccess
  }
];

export const commonRoutes = [
  { path: '/home/search', exact: true, name: 'search', Component: Search },
  { path: '/home/kpv-shortlist', exact: true, name: 'kpv-shortlist', Component: KPVShortlist },
  { path: '/home/kpv-charting', exact: true, name: 'kpv-chart', Component: KPVCharting },
  { path: '/home/kpv-charting/add-pane', exact: true, name: 'kpv-chart-add-pane', Component: UpsertPane },
  { path: '/home/kpv-charting/edit-pane', exact: true, name: 'kpv-chart-edit-pane', Component: UpsertPane },
  { path: '/home/FAQs', exact: true, name: 'FAQs', Component: FAQs },
  { path: '/home/tutorials', exact: true, name: 'tutorials', Component: Tutorials },
  { path: '/home/alarams', exact: true, name: 'alarams', Component: Alarams },
  { path: '', exact: true, name: 'home', Component: Card }
];
