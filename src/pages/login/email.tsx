import FullpageLayout from '@/components/layouts/fullpage';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { requestAPI } from '@/utils/APIUtil';
import { useAuth, User } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const EmailPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoggedIn } = useAuth();
  const { push } = useRouter();
  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);
  const handleSubmit = useCallback(async () => {
    const user = await requestAPI<User>('/user/login', { email, password });
    if (user && user.id) {
      setLoggedIn(user);
      await push('/login/exist');
    }
  }, [email, password, push, setLoggedIn]);
  const handleRegister = useCallback(async () => {
    await push('/login/register');
  }, [push]);

  return (
    <>
      <FullpageLayout>
        <LoginFormWrapper>
          <LoginFormTitle>Sign in to your account</LoginFormTitle>
          <LoginFormDescription>Enter your email address.</LoginFormDescription>
          <LoginFormInput
            placeholder="example@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <LoginFormInput
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          <LoginFormButton onClick={handleSubmit}>Next</LoginFormButton>
          <LoginFormDidntFoundText>
            Don't have an account? <LoginAnchor onClick={handleRegister}>Register now!</LoginAnchor>
          </LoginFormDidntFoundText>
        </LoginFormWrapper>
      </FullpageLayout>
    </>
  );
};

const LoginFormWrapper = styled.div`
  display: block;
  min-width: 400px;
  color: var(--dark);
  text-align: center;
`;

const LoginFormTitle = styled.h1`
  display: block;
  font-size: 40px;
  margin-bottom: 18px;
  color: var(--dark);
`;

const LoginFormDescription = styled.span`
  display: block;
  font-size: 15px;
  margin-bottom: 40px;
  color: var(--dark);
`;

const LoginFormInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 13px 0;
  text-align: center;
  font-size: 15px;
  border: solid 4px var(--primary);
  outline: none;
  margin-bottom: 13px;
`;

const LoginFormButton = styled.button`
  display: block;
  background: var(--primary);
  border: 0;
  border-radius: 4px;
  color: #fff;
  height: 46px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  margin-bottom: 22px;
  cursor: pointer;
`;

const LoginFormDidntFoundText = styled.p`
  display: block;
  color: #484848;
  font-size: 13px;
`;

const LoginAnchor = styled.a`
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
`;

export default EmailPage;
