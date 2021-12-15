/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { localString } from '../../../localization/localString';
import { Input, Button } from '../../../component/index';
import { LoginForm, LogoContainer, LogoText } from '../login/Login.style';
import { Return, Desc, Error, Heading, BackArrow } from './ForgotPassword.style';
import { vistrianLogo, emailIcon, inputFeildError } from '../../../assets/icons';
import { ReactComponent as BackArrowIcon } from '../../../assets/icons/login/back_arrow.svg';
import { WebService } from '../../../services/axios/webServices';
import { apiEndPoints } from '../../../services/axios/endPoints';
import Toast from '../../../component/Common/Toast';

const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState('');

  const [emailVerifyError, setEmailVerifyError] = useState(false);
  const [emailVerifyErrorMsg, setEmailVerifyErrorMsg] = useState('');
  const [emptyFeild, setEmptyFeild] = useState(false);

  const { language } = useSelector((state) => state.configData);
  const { localeStrings } = useSelector((state) => state.localeStrings);
  const string = localString[language];
  // input validation error
  // api validation error

  const handleVerification = async () => {
    try {
      if (email) {
        const resp = await WebService.post(apiEndPoints.forgotPassword, { email });
        if (resp.status === 200) {
          props.history.push('/email-verify');
        } else {
          throw resp;
        }
      } else {
        setEmptyFeild(true);
      }
    } catch (e) {
      if (e?.response?.status) {
        switch (e.response.status) {
          case 400:
            setEmailVerifyError(true);
            setEmailVerifyErrorMsg(e.response?.data?.message);
            break;
          case 500:
            setEmailVerifyErrorMsg('Somthing went wrong try later');
            break;
          default:
            setEmailVerifyErrorMsg('Unable to update. Try again later');
            break;
        }
      } else {
        setEmailVerifyErrorMsg('No connection try again Later.');
      }
    }
  };

  const backToLogin = () => {
    props.history.goBack();
  };

  const clearToastMessage = () => {
    setEmailVerifyErrorMsg('');
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (emptyFeild || emailVerifyErrorMsg || emailVerifyError) {
      setEmptyFeild(false);
      setEmailVerifyErrorMsg('');
      setEmailVerifyError(false);
    }
  };
  return (
    <LoginForm>
      <LogoContainer src={vistrianLogo} />
      <Heading marginBottom='1.1rem'>{localeStrings?.forgotPassword || 'Forgot Password'}</Heading>
      {emailVerifyError ? (
        <Error>
          {localeStrings?.emailVerifyError ||
            'This email is not part of Active directory. Please contact your IT support.'}
        </Error>
      ) : (
        <Desc>{localeStrings?.verifyEmail || 'Verify your email'}</Desc>
      )}
      <Input
        name='email'
        value={email}
        type='text'
        placeholder={localeStrings?.emailPlaceholder || 'Enter your email'}
        iconUrl={emailVerifyError ? inputFeildError : emailIcon}
        outline={emailVerifyError || emptyFeild}
        errorMsg={emptyFeild && 'Please provide email'}
        handleInputChange={handleInputChange}
        onSubmit={handleVerification}
      />
      <Button marginTop='0.4rem' onClick={handleVerification}>
        {localeStrings?.verifyEmailBtnText || 'Verify email'}
      </Button>
      <Return onClick={backToLogin}>
        <BackArrowIcon className='fill' style={{ height: '1.5rem', width: '3rem' }} />
        {localeStrings?.backToLogin || 'Back to login'}
      </Return>
      {emailVerifyErrorMsg && !emailVerifyError && (
        <Toast header='Error' message={emailVerifyErrorMsg} fn={clearToastMessage} />
      )}
    </LoginForm>
  );
};
export default ForgotPasswordForm;
