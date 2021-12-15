import React from 'react';
import { useSelector } from 'react-redux';
import { resetSuccess } from '../../../assets/icons';

import { localString } from '../../../localization/localString';
import { LoginForm, LogoContainer, LogoText } from '../login/Login.style';
import { Heading, Btn } from './ResetSuccess.style';

const ForgotPasswordForm = (props) => {
  const { language } = useSelector((state) => state.configData);
  const string = localString[language];
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleVerification = () => {
    props.history.push('/');
  };

  return (
    <LoginForm>
      <LogoContainer src={resetSuccess} />
      <Heading marginBottom='1.1rem'>{localeStrings?.pwdSuccess || 'Password successfully reset'}</Heading>
      <Btn marginTop='5.8rem' onClick={handleVerification}>
        {localeStrings?.login || 'Login'}
      </Btn>
    </LoginForm>
  );
};
export default ForgotPasswordForm;
