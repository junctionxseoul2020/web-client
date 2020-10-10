import FullpageLayout from '@/components/layouts/fullpage';
import { NextPage } from 'next';
import React from 'react';
import styled from '@emotion/styled';

const LoginProfileWrapper = styled.div`
  text-align: center;
`;
const LoginProfileImg = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 12px;
`;
const LoginProfileName = styled.p`
  margin-bottom: 52px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
`;

const LoginPage: NextPage = () => {
  return (
    <>
      <FullpageLayout>
        <LoginFormWrapper>
          <LoginProfileWrapper>
            <LoginProfileImg src="https://via.placeholder.com/500" />
            <LoginProfileName>Nickname</LoginProfileName>
          </LoginProfileWrapper>
          <LoginFormButton>Continue</LoginFormButton>
          <LoginFormDidntFoundText>
            Do you have another account? <LoginAnchor>Sign in with another account</LoginAnchor>
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
`;

export default LoginPage;
