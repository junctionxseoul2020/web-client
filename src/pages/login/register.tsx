import FullpageLayout from '@/components/layouts/fullpage';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { User } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { requestAPI } from '@/utils/APIUtil';

const RegisterPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [hashCode, setHashCode] = useState('');
  const { push } = useRouter();

  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);
  const handleNameChange = useCallback(event => {
    setName(event.target.value);
  }, []);
  const handleHashCodeChange = useCallback(event => {
    setHashCode(event.target.value);
  }, []);
  const handleSubmit = useCallback(async () => {
    const user = await requestAPI<User>('/user/register', {
      name,
      email,
      password,
      hashcode: hashCode,
      workspaceId: '1',
    });
    if (user && user.id) {
      await push('/login/email');
    }
  }, [email, hashCode, name, password, push]);

  return (
    <>
      <FullpageLayout>
        <LoginFormWrapper>
          <LoginFormTitle>Sign up for membership</LoginFormTitle>
          <LoginFormDescription>Please fill in the information below.</LoginFormDescription>
          <LoginFormInput
            placeholder="example@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <LoginFormInput placeholder="Name" value={name} onChange={handleNameChange} />
          <LoginFormInput
            placeholder="Zepeto HashCode"
            value={hashCode}
            onChange={handleHashCodeChange}
          />
          <LoginFormInput
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          <LoginFormButton onClick={handleSubmit}>Register</LoginFormButton>
          <LoginFormDidntFoundText>
            Don’t know your workspace URL? <LoginAnchor>Find your workspaces</LoginAnchor>
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
  cursor: pointer;
`;

export default RegisterPage;
