/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localString } from '../../../localization/localString';
import { Input } from '../../../component/index';
import { LoginForm, LogoContainer, LogoText } from '../login/Login.style';
import { DescMsg, Btn, Heading } from './ResetPassword.style';
import { passwordShow, passwordHide, vistrianLogo } from '../../../assets/icons';
import { WebService } from '../../../services/axios/webServices';
import { apiEndPoints } from '../../../services/axios/endPoints';
import Toast from '../../../component/Common/Toast';

const ForgotPasswordForm = (props) => {
  const [showPwd, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({ pwd: '', confirmPwd: '' });
  const [emptyFeilds, setEmptyFeilds] = useState({ pwd: false, confirmPwd: false });
  // api validation error
  const [error, setError] = useState('');

  const { language } = useSelector((state) => state.configData);
  const string = localString[language];
  const { localeStrings } = useSelector((state) => state.localeStrings);

  const clearToastMessage = () => {
    setError('');
  };

  const handleVerification = async () => {
    if (passwords.pwd) {
      try {
        if (passwords.pwd === passwords.confirmPwd) {
          const payload = { newPassword: passwords.pwd };
          const resp = await WebService.post(apiEndPoints.ResetPassword, payload);
          if (resp.status === 200) {
            props.history.push('/reset-success');
          } else throw resp;
        } else {
          setError("Passwords didn't match");
        }
      } catch (e) {
        if (e?.response?.status) {
          switch (e.response.status) {
            case 400:
              setError(e.response?.data?.message);
              break;
            case 500:
              setError('Somthing went wrong try later');
              break;
            default:
              setError('Unable to update. Try again later');
              break;
          }
        } else {
          setError('No connection try again Later.');
        }
      }
    } else {
      const temp = { ...emptyFeilds };
      if (!passwords.confirmPwd) {
        temp.confirmPwd = true;
      }
      if (!passwords.pwd) {
        temp.pwd = true;
      }
      setEmptyFeilds(temp);
    }
  };

  const handleClickPwd = () => {
    setShowPassword(!showPwd);
  };

  const handleInputChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
    if (emptyFeilds[e.target.name]) {
      setEmptyFeilds({ ...emptyFeilds, [e.target.name]: false });
    }
  };

  return (
    <LoginForm>
      <LogoContainer src={vistrianLogo} />
      <Heading marginBottom='1.1rem'>{localeStrings?.forgotPassword || 'Forgot Password'}</Heading>
      <DescMsg>{localeStrings?.setPwdMsg || 'Set a new password'}</DescMsg>
      <Input
        name='pwd'
        type={showPwd ? 'text' : 'password'}
        value={passwords.pwd}
        outline={emptyFeilds.pwd}
        errorMsg='Please provide password'
        placeholder={localeStrings?.newPwd || 'Enter new password'}
        iconUrl={showPwd ? passwordHide : passwordShow}
        onIconPress={handleClickPwd}
        handleInputChange={handleInputChange}
        onSubmit={handleVerification}
      />
      <Input
        name='confirmPwd'
        value={passwords.confirmPwd}
        type='password'
        outline={emptyFeilds.confirmPwd}
        errorMsg='Please provide password to confirm'
        placeholder={localeStrings?.reEnterPwd || 'Re-enter new password'}
        handleInputChange={handleInputChange}
        onSubmit={handleVerification}
      />
      <Btn onClick={handleVerification}>{localeStrings?.resetPwd || 'Reset password'}</Btn>
      {error && <Toast header='Error' fn={clearToastMessage} message={error} />}
    </LoginForm>
  );
};
export default ForgotPasswordForm;
