import FullpageLayout from '@/components/layouts/fullpage';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import ProfilePicture from '@/components/ProfilePicture';

const LoginProfileWrapper = styled.div`
  text-align: center;
`;
const LoginProfileName = styled.p`
  margin-bottom: 52px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
`;

const LoginPage: NextPage = () => {
  const { user, setLoggedOut } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoggedOut();
    }, 5000);
  }, [setLoggedOut]);

  return (
    <>
      <FullpageLayout>
        <LoginFormWrapper>
          <LoginFormTitle>You are done for today!</LoginFormTitle>
          <LoginProfileWrapper>
            <ProfilePicture src={user?.photo} width="128px" height="128px" />
            <LoginProfileName>{user?.name}</LoginProfileName>
          </LoginProfileWrapper>
          <LoginFormDidntFoundText>
            After 5 seconds, go to the login screen.
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
  margin-bottom: 26px;
  color: var(--dark);
`;

const LoginFormDidntFoundText = styled.p`
  display: block;
  color: #484848;
  font-size: 13px;
`;

const LoginAnchor = styled.a`
  color: var(--primary);
  cursor: pointer;
  font-weight: 600;
`;

export default LoginPage;
