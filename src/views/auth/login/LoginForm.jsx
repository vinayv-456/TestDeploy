import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localString } from '../../../localization/localString';

import { Input } from '../../../component/index';

import { LoginForm, Greeting, ForgotPassword, Btn, LogoContainer, LogoText } from './Login.style';
import { vistrianLogo, lock, emailIcon } from '../../../assets/icons/index';
import { Creators as loginCreators } from '../store';
import Toast from '../../../component/Common/Toast';

const LoginFormView = (props) => {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [emptyFeilds, setEmptyFeilds] = useState([]);

  const { language } = useSelector((state) => state.configData);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.loginData.error);

  const handleInputChange = (e) => {
    // unset empty feilds on change
    if (emptyFeilds[e.target.name]) {
      const temp = { ...emptyFeilds };
      temp[e.target.name] = false;
      setEmptyFeilds(temp);
    }

    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // check for empty feilds
    const feilds = Object.keys(loginDetails);
    let isEmpty = false;
    const emptyFeildsTemp = {};
    feilds.map((feild) => {
      if (loginDetails[feild] === '') {
        emptyFeildsTemp[feild] = true;
        isEmpty = true;
      }
      return emptyFeildsTemp;
    });
    setEmptyFeilds(emptyFeildsTemp);

    if (!isEmpty) {
      dispatch(loginCreators.login(loginDetails));
    }
  };

  const clearLoginToastMessage = () => {
    dispatch(loginCreators.resetAuthError());
  };

  return (
    <LoginForm>
      <LogoContainer src={vistrianLogo} />
      <Greeting>{localeStrings?.welcome || 'Welcome'}</Greeting>
      <Input
        name='email'
        type='text'
        value={loginDetails.email}
        placeholder={localeStrings?.emailPlaceholder || 'Enter your email'}
        outline={emptyFeilds.email}
        errorMsg='Please provide Email'
        iconUrl={emailIcon}
        handleInputChange={handleInputChange}
        onSubmit={handleLogin}
      />
      <Input
        name='password'
        type='password'
        outline={emptyFeilds.password}
        errorMsg='Please provide Password'
        value={loginDetails.password}
        placeholder={localeStrings?.passwordPlaceholder || 'Enter your password'}
        iconUrl={lock}
        handleInputChange={handleInputChange}
        onSubmit={handleLogin}
      />
      <ForgotPassword
        onClick={() => {
          props.history.push('/forgot-password');
        }}
      >
        {localeStrings?.forgotPasswordQuery || 'Forgot Password?'}
      </ForgotPassword>
      <Btn onClick={handleLogin}>{localeStrings?.login || 'Login'}</Btn>
      {error && <Toast fn={clearLoginToastMessage} header='Error' message={error} />}
    </LoginForm>
  );
};

export default LoginFormView;
