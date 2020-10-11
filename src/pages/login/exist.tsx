import FullpageLayout from '@/components/layouts/fullpage';
import { NextPage } from 'next';
import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import ProfilePicture from '@/components/ProfilePicture';

const LoginProfileWrapper = styled.div`
  text-align: center;
`;

const LoginProfileName = styled.p`
  margin-top: 12px;
  margin-bottom: 52px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
`;

const ProfilePage: NextPage = () => {
  const { user, setLoggedOut } = useAuth();
  const { push } = useRouter();

  const handleLogout = useCallback(async () => {
    setLoggedOut();
    await push('/login/email');
  }, [push, setLoggedOut]);
  const handleLogIn = useCallback(async () => {
    await push('/login/splash/1');
  }, [push]);

  return (
    <>
      <FullpageLayout>
        <LoginFormWrapper>
          <LoginProfileWrapper>
            <ProfilePicture src={user?.photo || ''} width="128px" height="128px" />
            <LoginProfileName>{user?.name}</LoginProfileName>
          </LoginProfileWrapper>
          <LoginFormButton onClick={handleLogIn}>Continue</LoginFormButton>
          <LoginFormDidntFoundText>
            Do you have another account?{' '}
            <LoginAnchor onClick={handleLogout}>Sign in with another account</LoginAnchor>
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
  font-weight: 600;
`;

export default ProfilePage;
