import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { localString } from '../../../localization/localString';
import { Input, Button } from '../../../component/index';
import { LoginForm, LogoContainer, LogoText } from '../login/Login.style';
import { Return, BackArrow } from '../ForgotPassword/ForgotPassword.style';
import { Msg, Nav, QueryMsg, Description, Heading } from './Otp.style';
import { backArrow, vistrianLogo } from '../../../assets/icons';
import { WebService } from '../../../services/axios/webServices';
import { apiEndPoints } from '../../../services/axios/endPoints';
import Toast from '../../../component/Common/Toast';
import { ReactComponent as BackArrowIcon } from '../../../assets/icons/login/back_arrow.svg';

const OtpView = (props) => {
  const { language } = useSelector((state) => state.configData);
  const string = localString[language];
  const [otp, setOtp] = useState('');
  const [resendSuccessful, setResendSuccessful] = useState(false);
  // input validation error
  const [emptyFeild, setEmptyFeild] = useState(false);
  // api validation error
  const [err, setErr] = useState('');
  const [showToast, setShowToast] = useState(false);
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const handleVerification = async () => {
    if (otp) {
      try {
        // eslint-disable-next-line max-len
        const resp = await WebService.post(apiEndPoints.ValidateCode, { code: otp });
        if (resp.status === 200) {
          props.history.push('/reset-password');
        } else {
          throw resp;
        }
      } catch (e) {
        setShowToast(true);
        if (e?.response?.status) {
          switch (e.response.status) {
            case 400:
              setErr(e.response?.data?.message);
              break;
            case 500:
              setErr('Somthing went wrong try later');
              break;
            default:
              setErr('Unable to update. Try again later');
              break;
          }
        } else {
          setErr('No connection try again Later.');
        }
      }
    } else {
      setEmptyFeild(true);
    }
  };

  const clearToastMessage = () => {
    setShowToast(false);
  };

  const backToLogin = () => {
    props.history.push('/');
  };

  const handleInputChange = (e) => {
    setOtp(e.target.value);
    if (err || emptyFeild) {
      setErr('');
      setEmptyFeild(false);
    }
  };
  const handleResend = () => {
    setErr('');
    setResendSuccessful(true);
    setShowToast(true);
  };

  return (
    <LoginForm>
      <LogoContainer src={vistrianLogo} />
      <Heading marginBottom='3rem'>{localeStrings?.forgotPassword || 'Forgot Password'}</Heading>
      <Description marginBottom='25px'>
        {localeStrings?.verificationCodeMsg ||
          'Please enter the verification code that you have received in your email'}
      </Description>
      <Input
        name='otp'
        type='text'
        outline={emptyFeild}
        value={otp}
        errorMsg='Please provide Otp'
        handleInputChange={handleInputChange}
        onSubmit={handleVerification}
      />
      <QueryMsg>
        <Msg>{localeStrings?.resendQuery || "Didn't receive the code?"}</Msg>
        <Nav onClick={handleResend}>{localeStrings?.resend || 'Resend'}</Nav>
        {resendSuccessful && (
          <Toast
            fn={() => setResendSuccessful(false)}
            header='Success'
            show={showToast}
            message='Otp sent successfully'
          />
        )}
      </QueryMsg>
      <Button marginTop='0.4rem' onClick={handleVerification}>
        {localeStrings?.codeVal || 'Validate code'}
      </Button>
      <Return onClick={backToLogin}>
        <BackArrowIcon className='fill' style={{ height: '1.5rem', width: '3rem' }} />
        {localeStrings?.backToLogin || 'Back to login'}
      </Return>
      {err && showToast && <Toast header='Error' message={err} fn={clearToastMessage} />}
    </LoginForm>
  );
};
export default OtpView;
